import CaseStudyCard from '@/components/case-studies/LinkCard/CaseStudyCard';
import { PostVerticalList } from '@/components/case-studies/List/VerticalList';
import { NotionRenderer } from '@/components/common/NotionRenderer';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isCaseStudy, isTwoStringArray } from '@/types/guards';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const dynamic = "force-dynamic";

export default async function CaseStudyPage(props: any) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();
  const posts = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_CASESTUDY_DB_ID,
    isCaseStudy,
  );

  const [date, slug] = pathParams;
  const recordMap = await getCaseStudy(date, slug);
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  if (!post.published) {
    return (
      <article data-revalidated-at={new Date().getTime()} className="mx-auto mt-40 text-center">
        <h2 className="mb-4 text-3xl font-bold">CaseStudy Not Found</h2>
        <Link href="/case-studies">
          <span className="mr-2">&larr;</span>
          <span>Go to list page</span>
        </Link>
      </article>
    );
  }

  return (
    <>
      <article className="mt-4 flex flex-col items-center ">
        <NotionRenderer
          recordMap={recordMap}
          related={<PostVerticalList data={posts.slice(0, 4)} />}
        />

        <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
          {posts.slice(0, 3).map((element: any, i: number) => (
            <CaseStudyCard key={i} {...element} />
          ))}
        </div>
      </article>
    </>
  );
}

const getCaseStudy = cache(async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.NOTION_CASESTUDY_DB_ID, {
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
  const posts = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_CASESTUDY_DB_ID,
    isCaseStudy,
  );

  return posts.map(({ date, slug }) => ({ slug: [date, slug] }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const posts = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_CASESTUDY_DB_ID,
    isCaseStudy,
  );
  const post = posts.find((p) => p.date === slug[0] && p.slug === slug[1]);
  return post
    ? {
        title: post.title,
        description: post.summary,
        openGraph: {
          images: [
            {
              url: post.cover,
              width: 400,
              height: 300,
            },
          ],
        },
      }
    : {};
}
