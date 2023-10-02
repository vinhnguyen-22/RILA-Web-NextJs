import { SelectColor } from '@/services/cms/cms.types';

export type Article = {
  id: string;
  cover: string;
  slug: string;
  title: string;
  summary: string;
  tags?: Tag[];
  published: boolean;
  date: string;
  lastEditedAt: string;
  blurUrl?: string;
  lang?: string;
};

export type Tag = {
  id: string;
  color: SelectColor;
  name: string;
};

export type Report = {
  id: string;
  cover: string;
  slug: string;
  title: string;
  summary: string;
  tags?: Tag[];
  published: boolean;
  date: string;
  lastEditedAt: string;
  blurUrl?: string;
  PDF?: string;
};

export type CaseStudy = {
  id: string;
  cover: string;
  slug: string;
  title: string;
  summary: string;
  published: boolean;
  date: string;
  lastEditedAt: string;
  blurUrl?: string;
};
