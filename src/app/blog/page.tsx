import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogList } from '@/components/blog/BlogList';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion.',
};
export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);
  console.log(articles);
  return (
    <div className="flex flex-col mx-auto container">
      <BlogHeader />
      <BlogList data={articles} />
    </div>
  );
}
