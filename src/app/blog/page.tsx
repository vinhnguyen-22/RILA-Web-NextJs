import ClientOnly from '@/components/ClientOnly/ClientOnly';
import BlogMediaCard from '@/components/blog/BlogLinkCard/BlogMediaCard';
import { BlogVerticalList } from '@/components/blog/BlogList/BlogVerticalList';
import Heros from '@/components/blog/Hero/Heros';
import { BlogHeader, BlogList } from '@/components/blog/index';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion.',
};
export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);

  return (
    <ClientOnly>
      <Heros />
      <div className="flex flex-col mx-auto container">
        <BlogList data={articles.slice(0, 3)} searchBar />
      </div>
      <section className="flex flex-col mx-auto container mt-[50px]">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-[65px]">
          <div className="md:col-span-3 bg-transparent">
            <BlogMediaCard article={articles[0]} />
          </div>
          <div className="md:col-span-2 bg-transparent">
            <BlogVerticalList data={articles.slice(0, 4)} />
          </div>
        </div>
      </section>
      <section className="flex flex-col mx-auto container mt-[50px]">
        <BlogList data={articles.slice(0, 6)} />
      </section>
    </ClientOnly>
  );
}
