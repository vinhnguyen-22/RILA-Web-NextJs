import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { NotionDatabaseProperty } from './cms.types';
import {
  formatNotionPageAttributes,
  isNonEmptyNonPartialNotionResponse,
  mapImageUrl,
} from './cms.utils';

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
    });

    if (results.length === 0) return [];

    if (isNonEmptyNonPartialNotionResponse(results)) {
      const entries: Record<string, NotionDatabaseProperty>[] = await Promise.all(
        results.map(async ({ id, cover, properties }) => {
          let img = '';
          if (cover) {
            img = cover.type === 'external' ? cover.external.url : cover.file.url;
          }
          const format = formatNotionPageAttributes(properties);
          const api = new NotionAPI();
          const { block } = await api.getPage(id);
          img = mapImageUrl(img, block[id].value) || '';

          return {
            ...format,
            id,
            blurUrl:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AOPIx7ujo3FST6eTlsGwtOTOzuXN0ObP0uDKzeHIyACUiJBJT2DEvcppcYUzOEzWwMLjyMfhxMXfx8fhycgAHx0lFiA0qpqse2VsEhkpfm9158zJ1bm72r2+2Lu6ABkcJFVCR3pkd19TWDY5QzExO9zKxejZ1OnV0urX1QAwNUcxKzOAcIcmKDQVGSJMTlr77un/+/P/9/D/+fAAFBgjEhUeRz9RDxAWAQMSREJM9+Xc9ebc/O7k+ejfABkZIzYrIkE1LDsyKQoLFlNMUvng1O/XzOPNvtfCriEocd2YPdRbAAAAAElFTkSuQmCC',
            cover: img,
            tags: format.tags
              ? [{ id: '<AKV', name: 'social listening', color: 'green' }]
              : format.tags,
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
