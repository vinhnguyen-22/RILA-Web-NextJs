'use client';

import { SearchList } from '@/components/common/SearchList';
import { Article } from '@/types/cms';
import { FC, useEffect, useRef, useState } from 'react';
import { BlogLinkCard } from '../BlogLinkCard/BlogLinkCard';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import useArticles from '@/hooks/useActicles';
import Paginate from '@/components/common/Paginate/Paginate';

interface BlogList {
  data: Article[];
  searchBar?: boolean;
  pagination?: boolean;
}

export const BlogList: FC<BlogList> = ({ data, searchBar, pagination }) => {
  const { articles, totalPages } = useArticles(data);
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className="">
      <div className="my-[65px] max-w-[343px]">{searchBar ? <SearchBar /> : <></>}</div>
      <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
        {articles.map((element: any, i: number) => (
          <BlogLinkCard key={i} {...element} />
        ))}
      </div>

      {pagination ? <Paginate totalPages={totalPages} elementToScroll={rootRef.current} /> : <></>}
    </div>
  );
};
