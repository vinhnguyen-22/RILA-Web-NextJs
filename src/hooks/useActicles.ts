import { useEffect, useMemo, useState } from 'react';

import { Article } from '@/types/cms';
import usePostStore from '@/store/postStore';

export default function useArticles(allArticles: Article[], totalElement: number = 9) {
  const { page, query, selected, setActive } = usePostStore((state) => state);
  const allArticlesFiltered = useMemo(
    () =>
      allArticles
        .filter((post) => {
          if (!post.published) {
            return false;
          }

          if (query) {
            const search =
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.summary.toLowerCase().includes(query.toLowerCase()) ||
              post.summary.toLowerCase().includes(query.toLowerCase()) ||
              post.tags.some(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
            console.log(search);
            return search;
          }

          if (selected.length) {
            const isTagsMatch = selected.every((tag) => post.tags.includes(tag));
            if (!isTagsMatch) {
              return false;
            }
          }

          return true;
        })
        .sort((a, b) => (a.date > b.date ? -1 : 1)),
    [allArticles, selected, query]
  );
  //   useEffect(() => {
  //     const fetchData = (query: string) =>
  //       allArticles
  //         .filter(
  //           ({ title, summary, tags, date }) =>
  //             new Date(date) < new Date() &&
  //             (title.toLowerCase().includes(query) ||
  //               summary.toLowerCase().includes(query) ||
  //               summary.toLowerCase().includes(query) ||
  //               tags.some(({ name }) => name.toLowerCase().includes(query)))
  //         )
  //         .sort((a, b) => (a.date > b.date ? -1 : 1));
  //   }, [allArticles, query]);

  allArticlesFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  const totalPages = Math.ceil(allArticlesFiltered.length / totalElement);
  const offset = (page ? +page - 1 : 0) * totalElement;
  const postsForCurrentPage = allArticlesFiltered.slice(offset, offset + totalElement);
  useEffect(() => {
    setActive([...new Set(allArticlesFiltered.map((post) => post.tags).flat())]);
  }, [allArticlesFiltered, setActive]);
  return {
    articles: postsForCurrentPage,
    totalPages,
  };
}
