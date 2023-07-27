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
    <div className="relative overflow-hidden">
      <div className="bg-black">
        <ReactPlayer
          height={430}
          width={'100%'}
          className="bg-black opacity-50"
          url="https://www.youtube.com/watch?v=bsEYJL291Tw"
          controls={false}
          light={true}
          playing={playing}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row w-[60%] justify-center items-center gap-[80px]">
        <div className="rounded-lg px-[35px] py-[50px] bg-white flex justify-center items-center">
          <Image src={'/images/case-study/evelom-352.png'} className="" width={352} height={92} alt={'eve logo'} />
        </div>
        <div className="text-white">
          <h3 className="text-xl font-semibold">Unveiling Success: The EVE LOM & RILA Social Listening Journey.</h3>
          <p className="text-lg leading-7">
            Witness how our data-driven insights supercharged EVE LOM to lower customer acquisition costs.
          </p>
          <button onClick={onPlay} className="px-[60px] py-[8px] bg-red-100 hover:bg-red-100 rounded-[46px] mt-[20px]">
            <strong>Watch Video</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
