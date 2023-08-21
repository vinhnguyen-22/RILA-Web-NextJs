import { PATHS } from '@/app/constants';
import { CalendarIcon } from '@/icons/calendar';
import { Article } from '@/types/cms';
import Image from "next/image";
import Link from 'next/link';

type Props = {
  article: Article;
};

const BlogTitleCard = ({ article }: Props) => {
  const formattedDate = article.date.replace(new RegExp('/', 'g'), '-');
  const articleSlug = `${PATHS.BLOG}/${formattedDate}/${article.slug}`;

  return (
    <Link key={article.slug} className="p-4" href={articleSlug}>
      <div className="grid grid-cols-3 gap-[20px] h-[104px]">
        <div className="col-span-1 relative overflow-hidden">
          <Image
            className="object-cover absolute"
            fill
            src={article.cover}
            alt=""
            placeholder="blur"
            blurDataURL={article.cover}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
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
    </Link>
  );
};

export default BlogTitleCard;
