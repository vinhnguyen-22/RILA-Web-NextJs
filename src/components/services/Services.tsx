import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const serviceItems = [
  {
    icon: '/images/homepage/group-18996.svg',
    title: 'Data Analysis & Reporting',
    content:
      'RILA’s Research Solutions provide insightful research that drives strategic business decisions. Our proven methodologies and data frameworks are built around your business, priorities, and concerns. Our offerings scale to meet your needs.',
    imgArrow: '/images/homepage/arrow-14.svg',
    color: 'text-navy-200',
  },

  {
    icon: '/images/homepage/group-18997.svg',
    title: 'Boolean Setup',
    content:
      'We offer a wide range of consultancy capabilities, including Boolean setup for a number of social listening vendors. With over 15 years of experience in professional services, we have built complex setups in numerous languages for the largest brands in the world.',
    imgArrow: '/images/homepage/arrow-141.svg',
    color: 'text-red-200',
  },

  {
    icon: '/images/homepage/group-18999.svg',
    title: 'Language Packages',
    content:
      "Unlock insights across cultures and borders with RILA's Query Writing and Reporting Services. Leverage our expertise in 32+ languages for comprehensive social listening data analysis. Contact our team for the complete list of supported languages and coverage.",
    imgArrow: '/images/homepage/arrow-143.svg',
    color: 'text-gray-300',
  },

  {
    icon: '/images/homepage/group-18998.svg',
    title: 'Training & Consulting',
    content:
      'Empower your team with our customized social listening training solutions. Our expert trainers offer tailored user adoption courses to maximize the value of your social listening efforts. Discover success through our personalized training programs.',
    imgArrow: '/images/homepage/arrow-142.svg',
    color: 'text-orange-200',
  },
];

const boxItems = [
  {
    number: '32+',
    title: 'Languages',
    content: 'offered for Boolean setup and reporting',
    color: 'navy-200',
  },

  {
    number: '10',
    title: 'Software Platforms',
    content: 'we can provide services for',
    color: 'red-200',
  },

  {
    number: '98%',
    title: 'Client Retention',
    content: 'Fortune 500 recommendations available',
    color: 'orange-200',
  },

  {
    number: '15+',
    title: 'Years in Social Listening',
    content: 'Veteran experts executing client work',
    color: 'black',
  },
];

const Services = () => {
  return (
    <div className="bg-gray-400 pb-12 text-center mt-[50px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className=" w-[100%]  text-gray-200">
              <div className="lg:text-21xl md:text-3xl text-2xl leading-[50px] font-semibold text-center text-black mt-[52px] mb-[20px]">
                Our Services
              </div>
              <div className="lg:text-lg md:text-base text-sm leading-[32px] text-gray-500 inline-block text-center h-[139px] mb-[42px]">
                <p className="m-0 max-w-[700px] mx-auto">
                  RILA is a leading provider of social listening solutions, offering a wide range of services in 32+
                  languages and platforms. We are GDPR compliant and Adverse Events trained.
                </p>
                <p className="m-0 max-w-[750px] mx-auto">
                  All services are offered for platforms including Brandwatch, Netbase, Synthesio, Meltwater, Pulsar,
                  Talkwalker, YouScan, Buzzsumo, Digimind, and Sprinklr.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {serviceItems.map((item, index) => (
                  <div key={index} className="flex justify-center p-[20px]">
                    <div className="rounded-6xl p-[30px] bg-white shadow-[0px_2px_6px_rgba(0,_0,_0,_0.1)]">
                      <div className="flex flex-col items-start justify-between">
                        <div className=" flex flex-row items-center justify-start gap-[20px]">
                          <Image
                            width={66}
                            height={66}
                            className="relative lg:w-[66px] lg:h-[66px] w-10 h-10"
                            alt=""
                            src={item.icon}
                          />
                          <div className="lg:text-lg text-base relative font-semibold">{item.title}</div>
                        </div>
                        <div className="py-6 text-start w-[100%] text-lg leading-[28px] text-lightslategray inline-block ">
                          <p className="leading-[175%] lg:text-lg md:text-base text-sm m-0 text-black">
                            {item.content}
                          </p>
                        </div>
                        <Link
                          href="/about"
                          className={`flex flex-row items-center justify-start gap-[15px] ${item.color}`}
                        >
                          <span
                            className={`lg:text-lg md:text-base text-sm leading-[28px] font-semibold ${item.color}`}
                          >
                            Know More
                          </span>
                          <Image width={66} height={66} className=" w-[19px] h-[14.73px]" alt="" src={item.imgArrow} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:my-[46px] md:p-[10px]">
                {boxItems.map((item, index) => (
                  <div key={index} className={`rounded-6xl bg-${item.color}  md:p-0 p-6 text-white`}>
                    <div className="rounded-6xl md:h-[281px] flex flex-col items-center justify-center gap-[3px]">
                      <div className="lg:text-21xl md:text-3xl text-2xl font-semibold flex items-center justify-center md:w-[143.16px]">
                        {item.number}
                      </div>
                      <div className="lg:text-xl text-lg text-white leading-[32px] font-semibold inline-block ">
                        {item.title}
                      </div>
                      <div className="text-lg leading-[28px] text-white inline-block md:w-[182.69px]">
                        <p className="m-0 lg:text-lg md:text-base text-sm text-white">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
