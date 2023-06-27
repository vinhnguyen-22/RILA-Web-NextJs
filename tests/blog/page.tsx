'use client';
import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notio',
};

export default async function BlogPage() {
  //  comment block code below to see blog page

  // const { push } = useRouter();
  // useEffect(() => {
  //   push('/');
  // }, []);

  const allPosts = await getAllPostsFromNotion();
  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <section className="mb-16 mt-0 space-y-8 md:mt-20">
        <SearchBar />
        {/* <CategoryFilter allCategories={allCategories ? allCategories : []} /> */}
      </section>
      {/* <PostsGrid allPosts={allPosts ? allPosts : []} /> */}
    </>
  );
}
