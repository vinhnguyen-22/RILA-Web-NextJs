import ClientOnly from '@/components/ClientOnly/ClientOnly';
import { BlogHeader } from '@/components/blog/index';
import { BlogList } from '@/components/blog/index';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isArticle } from '@/types/guards';
import Image from 'next/image';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion.',
};
export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_BLOG_DB_ID, isArticle);
  return (
    <ClientOnly>
      <div className="relative h-[528px] text-21xl text-white">
        <Image className="object-cover" alt="" fill src={'/images/blog/rectangle-38.png'} />
        <div className="relative grid">
          <div className="absolute top-[160px] left-[95px] col-span-12 h-52">
            <b className="tracking-[0.03em] capitalize">Welcome to RILA&apos;S Blog</b>
            <div className="mt-[15px] text-xl tracking-[0.03em] leading-[30px] flex items-center ">
              Your destination for the latest trends, news, and consumer analyses
            </div>
            <div className="mt-[15px] rounded-[66px] flex flex-row justify-between py-1.5 pr-2.5 pl-[30px]  text-lg border-[2px] border-solid border-gray-700">
              <input
                className="relative flex font-light items-center w-[283px] shrink-0 outline-none bg-inherit"
                placeholder="Enter Your Email"
              />
              <div className="relative h-[46px] text-center text-xl">
                <button className="rounded-[47px] bg-red-100 flex flex-row py-2 px-6 items-center justify-center">
                  <strong className="relative">Subscribe Now</strong>
                </button>
              </div>
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto container">
        <BlogHeader />
        <BlogList data={articles} />
      </div>
    </ClientOnly>
  );
}
