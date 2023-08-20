import { PATHS } from '@/app/constants';
import { Chip } from '@/components/common/Chip';
import { CalendarIcon } from '@/icons/calendar';
import { Article } from '@/types/cms';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type BlogLinkCardProps = Article;

export const BlogLinkCard: FC<BlogLinkCardProps> = ({
  slug,
  tags,
  title,
  date,
  published,
  cover,
  summary,
  blurUrl,
}) => {
  const formattedDate = date.replace(new RegExp('/', 'g'), '-');
  const articleSlug = `${PATHS.BLOG}/${formattedDate}/${slug}`;

  const truncateText = (text: string, maxLength: number) =>
    text.length <= maxLength ? text : text.slice(0, maxLength - 3) + '...';
  const maxLength = 45;
  const truncatedText = truncateText(summary, maxLength);

  return (
    <Link key={slug} className="p-4" href={articleSlug}>
      <article className="relative min-h-[390px] mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-xl shadow-gray transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl">
        <div className="relative h-[212px]">
          <Image
            src={cover}
            alt="cover image"
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL={blurUrl}
          />
        </div>
        <div className="flex flex-col p-[15px]">
          <h3 className="line-clamp-2 text-xl font-bold">{title}</h3>
          <p className="text-lg text-gray-800">{truncatedText}</p>
          <time className="absolute bottom-[15px] left-[15px] mt-[15px] text-base text-black">
            <p>
              <CalendarIcon className="inline-block mr-4" />
              {new Date(date).toLocaleDateString('en-GB')}
            </p>
          </time>
          {tags.length > 0 && (
            <div className="absolute top-[14px] left-[11px] flex flex-row gap-2 flex-wrap">
              {tags &&
                tags.slice(0, 3).map((tag) => {
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
      </article>
    </Link>
  );
};
