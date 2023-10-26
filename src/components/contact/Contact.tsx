'use client';
import { questionItems } from '@/mocks/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AccordionItem from './accordion/AccordionItem';

const Contact = () => {
  const [open, setOpen] = useState<any>(false);

  const toggle = (index: any) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };

  return (
    <div className="container mx-auto text-5xl">
      <div className="my-24 mx-0">
        <section className="mb-32">
          <div className="grid grid-cols-12">
            <div className="col-span-11">
              <div className="flex flex-col items-start justify-start ">
                {questionItems.map((data, index) => {
                  return (
                    <div key={index}>
                      <div className="h-[1px] w-full bg-darkgray px-2.5 "></div>
                      <AccordionItem
                        key={index}
                        open={index === open}
                        title={data.title}
                        desc={data.desc}
                        toggle={() => toggle(index)}
                      />
                    </div>
                  );
                })}
                <div className="h-[0.5px] w-full bg-darkgray px-2.5 "></div>
              </div>
            </div>
            {/* <div className="col-span-12 md:col-span-5 lg:col-span-5">
              <div className="mb-12  shrink-0 grow-0 basis-auto md:mb-0  md:px-3 lg:px-6">
                <div className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-6">
                  <div className="flex flex-col items-start justify-start gap-[42px] text-9xl">
                    <div className="flex flex-col items-center justify-center gap-[32px]">
                      <div className="flex flex-col items-start justify-start gap-[16px]">
                        <div className="font-semibold lg:text-2xl md:text-2xl text-lg mt-5 relative text-black tracking-[0.2px] leading-[52px] capitalize inline-block ">
                          How can We help you?
                        </div>
                        <div className="relative md:text-lg sm:text-base text-base leading-[36px] text-gray-200 inline-block opacity-[0.75] mix-blend-normal">
                          Contact a member of our team now to discuss your social listening needs.
                        </div>
                      </div>
                      <div className="w-full flex lg:flex-row flex-col  items-center justify-center gap-[8px] text-base text-darkgray">
                        <div className="w-full">
                          <input
                            className="w-full md:text-base text-sm relative rounded-[37px] outline-none placeholder:italic placeholder:text-lightslategray-200 text-black capitalize rounded-18xl bg-gray-100 flex flex-row py-5 px-[18px] box-border items-center justify-start "
                            placeholder="Enter your Email"
                          />
                        </div>
                        <Link
                          href={'/about-us'}
                          className="w-full  lg:w-[60%] md:w-initial rounded-51xl mt-[10px] lg:m-0 bg-tomato-100 h-[62px] flex flex-row py-5 px-6 box-border items-center justify-center text-white"
                        >
                          <p className="text-white relative leading-[20px] capitalize inline-block md:text-base text-sm font-bold shrink-0">
                            Get In Touch
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="relative h-6 text-xl text-tomato-100">
                      <Link href="/contact">
                        <div className=" [text-decoration:underline] leading-[24px] capitalize inline-block ">
                          more FAQ
                        </div>
                      </Link>

                      <Image
                        width={54}
                        height={12}
                        className="absolute h-[54.44%] top-[25%] right-[0%] bottom-[20.56%] left-[87.55%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/images/homepage/vector.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
