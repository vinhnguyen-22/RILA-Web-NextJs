import { notFound } from 'next/navigation';
import { cache } from 'react';

import { CatchAllPageParams, PageProps } from '@/types/nextjs';
import { isArticle, isTwoStringArray } from '@/types/guards';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { NotionRenderer } from '@/components/common/NotionRenderer';
import { Metadata } from 'next';

export default async function ArticlePage(props: PageProps<CatchAllPageParams>) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();

  const [date, slug] = pathParams;
  const article = await getArticle(date, slug);

  return (
    <div className="mb-8">
      <NotionRenderer recordMap={article} />
    </div>
  );
}

const getArticle = cache(async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.BLOG_DB_ID, {
      and: [
        { property: 'date', date: { equals: date } },
        {
          property: 'slug',
          rich_text: { equals: slug },
        },
      ],
    });
  } catch {
    throw notFound();
  }
});

export async function generateStaticParams() {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.BLOG_DB_ID, isArticle);

  return articles.map(({ date, slug }) => ({ slug: [date, slug] }));
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.BLOG_DB_ID, isArticle);
  const article = articles.find((p) => p.date === slug[0] && p.slug === slug[1]);
  return article
    ? {
        title: article.title,
        openGraph: {
          images: [
            {
              url: article.cover,
              width: 400,
              height: 300,
            },
          ],
        },
      }
    : {};
}
