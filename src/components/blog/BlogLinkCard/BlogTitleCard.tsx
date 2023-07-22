import { CalendarIcon } from '@/icons/calendar';
import { Article } from '@/types/cms';
import Image from 'next/image';
import React from 'react';

type Props = {
  article: Article;
};

const BlogTitleCard = ({ article }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-[20px] h-[104px]">
      <div className="col-span-1 relative overflow-hidden">
        <Image className="object-cover absolute" fill src={article.cover} alt="" />
      </div>
      <div className="col-span-2">
        <div className="flex flex-col">
          <h3 className="line-clamp-2 text-xl font-semibold">{article.title}</h3>
          <time className="mt-[15px] text-base text-black">
            <p>
              <CalendarIcon className="inline-block mr-4" />
              {new Date(article.date).toLocaleDateString('en-GB')}
            </p>
          </time>
        </div>
      </div>
    </div>
  );
};

export default BlogTitleCard;
