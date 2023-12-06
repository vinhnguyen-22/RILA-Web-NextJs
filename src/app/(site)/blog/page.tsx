import ClientOnly from '@/components/ClientOnly/ClientOnly';
import Heros from '@/components/blog/Hero/Heros';
import { BlogList } from '@/components/blog/index';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog',
  description: 'All posts are created by notion.',
};

export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_BLOG_DB_ID,
    isArticle,
  );
  return (
    <ClientOnly>
      <Heros />
      <section className="flex flex-col mx-auto container mt-[50px]">
        <div className=" max-w-[343px]">
          <SearchBar />
        </div>
      </section>

      <BlogList data={articles} pagination={true} />
    </ClientOnly>
  );
}
