import { getBlurImage } from '@/utils/getBlurImg';
import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import { NotionDatabaseProperty } from './cms.types';
import { formatNotionPageAttributes, isNonEmptyNonPartialNotionResponse } from './cms.utils';

class ServerSideCmsClient {
  private notionContentClient: NotionAPI;
  private notionApiClient: Client;

  constructor() {
    this.notionContentClient = new NotionAPI({
      activeUser: process.env.NOTION_ACTIVE_USER,
      authToken: process.env.NOTION_TOKEN_V2,
    });

    this.notionApiClient = new Client({
      auth: process.env.NOTION_API_INTEGRATION_SECRET,
    });
  }

  async getDatabaseEntries<T extends Record<string, NotionDatabaseProperty>>(
    databaseId: string | undefined,
    typeGuard: (value: Record<string, NotionDatabaseProperty>) => value is T,
  ): Promise<T[]> {
    if (databaseId === undefined) throw new Error('No database id provided');

    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId,
      filter: {
        property: 'published',
        checkbox: { equals: true },
      },
      page_size: 50,
    });

    if (results.length === 0) return [];

    if (isNonEmptyNonPartialNotionResponse(results)) {
      const entries: Record<string, NotionDatabaseProperty>[] = await Promise.all(
        results.map(async ({ id, cover, properties }) => {
          let img = '';
          if (cover) {
            img = cover.type === 'external' ? cover.external.url : cover.file.url;
          }
          const format = await formatNotionPageAttributes(properties, img, id);

          return {
            ...format,
            id,
            blurUrl: img != '' ? (await getBlurImage(img)).base64 : '',
          };
        }),
      );

      return entries.filter(typeGuard);
    }

    throw new Error('Partial response returned by Notion API');
  }

  async getPageContent(
    databaseId: string | undefined,
    filter: QueryDatabaseParameters['filter'],
  ): Promise<ExtendedRecordMap> {
    if (databaseId === undefined) throw new Error('No database id provided');

    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId,
      filter,
    });
    const id = results[0]?.id;

    if (id === undefined) throw new Error('No Page Found');

    return await this.notionContentClient.getPage(id);
  }
}

export const serverSideCmsClient = new ServerSideCmsClient();
