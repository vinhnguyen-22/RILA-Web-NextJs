import AboutImg from '@/icons/about-img';
import Image from 'next/image';
import React from 'react';

const FormSection = () => {
  return (
    <section className="relative" style={{ background: 'linear-gradient(180deg, #251B00 0%, #010D82 100%)' }}>
      <div className="absolute top-[90px] right-0 sm:block hidden">
        <Image src="/images/about-us/dot.svg" width={400} height={239} alt="" />
      </div>
      <div className="container py-[80px] mx-auto">
        <div className="grid md:grid-cols-2 grid-col-1 gap-[50px]">
          <div className="text-white flex flex-col gap-4">
            <h3 className="text-semibold text-3xl">Let&apos;s Start a Conversation!</h3>
            <p className="text-white">
              Discover how our advanced social listening solutions can revolutionize your brand&apos;s online presence,
              drive impactful strategies, and unlock invaluable consumer insights.
            </p>
            <form action="" className="flex flex-col gap-[10px]">
              <input
                type="text"
                className="placeholder:text-gray-700 outline-none focus:border-red-100 p-[10px] w-full rounded-md"
                placeholder="Enter Your Email"
              />
              <textarea
                rows={6}
                className="placeholder:text-gray-700 outline-none focus:border-red-100 p-[10px] w-full rounded-md"
                placeholder="How can we help?"
              ></textarea>

              <button className="bg-red-100 px-[10px] py-[8px] text-white font-semibold rounded-51xl w-[40%]">
                Contact RILA
              </button>
            </form>
          </div>
          <div className="relative flex justify-center items-center h-[500px]">
            <div className="sm:absolute block top-0 right-0 sm:w-[413px] sm:h-[413px] w-[320px] h-[320px]">
              <AboutImg />
            </div>

            <div className="absolute bottom-0 left-0 rounded-md bg-white px-[29px] py-[21px] w-2/3 ">
              <p className="text-black">
                Thank you for contacting <strong>RILA GLOBAL CONSULTING</strong>. How may I help you?
              </p>
              <div className="absolute sm:-top-1/2 sm:-right-[10%] -top-[40%] -right-[35px] px-[17px] py-[26px] bg-red-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="29" viewBox="0 0 48 29" fill="none">
                  <path
                    d="M44.6667 14.4738H36.3333L30.0833 25.9475L17.5833 3L11.3333 14.4738H3"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
