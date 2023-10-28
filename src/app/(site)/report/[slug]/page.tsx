import ReportDetail from '@/components/report/ReportDetail';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isReport } from '@/types/guards';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function ReportPage(props: any) {
  const slug = props?.params?.slug;
  const reports = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_REPORT_DB_ID,
    isReport,
  );
  const report = reports.find((p) => p.slug === slug);
  if (!report) {
    return notFound();
  }

  // const relatedReports: Report[] = reports.filter(
  //   (p) => p.slug !== slug && p.tags.some((v) => report.tags.includes(v))
  // );
  return <ReportDetail report={report ? report : null} />;
}

export async function generateStaticParams() {
  const reports = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_REPORT_DB_ID,
    isReport,
  );

  return reports.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const reports = await serverSideCmsClient.getDatabaseEntries(
    process.env.NOTION_REPORT_DB_ID,
    isReport,
  );
  const report = reports.find((p) => p.slug === slug);
  return report
    ? {
        title: report.title,
        description: report.summary,
        openGraph: {
          images: [
            {
              url: report.cover,
              width: 400,
              height: 300,
            },
          ],
        },
      }
    : {};
}
