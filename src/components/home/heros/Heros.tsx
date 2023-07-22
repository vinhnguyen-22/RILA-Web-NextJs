import Image from 'next/image';
import Link from 'next/link';

const Heros = () => {
  return (
    <div className="container mt-[100px] mx-auto lg:px-2 xl:px-4">
      <div className="grid grid-cols-12 mb-20 lg:mb-[80px] md:mt-3 mt-32">
        <div className="col-span-12 md:col-span-7 lg:col-span-7">
          <div className="text-black mr-0 mb-0 md:mb-12  lg:pr-10 md:pr-12 xl:pr-12">
            <strong className="lg:text-[44px] md:text-3xl text-3xl mb-[20px] lg:leading-[60px] md:leading-[48px] leading-[40px] capitalize inline-block text-black">
              Turn Social Listening data into actionable insights
            </strong>
            <div className="lg:text-xl md:text-md font-medium text-sm lg:leading-[38px] md:leading-[28px] leading-[28px] capitalize inline-block pr-6">
              Professional and Research Services for Social Listening - Trusted by the World&apos;s Biggest Brands.
            </div>

            <Link
              href="/about"
              className="mt-[31px] rounded-full bg-red-200 w-[193px] h-[55px] flex flex-row py-5 px-6 box-border items-center justify-center text-white"
            >
              <strong className="relative lg:text-lg text-base capitalize">Let’s Talk</strong>
            </Link>
          </div>
        </div>

        <div
          className="relative h-[400px] col-span-12 md:col-span-5 lg:col-span-5 lg:-mt-8 flex justify-start lg:justify-center items-start lg:items-center
        "
        >
          <Image fill className="object-contain" src={'/images/homepage/image-banner.jpg'} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 mb-20">
        <div className="rounded-6xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  xl:mt-[80px]">
          <div className="rounded-6xl bg-navy-200 py-5">
            <div className="flex flex-col lg:px-20 xl:px-44 px-10 text-white items-center justify-start gap-[18px] text-center">
              <strong className="lg:text-2xl md:text-xl text-lg lg:leading-[56px] md:leading-[42px] leading-[30px] capitalize flex items-center justify-center mt-1 shrink-0">
                About RILA GLOBAL CONSULTING
              </strong>
              <div className="lg:text-xl md:text-lg text-sm lg:leading-[50px] md:leading-[42px] leading-[30px] font-semibold flex items-center shrink-0">
                <span className="w-full">
                  <p className="m-0">
                    <span className="capitalize">RILA GLOBAL CONSULTING </span>
                    is a boutique social listening agency located in New York City. We study consumers, brands, markets,
                    and trends, offering tailored research and insight to clients globally.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
