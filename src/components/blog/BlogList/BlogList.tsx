'use client';

import { SearchList } from '@/components/common/SearchList';
import { Article } from '@/types/cms';
import { FC, useEffect, useState } from 'react';
import { BlogLinkCard } from '../BlogLinkCard/BlogLinkCard';
import SearchBar from '@/components/common/SearchBar/SearchBar';

interface BlogList {
  data: Article[];
  searchBar?: boolean;
}

export const BlogList: FC<BlogList> = ({ data, searchBar }) => {
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
      <div className="my-[65px] max-w-[343px]">{searchBar ? <SearchBar setQuery={setQuery} /> : <></>}</div>
      <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
        {search.map((element: any, i: number) => (
          <BlogLinkCard key={i} {...element} />
        ))}
      </div>
    </div>
  );
};
