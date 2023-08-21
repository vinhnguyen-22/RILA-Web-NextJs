import Image from "next/image";
import React from 'react';

const activitieItems = [
  {
    image: '/images/homepage/group-18@2x.png',
    title: 'Listen',
    content:
      'Our social media monitoring tools track online brand mentions, leveraging technology and human expertise to identify risks, opportunities, trends, sentiments, and more.',
    icon: '/images/homepage/group-19034.svg',
    color: 'navy-200',
  },

  {
    image: '/images/homepage/group-19028@2x.png',
    title: 'Analyze',
    content:
      'Our team of expert researchers analyzes a wide range of metrics including sentiment, demographics, market trends, reach, impressions, and more to understand performance.',
    icon: '/images/homepage/group-19036.svg',
    color: 'red-200',
  },

  {
    image: '/images/homepage/group-19029@2x.png',
    title: 'Report',
    content:
      'Our social listening services offer actionable reporting and analytics, delivering strategic insights and valuable information to empower your decision-making process.',
    icon: '/images/homepage/group-19037.svg',
    color: 'orange-200',
  },

  {
    image: '/images/homepage/group-181@2x.png',
    title: 'Action',
    content:
      'Our expert team identifies patterns, analyzes data, and develops strategies that align with your business objectives, transforming insights into actionable recommendations.',
    icon: '/images/homepage/group-19039.svg',
    color: 'black',
  },
];

const Activities = () => {
  return (
    <div className="md:px-24 lg:px-[20px] xl:p-24 px-10 mt-[40px] w-full">
      <h3 className="font-semibold text-3xl leading-144 mb-[60px] mt-[90px] pl-8">
        How Does RILA Do Social Listening?
      </h3>
      <div className="text-[36px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8">
        {activitieItems.map((item, index) => (
          <div key={index} className={` text-6xl text-${item.color}`}>
            <div className="relative mb-[40px] w-[300px] h-[300px] lg:w-[200px] xl:w-[300px]  lg:h-[200px] xl:h-[300px] mx-auto">
              <Image
                fill
                className="relative overflow-hidden max-h-full object-contain"
                alt=""
                src={item.image}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} />
            </div>

            {/* md:h-[500px] lg:h-[630px] xl:[500px]  */}
            <div className="p-[15px]">
              <div className="relative md:h-[100%] rounded-6xl p-6 bg-white shadow-[0px_10px_50px_rgba(1,_13,_130,_0.12)] flex flex-col items-start justify-start gap-[15px]">
                <Image
                  height={60}
                  width={60}
                  alt=""
                  src={item.icon}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div className="absolute top-[-7%] md:right-[-10%] lg:right-[-10%] right-[-3%] w-[53px] h-[53px]">
                  <div
                    className={`rounded-[50%] flex justify-center items-center text-center bg-${item.color}  h-[53px]`}
                  >
                    <div className="text-white leading-[144%] text-lg font-semibold">0{index + 1}</div>
                  </div>
                </div>
                <div className="leading-[144%] font-semibold inline-block w-[119px]">{item.title}</div>
                <div className="min-h-[250px] text-base leading-[175%] text-black inline-block shrink-0">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
