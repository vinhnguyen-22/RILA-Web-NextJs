import Image from "next/image";
import React from 'react';

const organizations = [
  '/images/homepage/image-8@2x.png',
  '/images/homepage/image-14@2x.png',
  '/images/homepage/image-6@2x.png',
  '/images/homepage/image-21@2x.png',
  '/images/homepage/image-10@2x.png',
  '/images/homepage/image-19@2x.png',
  '/images/homepage/image-16@2x.png',
  '/images/homepage/image-17@2x.png',
  '/images/homepage/image-7@2x.png',
  '/images/homepage/image-18@2x.png',
  '/images/homepage/image-20@2x.png',
  '/images/homepage/image-11@2x.png',
  '/images/homepage/image-13@2x.png',
  '/images/homepage/image-9@2x.png',
  '/images/homepage/image-12@2x.webp',
];

const Organization = () => {
  return (
    <div className="mx-auto container">
      <h4 className="relative capitalizek lg:text-3xl md:text-2xl text-2xl font-semibold mb-22 w-full my-[90px] text-black text-center inline-block ">
        Trusted By the World’s Leading Organizations
      </h4>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-[40px] md:gap-[60px] lg:gap-[80px]  mb-[100px] md:mb-[150px]">
        {organizations.map((item, index) => (
          <div key={index} className="aspect-video relative">
            <Image
              fill
              className="relative object-contain"
              alt={'alt'}
              src={item}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organization;
