import { getBlurImage } from '@/utils/getBlurImg';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionBlockTypes, NotionDatabaseProperty } from './cms.types';

const notionDatabasePropertyResolver = (
  prop: PageObjectResponse['properties'][string],
): NotionDatabaseProperty => {
  const type = prop['type'];

  switch (type) {
    case NotionBlockTypes.rich_text:
      return richTextValueResolver(prop[NotionBlockTypes.rich_text]);
    case NotionBlockTypes.multi_select:
      return prop.multi_select;
    case NotionBlockTypes.title:
      return titleValueResolver(prop[NotionBlockTypes.title]);
    case NotionBlockTypes.last_edited_time:
      return prop.last_edited_time;
    case NotionBlockTypes.date:
      return prop.date?.start ?? null;
    case NotionBlockTypes.select:
      return prop.select;
    case NotionBlockTypes.url:
      return prop.url;
    case NotionBlockTypes.checkbox:
      return prop.checkbox;
    case NotionBlockTypes.files:
      if (prop.files[0]) {
        if (prop.files[0].type == 'file') {
          return prop.files[0].file.url;
        } else if (prop.files[0].type == 'external') {
          return prop.files[0].external.url;
        }
      }
    default:
      console.log({ type });
      throw new Error('Notion Block Resolver Not Found');
  }
};

const richTextValueResolver = (prop: RichTextItemResponse[]): string => {
  return prop[0]?.plain_text ?? '';
};

const titleValueResolver = (prop: RichTextItemResponse[]): string => {
  return prop[0]?.plain_text ?? '';
};

export const isNonEmptyNonPartialNotionResponse = (
  results: (PageObjectResponse | PartialPageObjectResponse)[],
  // @ts-ignore
): results is PageObjectResponse[] => results[0]?.properties !== undefined;

export const formatNotionPageAttributes = async (
  properties: PageObjectResponse['properties'],
  cover: any,
): Promise<{ [key: string]: NotionDatabaseProperty }> => {
  const formattedAttributes: { [key: string]: NotionDatabaseProperty } = {};

  for (const [key, prop] of Object.entries(properties)) {
    const value = notionDatabasePropertyResolver(prop);
    let img = '';
    if (cover) {
      img = cover.type === 'external' ? cover.external.url : cover.file.url;
    }

    formattedAttributes[key] = value;
    formattedAttributes['cover'] = cover;
    img != ''
      ? (formattedAttributes['blurUrl'] = (await getBlurImage(img)).base64)
      : (formattedAttributes['blurUrl'] = '');
  }

  return formattedAttributes;
};
