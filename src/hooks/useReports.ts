import { useEffect, useMemo } from 'react';

import usePostStore from '@/store/postStore';

const TOTAL_ELEMENT = 9;

export default function useReports(allReports: any[]) {
  const { page, query, selected, setActive } = usePostStore((state) => state);
  const allReportsFiltered = useMemo(
    () =>
      allReports
        .filter((post) => {
          if (!post.published) {
            return false;
          }

          if (query) {
            const search =
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.summary.toLowerCase().includes(query.toLowerCase()) ||
              post.summary.toLowerCase().includes(query.toLowerCase()) ||
              post.tags.some(({ name }: { name: string }) =>
                name.toLowerCase().includes(query.toLowerCase()),
              );
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
    [allReports, selected, query],
  );
  //   useEffect(() => {
  //     const fetchData = (query: string) =>
  //       allReports
  //         .filter(
  //           ({ title, summary, tags, date }) =>
  //             new Date(date) < new Date() &&
  //             (title.toLowerCase().includes(query) ||
  //               summary.toLowerCase().includes(query) ||
  //               summary.toLowerCase().includes(query) ||
  //               tags.some(({ name }) => name.toLowerCase().includes(query)))
  //         )
  //         .sort((a, b) => (a.date > b.date ? -1 : 1));
  //   }, [allReports, query]);

  allReportsFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  const totalPages = Math.ceil(allReportsFiltered.length / TOTAL_ELEMENT);
  const offset = (page ? +page - 1 : 0) * TOTAL_ELEMENT;
  const reportsForCurrentPage = allReportsFiltered.slice(offset, offset + TOTAL_ELEMENT);
  useEffect(() => {
    setActive([...new Set(allReportsFiltered.map((post) => post.tags).flat())]);
  }, [allReportsFiltered, setActive]);
  return {
    reports: reportsForCurrentPage,
    totalPages,
  };
}
