import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle, isCaseStudy, isReport } from '@/types/guards';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_BLOG_DB_ID,
    isArticle,
  );
  const caseStudies = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_CASESTUDY_DB_ID,
    isCaseStudy,
  );
  const reports = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_REPORT_DB_ID,
    isReport,
  );

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${process.env.SITE_URL}`,
      lastModified: new Date(),
    },
  ];

  for (const article of articles) {
    sitemap.push({
      url: `${process.env.SITE_URL}/blog/${article?.date.replace(new RegExp('/', 'g'), '-')}/${
        article.slug
      }`,
      lastModified: article.lastEditedAt.replace(new RegExp('/', 'g'), '-'),
    });
  }

  for (const caseStudy of caseStudies) {
    sitemap.push({
      url: `${process.env.SITE_URL}/case-studies/${caseStudy.date.replace(
        new RegExp('/', 'g'),
        '-',
      )}/${caseStudy.slug}`,
      lastModified: caseStudy.lastEditedAt.replace(new RegExp('/', 'g'), '-'),
    });
  }

  for (const report of reports) {
    sitemap.push({
      url: `${process.env.SITE_URL}/report/${report.date.replace(new RegExp('/', 'g'), '-')}/${
        report.slug
      }`,
      lastModified: report.lastEditedAt.replace(new RegExp('/', 'g'), '-'),
    });
  }

  return sitemap;
}
