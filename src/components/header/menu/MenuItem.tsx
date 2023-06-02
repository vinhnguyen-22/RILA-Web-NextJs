import Image from 'next/image';
import React from 'react';

const MenuItem = () => {
  return (
    <header className="fixed left-0 right-0 top-0 bg-palette-fill shadow-sm pt-4 z-[1000] md:relative">
      <div className="container mx-auto px-4 mb-2">
        <div className="flex items-center justify-between md:order-2 md:mt-2 relative">
          <Image
            width={107}
            height={10}
            className="w-[107px] h-10 object-cover"
            alt=""
            src="/images/homepage/logo-transparent2e1551993152468-1@2x.png"
          />

          <div className="flex flex-row items-center justify-start gap-8 md:gap-[76px] text-center text-lg text-black">
            <div className="text-xl leading-[32px] text-gray-300">Home</div>
            <div className="leading-[30px]">About Us</div>
            <div className="leading-[30px]">Services</div>
            <div className="leading-[30px]">Resources</div>
            <div className="rounded-xl bg-red-200 h-[43px] flex flex-row py-5 px-6 box-border items-center justify-center text-left text-white">
              <strong className="leading-[30px] capitalize">Let’s Talk!</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuItem;
