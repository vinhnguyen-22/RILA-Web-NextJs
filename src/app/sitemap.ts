import { serverSideCmsClient } from '@/services/cms/cms.client';
import { MetadataRoute } from 'next';
import { PATHS } from './constants';
import { isArticle } from '@/types/guards';

export default async function sitemap() {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.BLOG_DB_ID, isArticle);

  const sitemap: MetadataRoute.Sitemap = [];

  for (const article of articles) {
    sitemap.push({
      url: `${process.env.SITE_URL}/blog/${article.published.replace(new RegExp('/', 'g'), '-')}/${article.slug}`,
    });
  }

  return sitemap;
}
