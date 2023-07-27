'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const Heros = () => {
  const media = useMediaQuery('(max-width: 600px)');
  return (
    <div
      className="relative h-[528px] text-21xl text-white -mt-[40px] bg-cover bg-no-repeat bg-bottom "
      style={{
        backgroundImage: `url('${media ? '/images/blog/hero.png' : '/images/blog/rectangle-38.png'}`,
      }}
    >
      {/* <Image className="object-cover max-sm:hidden" alt="" fill src={'/images/blog/rectangle-38.png'} /> */}
      {/* <div
        className="hidden max-sm:block h-[257px]"
        style={{ backgroundImage: 'url(`/images/blog/rectangle-38.png`)' }}
      >
        csacs
      </div> */}
      <div className="relative max-sm:mx-[24px] flex h-[100%] lg:grid grid-cols-3 gap-1 max-md:flex flex-col justify-center items-center">
        <div className="lg:col-span-1 col-span-3">
          <div className="lg:absolute  top-[160px] left-[95px] h-52">
            <h1 className="tracking-[0.03em] capitalize">
              <strong>Welcome to RILA&apos;S Blog</strong>
            </h1>

            <div className="mt-[15px] text-xl tracking-[0.03em] leading-[30px] flex items-center ">
              Your destination for the latest trends, news, and consumer analyses
            </div>
            <div className="mt-[15px] rounded-[66px] flex flex-row justify-between py-1.5 pr-2.5 pl-[30px]  text-lg border-[2px] border-solid border-white">
              <input
                className="relative flex font-light items-center shrink-0 outline-none bg-inherit max-sm:max-w-[130px] placeholder:text-white "
                placeholder="Enter Your Email"
              />
              <div className="relative h-[46px] flex place-content-center text-center md:text-xl text-xs max-sm:min-w-[132px]">
                <button className="rounded-[47px] bg-red-100 flex flex-row py-2 px-6 items-center justify-center">
                  <strong className="relative">Subscribe Now</strong>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 col-span-3"></div>
      </div>
    </div>
  );
};

export default Heros;
