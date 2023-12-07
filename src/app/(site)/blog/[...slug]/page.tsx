import { BlogVerticalList } from '@/components/blog/BlogList/BlogVerticalList';
import RelatedArticles from '@/components/blog/RelatedBlog/RelatedBlog';
import { NotionRenderer } from '@/components/common/NotionRenderer';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { Article } from '@/types/cms';
import { isArticle, isTwoStringArray } from '@/types/guards';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const dynamic = "force-dynamic";

export default async function ArticlePage(props: any) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_BLOG_DB_ID,
    isArticle,
  );

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

  function getObjectsWithSameTag(targetObject: any, articles: Article[]) {
    const targetTag = targetObject.tags[0]; // Assuming each object has only one tag
    const objectsWithSameTag = articles.filter((article) => {
      return (
        targetObject.id != article.id &&
        article.published &&
        article?.tags?.some((tag) => tag.id === targetTag.id)
      );
    });
    return targetTag ? objectsWithSameTag : [];
  }

  const relatedArticles: Article[] = getObjectsWithSameTag(article, articles);

  return (
    <>
      <article
        data-revalidated-at={new Date().getTime()}
        className=" flex flex-col items-center max-sm:mt-20"
        style={{ direction: article.lang == 'fa' ? 'rtl' : 'ltr' }}
      >
        <div className="relative ">
          <Image src={article.cover} alt="cover" fill style={{ objectFit: 'contain' }} />
        </div>

        <NotionRenderer
          recordMap={recordMap}
          related={<BlogVerticalList data={relatedArticles} />}
        />
        <RelatedArticles data={relatedArticles} />
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
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_BLOG_DB_ID,
    isArticle,
  );

  return articles.map(({ date, slug }) => ({ slug: [date, slug] }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_BLOG_DB_ID,
    isArticle,
  );
  const article = articles.find((p) => p.date === slug[0] && p.slug === slug[1]);
  return article
    ? {
        title: article.title,
        description: article.summary,
        openGraph: {
          images: [
            {
              url: article.cover,
              width: 400,
              height: 300,
            },
          ],
        },
        keywords: article?.tags?.map((tag) => tag.name),
      }
    : {};
}
