'use client';
import { AboutTeamBio } from '@/mocks/about-data';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../common/Heading/Heading';
import TeamDot from '@/icons/about/TeamDot';

const TeamBioSection = () => {
  const [indexBio, setIndexBio] = useState<number>(0);

  const swiperRef = useRef<any>();
  return (
    <section className="mt-[100px] mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Heading
          title="Introducing Our Expert Team"
          subtitle="The Brilliant Minds Behind Data Analysis in Social Listening"
        />
        <div className="grid grid-cols-3 mt-[28px] mb-[62px]">
          <div className="relative flex justify-center items-center p-[55px_40px_26px_2px]">
            <div className="absolute top-0 right-0 flex flex-col gap-[17px]">
              <TeamDot />
              <TeamDot />
            </div>
            <div className="absolute bottom-0 left-0 w-[139px] h-[139px] border-[11px] border-red-600 rounded-full"></div>

            <div
              className="relative bg-no-repeat bg-cover overflow-hidden w-[401px] h-[401px] rounded-[169px_0px_169px_169px] bg-white"
              style={{
                backgroundImage: `url('${AboutTeamBio[indexBio].image}')`,
                boxShadow: '14px -1px 38px 0px rgba(0, 0, 0, 0.25)',
              }}
            ></div>
          </div>

          <div className="flex justify-center items-center">
            <Swiper
              slidesPerView={1}
              grabCursor={true}
              modules={[Navigation, Pagination]}
              onSlideChange={(e) => setIndexBio(e.realIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="teamBioSwiper"
              loop={true}
              pagination={{ clickable: true }}
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
          <div className="flex justify-center items-center flex-wrap gap-[20px]">
            {AboutTeamBio.map(
              (item, index) =>
                index != indexBio && (
                  <div
                    className="w-[84px] h-[84px] rounded-full relative overflow-hidden hover:scale-110"
                    onClick={() => setIndexBio(index)}
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
        </div>
      </div>
    </section>
  );
};

export default TeamBioSection;
