'use client';
import { AboutTeamBio } from '@/mocks/about-data';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Heading from '../common/Heading/Heading';
import TeamDot from '@/icons/about/TeamDot';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const TeamBioSection = () => {
  const media = useMediaQuery('(max-width: 800px)');
  console.log(media);
  const [indexBio, setIndexBio] = useState<number>(0);
  const swiperRef = useRef<any>();
  useEffect(() => {
    if (indexBio == swiperRef.current.activeIndex) {
      swiperRef.current.slideTo(indexBio);
    }
  }, [indexBio]);

  const RenderSlideContent = () => (
    <div className="lg:col-span-1 col-span-2 flex justify-center items-center">
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        modules={[Navigation, Pagination]}
        onSlideChange={(e) => {
          setIndexBio(e.realIndex);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="teamBioSwiper"
        pagination={{ clickable: true, dynamicBullets: true }}
        loop
        init
        centeredSlides={true}
      >
        {AboutTeamBio.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex justify-center items-center flex-col h-full gap-[20px]">
              <h3 className="font-semibold text-3xl">{item.name}</h3>
              <p className="text-black">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  return (
    <section className="mt-[100px] mx-[10px]">
      <div className="flex flex-col justify-center items-center sm:text-left text-center">
        <Heading
          title="Introducing Our Expert Team"
          subtitle="The Brilliant Minds Behind Data Analysis in Social Listening"
        />
        <div className="grid lg:grid-cols-3 grid-cols-2 mt-[28px] mb-[62px] ">
          <div className="relative flex justify-center items-center sm:p-[55px_40px_26px_2px] lg:mb-0 mb-12">
            <div className="absolute top-0 right-0 flex flex-col gap-[17px]">
              <TeamDot />
              <TeamDot />
            </div>
            <div className="absolute lg:bottom-0 bottom-2 left-0 w-[139px] h-[139px] border-[11px] border-red-600 rounded-full"></div>

            <div
              className="relative bg-no-repeat bg-cover overflow-hidden lg:w-[401px] lg:h-[401px] md:w-[360px] md:h-[360px]  w-[220px] h-[220px] rounded-[169px_0px_169px_169px] bg-white"
              style={{
                backgroundImage: `url('${AboutTeamBio[indexBio].image}')`,
                boxShadow: '14px -1px 38px 0px rgba(0, 0, 0, 0.25)',
              }}
            ></div>
          </div>
          {!media ? RenderSlideContent() : <></>}
          <div className="flex justify-center items-center flex-wrap sm:gap-[20px] gap-[10px] p-2 lg:mb-0 mb-12">
            {AboutTeamBio.map(
              (item, index) =>
                index != indexBio && (
                  <div
                    className="cursor-pointer sm:w-[84px] w-[50px] sm:h-[84px] h-[50px] rounded-full relative overflow-hidden hover:scale-110 hover:opacity-85 shadow-md"
                    onClick={() => {
                      setIndexBio(index);
                    }}
                    key={index}
                  >
                    <Image
                      src={item.image}
                      fill
                      className="object-fill"
                      alt={item.name}
                      sizes="(max-width: 600px) 100vw, 300px"
                    />
                  </div>
                )
            )}
          </div>
          {!!media ? RenderSlideContent() : <></>}
        </div>
      </div>
    </section>
  );
};

export default TeamBioSection;
