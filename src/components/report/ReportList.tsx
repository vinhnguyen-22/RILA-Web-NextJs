'use client';

import useReports from '@/hooks/useReports';
import { Report } from '@/types/cms';
import { useRef, useState } from 'react';
import { Chip } from '../common/Chip';
import Paginate from '../common/Paginate/Paginate';
import SearchBar from '../common/SearchBar/SearchBar';
import ReportCard from './ReportCard';
import usePostStore from '@/store/postStore';
type Props = {
  data: Report[];
};

const ReportList = ({ data }: Props) => {
  const { reports, totalPages } = useReports(data);
  const [filteredReport, setFilteredReport] = useState(reports);
  const rootRef = useRef<HTMLDivElement>(null);
  const tags = [...new Set(data.map((item) => item.tags && item.tags[0].name))];
  const { query } = usePostStore((state) => state);

  const filterTag = (tag: string) => {
    if (tag == 'All') {
      setFilteredReport(reports);
    } else {
      setFilteredReport(reports.filter((r) => r.tags[0].name == tag));
    }
  };

  return (
    <div ref={rootRef} className="">
      <div className="grid grid-cols-1">
        <div className="flex flex-row flex-wrap justify-center items-center text-gray-800 gap-[15px] my-[50px]">
          <div onClick={() => filterTag('All')}>
            <Chip className="cursor-pointer px-[15px] py-[4px] text-md font-semibold hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
              All
            </Chip>
          </div>
          {tags.map((t, index) => (
            <div key={index} onClick={() => filterTag(t || '')}>
              <Chip
                key={index}
                className="cursor-pointer px-[15px] py-[4px] text-md font-semibold hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 "
              >
                {t}
              </Chip>
            </div>
          ))}
        </div>
        <SearchBar className="lg:w-1/2 mx-auto" />
      </div>

      <div className="mx-1 my-5 grid grid-cols-1 md:grid-cols-3 max-sm:gap-[8px] gap-[58px] ">
        {query
          ? filteredReport
              .filter((r) => r.title.toLowerCase().startsWith(query.toLowerCase()))
              .map((element, i) => <ReportCard key={i} {...element} />)
          : filteredReport.map((element, i) => <ReportCard key={i} {...element} />)}
      </div>

      <Paginate totalPages={totalPages} elementToScroll={null} />
    </div>
  );
};

export default ReportList;
