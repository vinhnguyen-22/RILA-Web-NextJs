'use client';

import { CaseStudy } from '@/types/cms';
import { FC } from 'react';
import TitleCard from '../LinkCard/TitleCard';

interface PostList {
  data: CaseStudy[];
}

export const PostVerticalList: FC<PostList> = ({ data }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {data.map((element, i) => (
        <TitleCard key={i} post={element} />
      ))}
    </div>
  );
};
