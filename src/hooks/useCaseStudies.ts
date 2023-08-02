import { useEffect, useMemo, useState } from 'react';

import { CaseStudy } from '@/types/cms';
import usePostStore from '@/store/postStore';

const TOTAL_ELEMENT = 9;

export default function useCaseStudies(allCaseStudies: CaseStudy[]) {
  const { page, query } = usePostStore((state) => state);
  const allCaseStudiesFiltered = useMemo(
    () =>
      allCaseStudies
        .filter((post) => {
          if (!post.published) {
            return false;
          }

          if (query) {
            const search =
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.summary.toLowerCase().includes(query.toLowerCase()) ||
              post.summary.toLowerCase().includes(query.toLowerCase());
            return search;
          }

          return true;
        })
        .sort((a, b) => (a.date > b.date ? -1 : 1)),
    [allCaseStudies, query]
  );
  //   useEffect(() => {
  //     const fetchData = (query: string) =>
  //       allCaseStudies
  //         .filter(
  //           ({ title, summary, tags, date }) =>
  //             new Date(date) < new Date() &&
  //             (title.toLowerCase().includes(query) ||
  //               summary.toLowerCase().includes(query) ||
  //               summary.toLowerCase().includes(query) ||
  //               tags.some(({ name }) => name.toLowerCase().includes(query)))
  //         )
  //         .sort((a, b) => (a.date > b.date ? -1 : 1));
  //   }, [allCaseStudies, query]);

  allCaseStudiesFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  const totalPages = Math.ceil(allCaseStudiesFiltered.length / TOTAL_ELEMENT);
  const offset = (page ? +page - 1 : 0) * TOTAL_ELEMENT;
  const postsForCurrentPage = allCaseStudiesFiltered.slice(offset, offset + TOTAL_ELEMENT);

  return {
    caseStudies: postsForCurrentPage,
    totalPages,
  };
}
