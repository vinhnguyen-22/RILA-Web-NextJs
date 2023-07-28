import { notFound } from 'next/navigation';
import { cache } from 'react';
import { NotionRenderer } from '@/components/common/NotionRenderer';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle, isTwoStringArray } from '@/types/guards';
import { CatchAllPageParams, PageProps } from '@/types/nextjs';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types/cms';
import RelatedActicles from '@/components/blog/RelatedBlog/RelatedBlog';

export default async function ArticlePage(props: any) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);

  const [date, slug] = pathParams;
  const recordMap = await getArticle(date, slug);
  const article = articles.find((p) => p.slug === slug);
  if (!article) {
    return notFound();
  }

  if (!article.published) {
    return (
      <article data-revalidated-at={new Date().getTime()} className="mx-auto mt-40 text-center">
        <h2 className="mb-4 text-3xl font-bold">Article Not Found</h2>
        <Link href="/blog">
          <span className="mr-2">&larr;</span>
          <span>Go to list page</span>
        </Link>
      </article>
    );
  }
  const relatedArticles: Article[] = articles.filter(
    (p) =>
      p.slug !== slug &&
      article.tags.some((v) => {
        return p.tags.includes(v);
      })
  );
  return (
    <>
      <article className="mt-4 flex flex-col items-center md:mt-20">
        <NotionRenderer recordMap={recordMap} />
        <RelatedActicles data={relatedArticles} />
      </article>
    </>
  );
}

const getArticle = cache(async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.NOTION_BLOG_DB_ID, {
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
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);

  return articles.map(({ date, slug }) => ({ slug: [date, slug] }));
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);
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
