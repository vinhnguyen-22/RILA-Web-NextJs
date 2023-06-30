import { NotionDatabaseProperty } from '@/services/cms/cms.types';
import { Article } from './cms';

export const isTwoStringArray = (value: string[] | undefined): value is [string, string] => {
  return Array.isArray(value) && value.length === 2 && value.every((item) => typeof item === 'string');
};

export const isArticle = (obj: { [key: string]: NotionDatabaseProperty }): obj is Article => {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.slug === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.summary === 'string' &&
    Array.isArray(obj.tags) &&
    typeof obj.published === 'boolean' &&
    typeof obj.date === 'string' &&
    typeof obj.lastEditedAt === 'string'
  );
};
