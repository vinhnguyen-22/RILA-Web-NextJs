'use client';

import { FC } from 'react';
import { SearchList } from '@/components/common/SearchList';
import { BlogLinkCard } from '@/components/blog/BlogLinkCard';
import { Article } from '@/types/cms';

interface BlogList {
  data: Article[];
}

export const BlogList: FC<BlogList> = ({ data }) => {
  const fetchData = (query: string) =>
    data
      .filter(
        ({ title, summary, tags, date }) =>
          new Date(date) < new Date() &&
          (title.toLowerCase().includes(query) ||
            summary.toLowerCase().includes(query) ||
            summary.toLowerCase().includes(query) ||
            tags.some(({ name }) => name.toLowerCase().includes(query)))
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <SearchList<Article>
      ListItem={BlogLinkCard}
      fetchData={fetchData}
      keyExtractor={({ id }) => id}
      placeholder="Search Articles"
    />
  );
};
