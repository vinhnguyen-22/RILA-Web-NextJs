import Image from 'next/image';
import React from 'react';

const benefitsItems = [
  {
    title: 'Customer Identification',
    content:
      "Understand your target audience's needs, preferences, and pain points to improve your product offerings, messaging, and overall customer experience.",
    icon: '/images/homepage/group-19048.svg',
  },

  {
    title: 'Competitive Knowledge',
    content:
      'Keep a close eye on industry trends, competitor activities, and emerging opportunities to stay ahead of the curve and make informed business decisions.',
    icon: '/images/homepage/group-19047.svg',
  },

  {
    title: 'Real Time Data & Alerts',
    content:
      "Monitor your brand's online reputation real-time and quickly address negative feedback or customer service issues and prevent PR crisis.",
    icon: '/images/homepage/group-19046.svg',
  },
];

const Benefits = () => {
  return (
    <div className="bg-gray-400 mt-[73px] py-[73px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="relative md:pr-[50px] lg:pr-[70px] xl:pr-[70px]">
            <h3 className="font-semibold text-4xl leading-[50px]  inline-block w-max-[561.16px]">
              The Benefits Of Social Listening
            </h3>
            <div className="mt-[20px] mb-[40px] text-lg leading-[30px] text-black inline-block ">
              Our social listening services help you harness actionable insights to enhance brand reputation, uncover
              market trends, and drive strategic decision-making.
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] text-9xl">
              {benefitsItems.map((item, index) => (
                <div key={index} className="flex items-start justify-center gap-[27px] ">
                  <div className="w-[75%] md:w-[100%] h-[75.78px]">
                    <Image width={75} height={75.78} alt="" src={item.icon} />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[15px] ">
                    <div className="relative leading-[38px] font-semibold inline-block">{item.title} </div>
                    <div className="relative text-lg leading-[28px] text-black inline-block">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[700px] text-center">
            <div className="absolute top-0 right-0 ">
              <Image width={509} height={649} alt="" src={'/images/homepage/rectangle-5358@2x.png'} />
            </div>
            <div className="absolute bottom-0 left-0 bg-white shadow-[0px_20px_70px_rgba(_0,_0,_0,_0.09)] rounded-6xl  p-[20px]">
              <Image width={293} height={269} alt="" src="/images/homepage/visitor.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
