'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Định nghĩa dữ liệu chứa nội dung các slide
const slideData = [
  {
    imageUrl: '/images/homepage/ellipse-80@2x.png',
    companyName: 'TOYOTA',
    jobTitle: 'Sr. Vehicle Analyst',
    name: 'Victoria Ellis',
    testimonial:
      'I’ve received excellent research services from RILA GLOBAL over the past 3 years during my time at Toyota Motor North America. RILA’s professionalism and industry knowledge is an asset to us and will continue to be to other global social media leaders and partners.',
  },
  {
    imageUrl: '/images/homepage/chevron.png',
    companyName: 'CHEVRON',
    jobTitle: 'Sr. Research Analyst',
    name: 'Maren T.',
    testimonial:
      'RILA GLOBAL CONSULTING is by far the most trusted and professional partner I’ve worked with; the team’s knowledge of the global emerging technologies is unprecedented.',
  },
  {
    imageUrl: '/images/homepage/image-12@2x.png',
    companyName: 'DAVY',
    jobTitle: 'Equity Analytics, DAVY',
    name: 'Dave R.',
    testimonial:
      'Davy Capital Markets worked with RILA GLOBAL in the first half of 2023. We knew social listening well and recognized the inherent limitations of the major platforms. That’s where RILA GLOBAL came in, and they didn’t disappoint, delivering value-added analytical expertise that really elevated the project deliverables. Awesome!',
  },
  {
    imageUrl: '/images/homepage/Eve_Lom.png',
    companyName: 'EVE LOM',
    jobTitle: 'Sr. Director of E-commerce',
    name: 'Katya E.',
    testimonial:
      "I can't speak highly enough of RILA. Their expertise in social listening and consumer research has been invaluable to our company. They were able to provide us with unique insights and trends that we would have never been able to uncover on our own. Their team is professional, responsive, and always goes above and beyond to meet our needs.",
  },
  {
    imageUrl: '/images/homepage/ellipse-802@2x.png',
    companyName: 'GVTC ',
    jobTitle: 'Communications',
    name: 'John H.',
    testimonial:
      'At GVTC, we take a strategic approach of surrounding ourselves with talented and brilliant partners and then letting them do their thing. RILA GLOBAL is at the very top of the list when it comes to social media analytics and we are so very pleased to have them as a partner.',
  },
  {
    imageUrl: '/images/homepage/ellipse-801@2x.png',
    companyName: 'CAPSULE',
    jobTitle: 'Operations Training and Development',
    name: 'Lilly M.',
    testimonial:
      'RILA was extremely efficient, proactive, and knowledgeable. They explained very well what they were doing and going to do for our organization and helped us achieve it; great communication! The team is intelligent, friendly, and well-versed in the space. I highly recommend their work!',
  },
];

const Testimonial = () => {
  const swiperRef = useRef<any>();

  return (
    <div className="container mx-auto py-[78px] mt-[21px]">
      <div className="grid grid-cols-12 mb-[20px] md:mb-[72px]">
        <div className="col-span-12 lg:col-span-8 md:col-span-8 flex flex-col items-start justify-start gap-[9px] ">
          <h4 className="relative capitalize inline-block lg:text-3xl md:text-2xl text-2xl font-bold mb-2">
            What Our Clients Say about us
          </h4>
          <div className="relative lg:text-3xl md:text-2xl text-lg leading-[32px] inline-block shrink-0">
            <span className="capitalize">Fortune 500 clients </span>choose
            <span className="capitalize"> RILA G</span>
            <span className="uppercase">lobal Consulting</span>
          </div>
        </div>

        <div className="col-span-12 flex items-center justify-center lg:col-span-4 md:col-span-4 relative mt-[20px]">
          <div className="md:absolute top-0 right-0 flex justify-center  md:w-initial">
            <div
              className="flex cursor-pointer hover:opacity-75 items-center justify-center rounded-[50%] mr-[20px]"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <Image
                className="lg:w-[85px] lg:h-[85px] md:w-20 md:h-20 w-16 h-16 "
                alt=""
                width={30}
                height={30}
                src="/images/homepage/group-19049.svg"
              />
            </div>

            <div
              className="lg:w-[85px] lg:h-[85px] md:w-20 md:h-20 w-16 h-16 flex cursor-pointer hover:opacity-75 items-center justify-center rounded-[50%] bg-red-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)]"
              onClick={() => swiperRef.current.slideNext()}
            >
              <Image
                className="mt-1.5 left-[87.92%] max-w-full overflow-hidden max-h-full cursor-pointer"
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
          onSlideChange={() => console.log('slide change')}
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
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          className="testimonialSwiper w-[75%] md:w-[75%] lg:w-[85%] xl:w-[75%]"
        >
          {slideData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="m-[10px] rounded-6xl bg-ghostwhite shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[100%] md:h-[500px] lg:h-[700px] xl:h-[500px] flex flex-col pt-8 pb-[20px] pr-[29px] pl-8 box-border items-start justify-start gap-[19px]">
                <div className=" flex flex-row items-start justify-start gap-[20px]">
                  <div className="w-[80px] h-[80px] relative">
                    <Image fill className="relative rounded-[50%] object-contain" alt="" src={item.imageUrl} />
                  </div>

                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                      <div className="self-stretch relative capitalize">
                        <span>
                          <strong>{item.companyName}</strong>
                        </span>
                        <span className="text-lg">
                          <span>, </span>
                          <span>{item.jobTitle}</span>
                        </span>
                      </div>
                      <div className="relative text-xl capitalize">{item.name}</div>
                    </div>
                  </div>
                </div>
                <div className="relative text-base leading-[32px] text-black inline-block ">{item.testimonial}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="rounded-[56px] shado0,_0,_0,_0.25)] mt-[80px]">
        <div className="rounded-[56px] overflow-hidden bg-orange-200 md:px-[50px] md:py-[30px] px-10 py-8">
          <div className="text-red-400 grid grid-cols-12">
            <div className="sm:col-span-9 col-span-12 flex md:inline-block flex-col md:mt-3">
              <h4 className="lg:text-3xl md:text-xl text-lg leading-[24px] capitalize md:inline-block text-white font-semibold mb-[38px] ">
                Start your Social Listening journey with RILA now
              </h4>
              <Link
                href="/about-us"
                className="rounded-51xl w-[200px] max-w-full bg-gray-600 flex flex-row md:py-4 py-2 box-border items-center justify-center"
              >
                <strong className="relative lg:text-lg md:text-base text-sm capitalize">Start Now</strong>
              </Link>
            </div>

            <div className="sm:flex hidden sm:col-span-3 relative justify-end">
              <Image
                width={150}
                height={150}
                className="self-center md:right-0 lg:right-0"
                alt=""
                src="/images/homepage/group-19053.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
