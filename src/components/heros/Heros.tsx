import Image from 'next/image';
import React from 'react';
import Services from '../services/Services';
import Link from 'next/link';

const Heros = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className=" text-gray-500">
            <strong className="text-[44px] sm:mb-[20px] md:leading-[80px] lg:leading-[80px] capitalize inline-block text-black  ">
              turn Social Listening data into actionable insights
            </strong>
            <div className="leading-[32px] capitalize inline-block ">
              Professional and Research Services for Social Listening - Trusted by the World{"'"}s Biggest Brands.
            </div>

            <Link
              href="/about"
              className="mt-[31px] rounded-51xl bg-red-200 w-[193px] h-[55px] flex flex-row py-5 px-6 box-border items-center justify-center text-white"
            >
              <strong className="relative leading-[20px] capitalize">Contact Us</strong>
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <Image width={650} height={520} src={'/images/homepage/image-banner.jpg'} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  mt-[80px]">
          <div className="rounded-6xl bg-navy-200 p-2 ">
            <div className="flex flex-col items-center justify-start gap-[18px] text-center text-21xl ">
              <strong className="text-white leading-[56px] capitalize flex items-center justify-center  shrink-0">
                About RILA GLOBAL CONSULTING
              </strong>
              <div className=" text-[24px] leading-[50px] text-gainsboro flex items-center p-[20px] shrink-0 [-webkit-text-stroke:1px_#fff] mix-blend-normal">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    <span className="capitalize">RILA GLOBAL CONSULTING </span>is a boutique social listening agency
                    located in
                  </p>
                  <p className="m-0">
                    New York City. We study consumers, brands, markets, and trends, offering tailored research and
                    insight to clients globally.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
