'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import AccordionItem from './accordion/AccordionItem';
import Link from 'next/link';

const questionItems = [
  {
    title: 'Do I need to have a social listening tool to get started with RILA ?',
    desc: 'No need to worry about it! RILA offers various packages that account for such cases. Reach out to us to find out more how we can help you.',
  },

  {
    title: 'Can RILA help me choose the right in-house social listening vendor ?',
    desc: 'Absolutely! RILA will work with you to identify your business objectives for social listening, understand what metrics you should track, and how  to use the data to inform your marketing and business strategies.',
  },
  {
    title: 'How fast can RILA deliver a social listening report ? ',
    desc: 'We strive to work around client timelines and urgent requests. If you have an urgent request, please reach out to us immediately so we can help you deliver.',
  },
];

const Contact = () => {
  const [open, setOpen] = useState<any>(false);

  const toggle = (index: any) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };

  return (
    <div className="container mx-auto text-5xl">
      <div className="rounded-[56px] shado0,_0,_0,_0.25)] ">
        <div className="rounded-[56px] overflow-hidden bg-orange-200 md:px-[50px] md:py-[30px] px-10 py-8">
          <div className="text-red-400 grid grid-cols-12">
            <div className="sm:col-span-9 col-span-12 flex md:inline-block flex-col md:mt-3">
              <h4 className="lg:text-3xl md:text-xl text-lg leading-[24px] capitalize md:inline-block text-white font-semibold mb-[38px] ">
                Start your Social Listening journey with RILA now
              </h4>
              <Link
                href="/about"
                className="rounded-51xl w-[200px] max-w-full bg-gray-600 flex flex-row md:py-4 py-2 box-border items-center justify-center"
              >
                <strong className="relative lg:text-lg md:text-base text-sm capitalize">Start Now</strong>
              </Link>
            </div>

            <div className="sm:flex hidden sm:col-span-3 relative justify-end">
              <Image
                width={150}
                height={150}
                className="self-center md:right-0 lg:right-0"
                alt=""
                src="/images/homepage/group-19053.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-24 mx-0 md:px-6">
        <section className="mb-32">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 lg:col-span-7">
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
                <div className="h-[0.5px] w-full bg-darkgray px-2.5 "></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 lg:col-span-5">
              <div className="mb-12  shrink-0 grow-0 basis-auto md:mb-0  md:px-3 lg:px-6">
                <div className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:px-6">
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
                            className="relative rounded-[37px] outline-none placeholder:italic placeholder:text-lightslategray-200 text-black capitalize rounded-18xl bg-gray-100 flex flex-row py-5 px-[18px] box-border items-center justify-start "
                            placeholder="Enter your Email"
                          />
                        </div>
                        <Link
                          href={'/about'}
                          className="rounded-51xl bg-tomato-100 h-[62px] flex flex-row py-5 px-6 box-border items-center justify-center text-white"
                        >
                          <strong className="relative leading-[20px] capitalize inline-block  font-bold shrink-0">
                            Get In Touch
                          </strong>
                        </Link>
                      </div>
                    </div>
                    <div className="relative h-6 text-xl text-tomato-100">
                      <div className=" [text-decoration:underline] leading-[24px] capitalize inline-block ">
                        more FAQ
                      </div>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
