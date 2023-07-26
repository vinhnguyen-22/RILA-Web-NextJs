import Image from 'next/image';

const Heros = () => {
  return (
    <div className="relative h-[528px] text-21xl text-white -mt-[40px]">
      <Image className="object-cover" alt="" fill src={'/images/blog/rectangle-38.png'} />
      <div className="relative flex h-[100%] lg:grid grid-cols-3 gap-1 max-md:flex flex-col justify-center items-center">
        <div className="lg:col-span-1 col-span-3">
          <div className="lg:absolute  top-[160px] left-[95px] h-52">
            <h1 className="tracking-[0.03em] capitalize">
              <strong>Welcome to RILA&apos;S Blog</strong>
            </h1>

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

        <div className="lg:col-span-2 col-span-3"></div>
      </div>
    </div>
  );
};

export default Heros;
