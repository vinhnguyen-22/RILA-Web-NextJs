import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';

export default async function CachePage() {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);
  return <div id="posts" data-posts={JSON.stringify(articles)} />;
}
