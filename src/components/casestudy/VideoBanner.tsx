'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const VideoBanner = () => {
  const [playing, setPlaying] = useState(true);

  const onPlay = () => {
    setPlaying(!playing);
  };

  return (
    <div
      className="relative overflow-hidden py-[60px] flex flex-row justify-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('./images/case-study/banner-video.png')` }}
    >
      <div className=" grid md:grid-cols-2 grid-cols-1 w-[70%] place-items-center gap-[43px]">
        <div className="w-full rounded-2xl relative shadow-lg overflow-hidden">
          <ReactPlayer
            height={312}
            width={'100%'}
            className=""
            url="https://www.youtube.com/watch?v=bsEYJL291Tw"
            controls={false}
            light={true}
            playing={playing}
          />
        </div>

        <div className="text-white">
          <div className="rounded-lg px-[30px] py-[20px] bg-white flex justify-center items-center">
            <Image src={'/images/case-study/evelom-352.png'} className="" width={352} height={92} alt={'eve logo'} />
          </div>

          <h3 className="mt-[43px] text-xl font-semibold">
            Unveiling Success: The EVE LOM & RILA Social Listening Journey.
          </h3>
          <p className="text-lg leading-7">
            Witness how our data-driven insights supercharged EVE LOM to lower customer acquisition costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
