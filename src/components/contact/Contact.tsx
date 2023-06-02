'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import AccordionItem from './accordion/AccordionItem';
import Link from 'next/link';

const questionItems = [
  {
    title: 'Do I need to have a social listening tool to get started with RILA ?',
    desc: 'Do I need to have a social listening tool to get started with RILA ?',
  },

  {
    title: 'Can RILA help me choose the right in-house social listening vendor ?',
    desc: 'Can RILA help me choose the right in-house social listening vendor ?',
  },
  {
    title: 'How fast can RILA deliver a social listening report ?',
    desc: 'How fast can RILA deliver a social listening report ?',
  },
];

const Contact = () => {
  const [open, setOpen] = useState<any>(false);

  const toggle = (index: any) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };

  return (
    <div className="container mx-auto text-5xl ">
      <div className="rounded-[56px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] ">
        <div className="rounded-[56px] overflow-hidden bg-orange-200 px-[50px] py-[50px]">
          <div className="text-red-400 grid grid-cols-12">
            <div className="sm:col-span-12 md:col-span-8">
              <h4 className="text-[48px] leading-[63px] capitalize inline-block text-white font-semibold mb-[38px] ">
                start your Social Listening journey with RILA now
              </h4>

              <div className="rounded-51xl bg-gray-600 w-[223.3px] flex flex-row py-4 px-12 box-border items-start justify-start">
                <strong className="relative capitalize">Start Now</strong>
              </div>
            </div>

            <div className="sm:col-span-12 md:col-span-4 relative">
              <Image
                width={276}
                height={269}
                className="absolute md:right-0 lg:right-0"
                alt=""
                src="/images/homepage/group-19053.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="grid grid-cols-12">
            <div className="sm:col-span-12 md:col-span-8 lg:col-span-8">
              <div className="flex flex-col items-start justify-start ">
                {questionItems.map((data, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      open={index === open}
                      title={data.title}
                      desc={data.desc}
                      toggle={() => toggle(index)}
                    />
                  );
                })}
                <div className="h-[1px] w-full bg-black"></div>
              </div>
            </div>
            <div className="sm:col-span-12 md:col-span-4 lg:col-span-4">
              <div className="mb-12  shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6">
                <div className="w-full shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:px-6">
                  <div className="flex flex-col items-start justify-start gap-[42px] text-9xl">
                    <div className="flex flex-col items-start justify-start gap-[32px]">
                      <div className="flex flex-col items-start justify-start gap-[16px]">
                        <div className="relative text-black tracking-[0.2px] leading-[52px] capitalize inline-block ">
                          How can We help you?
                        </div>
                        <div className="relative text-xl leading-[36px] text-gray-500 inline-block opacity-[0.75] mix-blend-normal">
                          Contact a member of our team now to discuss your social listening needs.
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[8px] text-base text-darkgray">
                        <div className="">
                          <input
                            className="relative 
                            rounded-[37px]
                            placeholder:italic placeholder:text-slate-400
                            capitalize rounded-18xl bg-gray-100 flex flex-row py-5 px-[18px] box-border items-center justify-start "
                            placeholder="Enter your Email"
                          />
                        </div>
                        <Link
                          href={'/about'}
                          className="rounded-51xl bg-tomato-100 w-36 h-[62px] flex flex-row py-5 px-6 box-border items-center justify-center text-white"
                        >
                          <strong className="relative leading-[20px] capitalize inline-block w-[77px] font-bold shrink-0">
                            Let’s Talk
                          </strong>
                        </Link>
                      </div>
                    </div>
                    <div className="relative w-[119.93px] h-6 text-xl text-tomato-100">
                      <div className=" [text-decoration:underline] leading-[24px] capitalize inline-block w-[105px]">
                        more FAQ
                      </div>
                      <Image
                        width={54}
                        height={12}
                        className="absolute h-[54.44%] w-[12.45%] top-[25%] right-[0%] bottom-[20.56%] left-[87.55%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/images/homepage/vector.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
