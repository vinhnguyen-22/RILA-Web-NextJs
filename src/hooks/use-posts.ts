import { useEffect, useMemo, useState } from 'react';
import { Post } from '@/types/post';
import { search } from '@/utils/search';
import { toUniqueArray } from '@/utils/to-unique-array';

const POST_PER_PAGE = 12;

export default function usePosts(allPosts: Post[]) {
  const query = useState(null);
  const [categories, setCategories] = useState({
    selected: [],
    active: [],
  });

  const allPostsFiltered = useMemo(
    () =>
      allPosts.filter((post) => {
        if (!post.published) {
          return false;
        }

        if (query && !search(post.title, query)) {
          return false;
        }

        if (categories.selected.length) {
          const isCategoryMatch = categories.selected.every((cat) => post.categories.includes(cat));
          if (!isCategoryMatch) {
            return false;
          }
        }

        return true;
      }),
    [allPosts, categories.selected, query]
  );

  allPostsFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  const totalPages = Math.ceil(allPostsFiltered.length / POST_PER_PAGE);
  // useEffect(() => {
  //   setCategories((prevCategories: any) => ({
  //     ...prevCategories,
  //     active: toUniqueArray(allPostsFiltered.map((post) => post.categories).flat()),
  //   }));
  // }, [allPostsFiltered, setCategories]);

  return {
    posts: allPostsFiltered,
    totalPages,
  };
}
