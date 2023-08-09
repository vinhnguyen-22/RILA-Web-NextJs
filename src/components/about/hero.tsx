'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-12 h-[527px] gap-[60px]">
        <div className="col-span-5 h-full flex flex-col justify-center items-start gap-[15px] pl-[95px]">
          <h1 className="text-45xl font-semibold spacing-[1.92px]">About Us</h1>
          <p className="text-xl leading-7">
            <strong className="text-black">Unleashing The Power Of Social Listening:</strong> Setting The Standard For
            Data-Driven Insights
          </p>
          <button className="bg-red-100 px-6 py-2 text-white rounded-51xl">
            <strong>Request A Demo</strong>
          </button>
        </div>
        <div className="absolute -bottom-[65%] right-[49px] rounded-md bg-red-100 opacity-50 w-[177.5px] h-[129.248px]"></div>
        <div className="absolute top-[60px] right-[53%] rounded-full bg-orange-200 opacity-50 w-[159.5px] h-[159.5px] "></div>
        <div className="relative col-span-7 h-full  ">
          <div className="h-full overflow-hidden rounded-bl-[178px] bg-slate-700">
            <ReactPlayer
              height={'100%'}
              width={'100%'}
              className=""
              url="https://www.youtube.com/watch?v=38fpciTC6JA"
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
