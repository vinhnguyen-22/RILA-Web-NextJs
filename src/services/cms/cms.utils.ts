import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Block } from 'notion-types';
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
  results: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[],
  // @ts-ignore
): results is PageObjectResponse[] => results[0]?.properties !== undefined;

// export const formatNotionPageAttributes = async (
//   properties: PageObjectResponse['properties'],
//   img: string,
//   id: string,
// ): Promise<{ [key: string]: NotionDatabaseProperty }> => {
//   const formattedAttributes: { [key: string]: NotionDatabaseProperty } = {};
//   const api = new NotionAPI();
//   const { block } = await api.getPage(id);

//   for (const [key, prop] of Object.entries(properties)) {
//     const value = notionDatabasePropertyResolver(prop);
//     formattedAttributes[key] = value;
//     formattedAttributes['cover'] = mapImageUrl(img, block[id].value) || '';
//   }

//   return formattedAttributes;
// };

export const formatNotionPageAttributes = (
  properties: PageObjectResponse['properties'],
): { [key: string]: NotionDatabaseProperty } =>
  Object.entries(properties).reduce((acc, [key, prop]) => {
    const value = notionDatabasePropertyResolver(prop);

    return {
      ...acc,
      [key]: value,
    };
  }, {} as { [key: string]: NotionDatabaseProperty });

export function mapImageUrl(url: string, block: Block): string | null {
  if (!url) {
    throw new Error("URL can't be empty");
  }

  if (url.startsWith('data:')) {
    return url;
  }

  // more recent versions of notion don't proxy unsplash images
  if (url.startsWith('https://images.unsplash.com')) {
    return url;
  }

  try {
    const u = new URL(url);

    if (
      u.pathname.startsWith('/secure.notion-static.com') &&
      u.hostname.endsWith('.amazonaws.com')
    ) {
      if (
        u.searchParams.has('X-Amz-Credential') &&
        u.searchParams.has('X-Amz-Signature') &&
        u.searchParams.has('X-Amz-Algorithm')
      ) {
        url = u.origin + u.pathname;
      }
    }
  } catch {}

  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`;
  }

  url = `https://www.notion.so${
    url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`
  }`;
  const notionImageUrlV2 = new URL(url);
  let table = block.parent_table === 'space' ? 'block' : block.parent_table;
  if (table === 'collection' || table === 'team') {
    table = 'block';
  }
  notionImageUrlV2.searchParams.set('table', table);
  notionImageUrlV2.searchParams.set('id', block.id);
  notionImageUrlV2.searchParams.set('cache', 'v2');

  url = notionImageUrlV2.toString();

  return url;
}
