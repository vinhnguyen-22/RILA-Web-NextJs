'use client';

import { CaseStudy } from '@/types/cms';
import React, { useEffect, useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { SearchList } from '../common/SearchList';
import { SearchIcon } from '@/icons/search';
import { Chip } from '../common/Chip';
import SearchBar from '../common/SearchBar/SearchBar';
type Props = {
  data: CaseStudy[];
};

const CaseStudyList = ({ data }: Props) => {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(data);

  useEffect(() => {
    const fetchData = (query: string) =>
      data
        .filter(
          ({ title, summary, date }) =>
            new Date(date) < new Date() &&
            (title.toLowerCase().includes(query) ||
              summary.toLowerCase().includes(query) ||
              summary.toLowerCase().includes(query))
        )
        .sort((a, b) => (a.date > b.date ? -1 : 1));
    setSearch(fetchData(query.toLowerCase().trim()));
  }, [data, query]);

  return (
    <div className="">
      <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
        {search.map((element, i) => (
          <CaseStudyCard key={i} {...element} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyList;
