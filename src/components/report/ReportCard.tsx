import { DownLoadIcon } from '@/icons/download';
import { Report } from '@/types/cms';
import Image from 'next/image';
import React from 'react';
import { Chip } from '../common/Chip';
type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {
  return (
    <div
      className="relative text-white p-[20px] h-[200px] rounded-lg bg-gradient-to-r from-black via-black to-transparent border-black bg-center bg-cover "
      style={{ backgroundImage: `url('${report.cover}')` }}
    >
      <div className="absolute right-[22px] bottom-[22px]">
        <DownLoadIcon />
      </div>

      <b className=" w-full text-9xl tracking-[0.03em] flex items-center ">{report.title}</b>
      <div className=" w-full text-xl tracking-[0.03em] flex items-center">Brand Report</div>
      <div className=" h-[30.77%] w-[28.14%]">
        {report.tags.length > 0 && (
          <div className="flex flex-row gap-2 flex-wrap">
            {report.tags &&
              report.tags.map((tag) => {
                return (
                  <Chip key={tag.name} style={{ backgroundColor: `var(--color-chip-${tag.color})` }}>
                    {tag.name}
                  </Chip>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
