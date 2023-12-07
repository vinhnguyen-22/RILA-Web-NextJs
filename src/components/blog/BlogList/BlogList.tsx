'use client';

import Paginate from '@/components/common/Paginate/Paginate';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import useArticles from '@/hooks/useActicles';
import usePostStore from '@/store/postStore';
import { Article } from '@/types/cms';
import { FC, useRef } from 'react';
import { BlogLinkCard } from '../BlogLinkCard/BlogLinkCard';
import BlogMediaCard from '../BlogLinkCard/BlogMediaCard';
import { BlogVerticalList } from './BlogVerticalList';

interface BlogList {
  data: Article[];
  searchBar?: boolean;
  pagination?: boolean;
}

export const BlogList: FC<BlogList> = ({ data, searchBar, pagination }) => {
  const { articles, totalPages } = useArticles(data);
  const rootRef = useRef<HTMLDivElement>(null);
  const { query } = usePostStore((state) => state);

  return (
    <>
      {query ? (
        <></>
      ) : (
        <section className="flex flex-col mx-auto container my-[50px]">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-[65px]">
            <div className="md:col-span-3 bg-transparent">
              <BlogMediaCard article={data[0]} />
            </div>
            <div className="md:col-span-2 bg-transparent">
              <BlogVerticalList data={data.slice(1, 4)} />
            </div>
          </div>
        </section>
      )}

      <section className="flex flex-col mx-auto container">
        <div ref={rootRef} className="">
          <div className="my-[30px] max-w-[343px]">{searchBar ? <SearchBar /> : <></>}</div>

          <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
            {articles.map((element: any, i: number) => (
              <BlogLinkCard key={i} {...element} />
            ))}
          </div>

          {pagination ? (
            <Paginate totalPages={totalPages} elementToScroll={rootRef.current} />
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};
