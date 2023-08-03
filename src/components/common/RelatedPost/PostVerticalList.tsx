'use client';

import { Article } from '@/types/cms';
import { FC, PropsWithChildren } from 'react';
import BlogTitleCard from '../../blog/BlogLinkCard/BlogTitleCard';

interface PostVerticalListProps<T> {
  data: T[];
}

export const PostVerticalList = <T,>({ data }: PropsWithChildren<PostVerticalListProps<T>>) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {data.map((element, i) => (
        <BlogTitleCard key={i} article={element} />
      ))}
    </div>
  );
};
