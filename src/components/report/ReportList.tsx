'use client';

import { Report } from '@/types/cms';
import React, { useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import { SearchList } from '../common/SearchList';
import { SearchIcon } from '@/icons/search';
import { Chip } from '../common/Chip';
import SearchBar from '../common/SearchBar/SearchBar';
type Props = {
  data: Report[];
};

const ReportList = ({ data }: Props) => {
  const [query, setQuery] = useState('');
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
        <SearchBar className="lg:w-1/2 mx-auto" setQuery={setQuery} />
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
