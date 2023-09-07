'use client';
import { PATHS } from '@/app/constants';
import { Chip } from '@/components/common/Chip';
import { CalendarIcon } from '@/icons/calendar';
import { Article } from '@/types/cms';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
type Props = {
  article: Article;
};
const BlogMediaCard: FC<Props> = ({ article }) => {
  const formattedDate = article?.date.replace(new RegExp('/', 'g'), '-');
  const articleSlug = `${PATHS.BLOG}/${formattedDate}/${article.slug}`;

  const truncateText = (text: string, maxLength: number) =>
    text.length <= maxLength ? text : text.slice(0, maxLength - 3) + '...';
  const maxLength = 70;
  const truncatedText = truncateText(article.summary, maxLength);
  return (
    <Link key={article.slug} className="p-4" href={articleSlug}>
      <div
        className={`relative h-[392px] bg-gradient-to-r from-black via-transparent to-transparent bg-cover bg-no-repeat bg-lightgray`}
      >
        <Image
          src={article.cover}
          placeholder="blur"
          blurDataURL={article.blurUrl}
          className="absolute top-0 left-0 object-cover "
          fill
          alt={article.title}
        />

        <div className="absolute bottom-[14px] left-[11px] flex flex-col p-[15px] z-10">
          <time className="text-base text-white">
            <p>
              <CalendarIcon className="inline-block mr-4" />
              {new Date(article.date).toLocaleDateString('en-GB')}
            </p>
          </time>
          <h3 className="mt-[15px] line-clamp-2 text-xl text-white font-bold">{article.title}</h3>
          <p className="text-lg text-white">{truncatedText}</p>
        </div>

        {article?.tags?.length > 0 && (
          <div className="absolute top-[14px] left-[11px] flex flex-row gap-2 flex-wrap">
            {article.tags &&
              article?.tags?.map((tag: any) => {
                return (
                  <Chip
                    key={tag.name}
                    style={{ backgroundColor: `var(--color-chip-${tag.color})` }}
                  >
                    {tag.name}
                  </Chip>
                );
              })}
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogMediaCard;
