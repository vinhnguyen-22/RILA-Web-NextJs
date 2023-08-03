import { Article } from '@/types/cms';
import { FC } from 'react';
import { BlogLinkCard } from '../BlogLinkCard/BlogLinkCard';

interface BlogList {
  data: Article[];
}

const RelatedArticles: FC<BlogList> = ({ data }) => {
  return (
    <div className="">
      <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
        {data.map((element: any, i: number) => (
          <BlogLinkCard key={i} {...element} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
