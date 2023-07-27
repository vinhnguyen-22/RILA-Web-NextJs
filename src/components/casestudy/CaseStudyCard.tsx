import { DownLoadIcon } from '@/icons/download';
import { CaseStudy } from '@/types/cms';
import Image from 'next/image';
import React, { FC } from 'react';
import { Chip } from '../common/Chip';
import Link from 'next/link';
import { PATHS } from '@/app/constants';

type CaseStudyCardProps = CaseStudy;

const CaseStudyCard: FC<CaseStudyCardProps> = ({ cover, id, published, summary, date, slug, title }) => {
  const CaseStudySlug = `${PATHS.CASESTUDY}/${slug}`;

  const formattedDate = date.replace(new RegExp('/', 'g'), '-');
  const articleSlug = `${PATHS.BLOG}/${formattedDate}/${slug}`;

  const truncateText = (text: string, maxLength: number) =>
    text.length <= maxLength ? text : text.slice(0, maxLength - 3) + '...';
  const maxLength = 45;
  const truncatedText = truncateText(summary, maxLength);

  return (
    <Link key={slug} className="p-4" href={CaseStudySlug}>
      <article className="relative min-h-[390px] mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-xl shadow-gray transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl">
        <div className="relative h-[212px]">
          <Image src={cover} alt="cover image" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col p-[15px]">
          <h3 className="line-clamp-2 text-xl font-bold">{title}</h3>
          <p className="text-lg text-gray-800">{truncatedText}</p>
          <time className="absolute bottom-[15px] left-[15px] mt-[15px] text-base text-black">
            <p>{new Date(date).toLocaleDateString('en-GB')}</p>
          </time>
        </div>
      </article>
    </Link>
  );
};

export default CaseStudyCard;
