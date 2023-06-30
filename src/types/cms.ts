import { SelectColor } from '@/services/cms/cms.types';

export type Article = {
  id: string;
  cover: string;
  slug: string;
  title: string;
  summary: string;
  tags: Tag[];
  published: boolean;
  date: string;
  lastEditedAt: string;
};

type Tag = {
  id: string;
  color: SelectColor;
  name: string;
};
