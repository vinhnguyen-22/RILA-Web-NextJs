'use client';

import { SearchIcon } from '@/icons/search';
import { Article } from '@/types/cms';
import { FC } from 'react';
import BlogTitleCard from '../BlogLinkCard/BlogTitleCard';

interface BlogList {
  data: Article[];
}

export const BlogVerticalList: FC<BlogList> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {data.map((element, i) => (
        <BlogTitleCard key={i} article={element} />
      ))}
    </div>
  );
};
