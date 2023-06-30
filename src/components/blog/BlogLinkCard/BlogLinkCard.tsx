import Link from 'next/link';
import { FC } from 'react';
import { Chip } from '@/components/common/Chip';
import { Article } from '@/types/cms';
import { CalendarIcon } from '@/icons/calendar';
import { PATHS } from '@/app/constants';

type BlogLinkCardProps = Article;

export const BlogLinkCard: FC<BlogLinkCardProps> = ({ slug, tags, title, published, summary }) => {
  const formattedDate = published.replace(new RegExp('/', 'g'), '-');
  const articleSlug = `${PATHS.BLOG}/${formattedDate}/${slug}`;

  return (
    <Link key={slug} className="p-4" href={articleSlug}>
      <article className="mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-xl shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl">
        <div className="relative h-60">
          {/* <Image src={cover} alt="cover image" fill style={{ objectFit: 'cover' }} /> */}
        </div>
        <div className="flex h-48 flex-col p-4">
          <h3 className="line-clamp-2 h-16 text-2xl font-bold">{title}</h3>
          <time className="mb-4 mt-2 pl-2 text-sm text-black">
            <p>
              <CalendarIcon className="inline-block mr-4" />
              {new Date(published).toLocaleDateString('en-GB')}
            </p>
          </time>
          {tags.length > 0 && (
            <div className="flex flex-row gap-2 flex-wrap">
              {tags &&
                tags.map((tag) => (
                  <Chip key={tag.name} className={`bg-` + tag.color}>
                    {tag.name}
                  </Chip>
                ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};
