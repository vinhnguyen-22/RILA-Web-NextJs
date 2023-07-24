'use client';

import { Report } from '@/types/cms';
import React, { useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import { SearchList } from '../common/SearchList';
import { SearchIcon } from '@/icons/search';
import { Chip } from '../common/Chip';
type Props = {
  data: Report[];
};

const ReportList = ({ data }: Props) => {
  const [query, setQuerySetState] = useState('');
  const [search, setSearch] = useState(data);

  useEffect(() => {
    const fetchData = (query: string) =>
      data
        .filter(
          ({ title, summary, tags, date }) =>
            new Date(date) < new Date() &&
            (title.toLowerCase().includes(query) ||
              summary.toLowerCase().includes(query) ||
              summary.toLowerCase().includes(query) ||
              tags.some(({ name }) => name.toLowerCase().includes(query)))
        )
        .sort((a, b) => (a.date > b.date ? -1 : 1));
    setSearch(fetchData(query.toLowerCase().trim()));
  }, [data, query]);

  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="col-span-2 flex md:flex-row flex-col text-gray-800 gap-[15px] my-[50px]">
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

        <div className="col-span-1 flex flex-col justify-center items-center w-full">
          <div className="w-full">
            <div className={'relative w-full'}>
              <SearchIcon className="absolute w-5 h-5 text-gray-800 left-3 top-3 dark:text-gray-300" />

              <input
                aria-label={'Search'}
                type="text"
                onChange={(e) => setQuerySetState(e.target.value)}
                placeholder={'Search'}
                className="block w-full px-10 py-2 text-gray-900 placeholder:text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
        {search.map((element, i) => (
          <ReportCard key={i} {...element} />
        ))}
      </div>
    </div>
  );
};

export default ReportList;
