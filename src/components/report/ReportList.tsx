'use client';

import { Report } from '@/types/cms';
import { useEffect, useRef, useState } from 'react';
import { Chip } from '../common/Chip';
import SearchBar from '../common/SearchBar/SearchBar';
import ReportCard from './ReportCard';
import useReports from '@/hooks/useReports';
import Paginate from '../common/Paginate/Paginate';
type Props = {
  data: Report[];
};

const ReportList = ({ data }: Props) => {
  const { reports, totalPages } = useReports(data);
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className="">
      <div className="grid grid-cols-1">
        <div className="flex flex-row flex-wrap justify-center items-center text-gray-800 gap-[15px] my-[50px]">
          <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
            all
          </Chip>
          <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
            Industry
          </Chip>
          <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
            Brand
          </Chip>
          <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
            Influencer
          </Chip>
          <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
            Market Research
          </Chip>
        </div>
        <SearchBar className="lg:w-1/2 mx-auto" />
      </div>

      <div className="mx-1 my-5 grid grid-cols-1 md:grid-cols-3 max-sm:gap-[8px] gap-[58px] ">
        {reports.map((element, i) => (
          <ReportCard key={i} {...element} />
        ))}
      </div>

      <Paginate totalPages={totalPages} elementToScroll={null} />
    </div>
  );
};

export default ReportList;
