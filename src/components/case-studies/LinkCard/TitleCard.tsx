import { PATHS } from '@/app/constants';
import { CalendarIcon } from '@/icons/calendar';
import { CaseStudy } from '@/types/cms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: CaseStudy;
};

const BlogTitleCard = ({ post }: Props) => {
  const formattedDate = post.date.replace(new RegExp('/', 'g'), '-');
  const postSlug = `${PATHS.CASESTUDY}/${formattedDate}/${post.slug}`;
  return (
    <Link key={post.slug} className="p-4" href={postSlug}>
      <div className="grid grid-cols-3 gap-[20px] h-[104px]">
        <div className="col-span-1 relative overflow-hidden">
          <Image className="object-cover absolute" fill src={post.cover} alt="" />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col">
            <h3 className="line-clamp-2 text-xl font-semibold">{post.title}</h3>
            <time className="mt-[15px] text-base text-black">
              <p>
                <CalendarIcon className="inline-block mr-4" />
                {new Date(post.date).toLocaleDateString('en-GB')}
              </p>
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogTitleCard;
