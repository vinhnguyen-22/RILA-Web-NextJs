import Image from "next/image";
import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-21xl mx-auto">
      <h1>
        <strong className="tracking-[0.03em] flex items-center justify-center">{title}</strong>
      </h1>
      {subtitle ? (
        <div className="max-w-[841px] text-center text-xl tracking-[0.03em] leading-[30px] text-gray-500 flex items-center justify-center">
          {subtitle}
        </div>
      ) : (
        <></>
      )}
      {/* <div className=" w-[868px] h-[60px] text-xl text-gray-700">
        <div className=" rounded-31xl flex flex-row py-[15px] px-[30px] items-center justify-center gap-[15px] text-red-100 border-[2px] border-solid border-red-100">
          <Image className="relative w-5 h-[22px]" alt="" src="/public/group-150.svg" />
          <strong className="relative tracking-[0.03em] leading-[30px]">Industry</strong>
        </div>
        <div className=" rounded-31xl flex flex-row py-[15px] px-[30px] items-center justify-center gap-[15px] border-[2px] border-solid border-gray-700">
          <Image className="relative w-[22px] h-[22px]" alt="" src="/public/group-212.svg" />
          <strong className="relative tracking-[0.03em] leading-[30px]">Brand</strong>
        </div>
        <div className=" rounded-31xl flex flex-row py-[15px] px-[30px] items-center justify-center gap-[15px] border-[2px] border-solid border-gray-700">
          <Image className="relative w-[18px] h-5" alt="" src="/public/group-211.svg" />
          <strong className="relative tracking-[0.03em] leading-[30px]">Influencer</strong>
        </div>
        <div className=" rounded-31xl flex flex-row py-[15px] px-[30px] items-center justify-center gap-[15px] border-[2px] border-solid border-gray-700">
          <Image className="relative w-5 h-[22px]" alt="" src="/public/group-210.svg" />
          <strong className="relative tracking-[0.03em] leading-[30px]">Market Research</strong>
        </div>
      </div> */}
    </div>
  );
};

export default Heading;
