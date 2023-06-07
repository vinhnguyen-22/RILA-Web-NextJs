"use client";
import Image from "next/image";
import { useRef } from "react";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const swiperRef = useRef<any>();

  return (
    <div className="container mx-auto py-[78px] mt-[21px]">
      <div className="grid grid-cols-12 mb-[20px] md:mb-[72px]">
        <div className="col-span-12 lg:col-span-8 md:col-span-8 flex flex-col items-start justify-start gap-[9px] ">
          <h4 className="relative capitalize inline-block text-21xl font-bold">
            What Our Clients Say about us
          </h4>
          <div className="relative text-9xl leading-[32px] inline-block shrink-0">
            <span className="capitalize">Fortune 500 clients </span>choose
            <span className="capitalize"> RILA G</span>
            <span className="uppercase">lobal Consulting</span>
          </div>
        </div>

        <div className="col-span-12 flex items-center justify-center lg:col-span-4 md:col-span-4 relative my-[20px]">
          <div className="md:absolute top-0 right-0 flex justify-center  md:w-initial">
            <div
              className="flex cursor-pointer hover:opacity-75 items-center justify-center rounded-[50%]  w-[85px] h-[85px] mr-[20px]"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <Image
                className="w-[89px] h-[89px]"
                alt=""
                width={30}
                height={30}
                src="/images/homepage/group-19049.svg"
              />
            </div>

            <div
              className="flex cursor-pointer hover:opacity-75 items-center justify-center rounded-[50%] bg-red-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] w-[85px] h-[85px]"
              onClick={() => swiperRef.current.slideNext()}
            >
              <Image
                className=" bottom-[80.93%] left-[87.92%] max-w-full overflow-hidden max-h-full cursor-pointer"
                alt=""
                src="/images/homepage/vector1.svg"
                width={40}
                height={40}
                id="vectorIcon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar p-[10px] flex flex-row items-start justify-start gap-[39px] text-9xl">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          grabCursor={true}
          modules={[Navigation, FreeMode]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          freeMode={true}
          breakpoints={{
            25: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // 1180: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
          }}
          className="testimonialSwiper md:w-[75%]"
        >
          <SwiperSlide>
            <div className="m-[10px] rounded-6xl bg-ghostwhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[100%] flex flex-col pt-8 pb-0 pr-[29px] pl-8 box-border items-start justify-start gap-[19px]">
              <div className=" flex flex-row items-start justify-start gap-[20px]">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    fill
                    className="relative rounded-[50%] object-contain"
                    alt=""
                    src="/images/homepage/ellipse-80@2x.png"
                  />
                </div>

                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="lg:text-lg md:text-base text-sm self-stretch relative capitalize">
                      <span>
                        <strong>TOYOTA</strong>
                      </span>
                      <span className="text-lg">
                        <span>, </span>
                        <span>Sr. Vehicle Analyst</span>
                      </span>
                    </div>
                    <div className="relative lg:text-lg md:text-base text-sm capitalize">
                      Victoria Ellis
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 relative md:text-sm text-xs lg:leading-[32px] md:leading-[25px] leading-[22px] text-gray-500 inline-block ">
                I’ve received excellent research services from RILA GLOBAL over
                the past 3 years during my time at Toyota Motor North America.
                RILA’s professionalism andindustry knowledge is an asset to us
                and will continue to be to other global social media leaders and
                partners.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-[10px] rounded-6xl bg-ghostwhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[100%] flex flex-col py-8 pr-[19px] pl-8 box-border items-start justify-start gap-[19px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    fill
                    className="relative rounded-[50%] object-contain"
                    alt=""
                    src="/images/homepage/ellipse-801@2x.png"
                  />
                </div>

                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="lg:text-lg md:text-base text-sm  relative capitalize inline-block">
                      <strong>
                        <span>CAPSULE,</span>
                      </strong>
                      <span className="text-lg">
                        <strong> </strong>
                        <span>Operations Training and Development</span>
                      </span>
                    </div>
                    <div className="relative lg:text-lg md:text-base text-sm capitalize">Lilly M.</div>
                  </div>
                </div>
              </div>
              <div className="relative md:text-sm text-xs lg:leading-[32px] md:leading-[25px] leading-[22px] text-gray-500 inline-block">
                RILA was extremely efficient, proactive, and knowledgeable. She
                explained very well what she was doing and going to do for our
                organization and helped us achieve it; great communication! She
                is intelligent, friendly, and well versed in the space. I highly
                recommend her work!
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className=" m-[10px] rounded-6xl bg-ghostwhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[100%] flex flex-col py-8 pr-[73px] pl-8 box-border items-start justify-start gap-[19px]"
              data-scroll-to="frameContainer"
            >
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    fill
                    className="relative rounded-[50%] object-contain"
                    alt=""
                    src="/images/homepage/ellipse-802@2x.png"
                  />
                </div>

                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <strong className="lg:text-lg md:text-base text-sm relative capitalize inline-block ">
                      <p className="m-0">GVTC</p>
                      <p className="m-0">Communications</p>
                    </strong>
                    <div className="relative lg:text-lg md:text-base text-sm capitalize">John H.</div>
                  </div>
                </div>
              </div>
              <div className="relative md:text-sm text-xs lg:leading-[32px] md:leading-[25px] leading-[22px] text-gray-500 inline-block">
                At GVTC, we take a strategic approach of surrounding ourselves
                with talented and brilliant partners and then letting them do
                their thing. RILA GLOBAL is at the very top of the list when it
                comes to social media analytics and we are so very pleased to
                have them as a partner.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="m-[10px] rounded-6xl bg-ghostwhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[100%] flex flex-col py-8 pr-[19px] pl-8 box-border items-start justify-start gap-[19px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    fill
                    className="relative rounded-[50%] object-contain"
                    alt=""
                    src="/images/homepage/image-12@2x.png"
                  />
                </div>

                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="lg:text-lg md:text-base text-sm relative capitalize inline-block">
                      <strong>
                        <span>DAVY,</span>
                      </strong>
                      <span className="text-lg">
                        <strong> </strong>
                        <span> Equity Analytics</span>
                      </span>
                    </div>
                    <div className="relative lg:text-lg md:text-base text-sm capitalize">Dave R.</div>
                  </div>
                </div>
              </div>
              <div className="relative md:text-sm text-xs lg:leading-[32px] md:leading-[25px] leading-[22px] text-gray-500 inline-block">
                Davy Capital Markets worked with RILA GLOBAL in the first half
                of 2023. We knew social listening well and recognized the
                inherent limitations of the major platforms. That’s where RILA
                GLOBAL came in, and they didn’t disappoint, delivering
                value-added analytical expertise that really elevated the
                project deliverables. Awesome!
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
