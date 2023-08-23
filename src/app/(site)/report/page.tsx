import { Chip } from '@/components/common/Chip';
import Heading from '@/components/common/Heading/Heading';
import ReportList from '@/components/report/ReportList';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isReport } from '@/types/guards';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Report',
  description: 'Report',
};

const ReportPage = async () => {
  const reports = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_REPORT_DB_ID, isReport);

  return (
    <div className="flex flex-col mx-auto container mt-[50px]">
      <Heading title="Reports & Analysis" />
      <ReportList data={reports} />
    </div>
  );
};

export default ReportPage;
