import { BlogHeader, BlogList, BlogLoadingState } from '@/components/blog/index';

export default function BlogLoading() {
  return (
    <div className="flex flex-col mx-auto container">
      <BlogHeader />
      <BlogList data={[]} />
      <div className="my-4 grid grid-cols-3">
        <BlogLoadingState />;
      </div>
    </div>
  );
}
