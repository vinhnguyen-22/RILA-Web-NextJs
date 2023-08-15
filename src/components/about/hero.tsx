'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Hero = () => {
  return (
    <section className="">
      <div className="lg:grid grid-cols-12 h-[527px] md:gap-[60px] flex flex-col-reverse ">
        <div className="md:col-span-5 col-span-12 h-full flex flex-col justify-center items-start gap-[15px] pl-[95px] max-sm:p-5">
          <h1 className="text-45xl font-semibold spacing-[1.92px] max-sm:text-21xl">About Us</h1>
          <p className="text-xl leading-7">
            <strong className="text-black">Unleashing The Power Of Social Listening:</strong> Setting The Standard For
            Data-Driven Insights
          </p>
          <button className="bg-red-100 px-6 py-2 text-white rounded-51xl">
            <strong>Request A Demo</strong>
          </button>
        </div>
        <div className="relative md:col-span-7 col-span-12 h-full lg:p-0 p-5 sm:mt-0 mt-10">
          <div className="absolute sm:-top-[30px] sm:right-[90%] -top-[10px] right-[60%] rounded-full bg-yellow-200  opacity-50 sm:w-[159.5px] w-[100px] sm:h-[159.5px] h-[100px] "></div>
          <div className="absolute sm:-bottom-[15%] -bottom-[0%] right-[49px] rounded-md bg-red-100 opacity-50 sm:w-[177.5px] w-[100px] sm:h-[129.248px] h-[52px]"></div>

          <div className="relative h-full overflow-hidden lg:rounded-bl-[178px] rounded-md bg-slate-700">
            <ReactPlayer
              height={'100%'}
              width={'100%'}
              className=""
              url="https://www.youtube.com/watch?v=Ov924EfUDVg"
              controls={false}
              light={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
