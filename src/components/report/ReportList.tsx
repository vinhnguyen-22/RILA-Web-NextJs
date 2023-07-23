import { Report } from '@/types/cms';
import React from 'react';
import ReportCard from './ReportCard';
type Props = {
  data: Report[];
};

const ReportList = ({ data }: Props) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-[60px]">
      {data.map((element, i) => (
        <ReportCard key={i} report={element} />
      ))}
    </div>
  );
};

export default ReportList;
