import Image from 'next/image';

const Heros = () => {
  return (
    <div className="relative h-[528px] text-21xl text-white">
      <Image className="object-cover" alt="" fill src={'/images/blog/rectangle-38.png'} />
      <div className="relative grid grid-cols-3 gap-1">
        <div className="col-span-1 ">
          <div className="absolute top-[160px] left-[95px] h-52">
            <strong className="tracking-[0.03em] capitalize">Welcome to RILA&apos;S Blog</strong>
            <div className="mt-[15px] text-xl tracking-[0.03em] leading-[30px] flex items-center ">
              Your destination for the latest trends, news, and consumer analyses
            </div>
            <div className="mt-[15px] rounded-[66px] flex flex-row justify-between py-1.5 pr-2.5 pl-[30px]  text-lg border-[2px] border-solid border-white">
              <input
                className="relative flex font-light items-center shrink-0 outline-none bg-inherit"
                placeholder="Enter Your Email"
              />
              <div className="relative h-[46px] text-center text-xl">
                <button className="rounded-[47px] bg-red-100 flex flex-row py-2 px-6 items-center justify-center">
                  <strong className="relative">Subscribe Now</strong>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 h-2"></div>
      </div>
    </div>
  );
};

export default Heros;
