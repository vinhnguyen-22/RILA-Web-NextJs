'use client';
import Heading from '@/components/common/Heading/Heading';
import AccordionItem from '@/components/contact/accordion/AccordionItem';
import { questionItems } from '@/mocks/data';
import { useState } from 'react';

export const metadata = {
  title: 'Contact',
  description: 'Contact Us',
};
const ContactPage = () => {
  const [open, setOpen] = useState<any>(false);

  const toggle = (index: any) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };

  return (
    <div className="mx-auto md:mt-[50px] mt-[120px]">
      <div className="flex flex-col mx-2">
        <Heading
          title="Contact RILA"
          subtitle="Contact RILA, a boutique social listening agency in NYC, to learn how we can help your business succeed."
        />
        <div className="absolute xl:bottom-[25%] bottom-[15%]  left-1/2 transform -translate-x-1/2  w-[227px] h-[227px] bg-[#FBC8CA] rounded-full"></div>
      </div>

      <div className="relative grid lg:grid-cols-2 grid-cols-1 mt-[135px] min-h-[649px] bg-cover bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.971729603424!2d-73.98776196122023!3d40.763268292846526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25857035fce99%3A0xdb1c3aa66cca2b4a!2sW%2051st%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1690806084729!5m2!1sen!2s"
          width="600"
          height="450"
          className="border-0 absolute w-full h-full"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="flex flex-col justify-center lg:items-end items-center md:mt-0 mt-[175px] z-10">
          <div className="lg:w-2/3 bg-white shadow-md px-[61px] py-[40px] ">
            <h3 className="text-23xl font-semibold capitalize text-start text-red-100">Get in Touch</h3>
            <form action="" className="flex flex-col gap-[10px]">
              <input
                type="text"
                className="placeholder:text-gray-700 focus:border-red-100 p-[10px] border-red-100 border-2 w-full rounded-md"
                placeholder="Name"
              />
              <input
                type="text"
                className="placeholder:text-gray-700 focus:border-red-100 p-[10px] border-red-100 border-2 w-full rounded-md"
                placeholder="Email"
              />
              <textarea
                rows={4}
                className="placeholder:text-gray-700 focus:border-red-100 p-[10px] border-red-100 border-2 w-full rounded-md"
                placeholder="Message"
              ></textarea>

              <button className="bg-red-100 px-[25px] py-[8px] text-white font-semibold rounded-51xl w-[40%]">
                Sent
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[50px] mb-[100px]">
        <div className="grid grid-cols-12 lg:gap-[50px] max-lg:gap-[14px]">
          <div className="col-span-5 max-lg:col-span-12 max-lg:flex max-lg:flex-row max-sm:flex-col md:gap-[50px]">
            <h3 className="block relative text-black text-[50px]  max-md:text-[30px] font-bold leading-tight tracking-wider">
              Frequently <br />
              <svg
                className="inline-block mr-3 max-md:w-[16px] max-md:h-[16px]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#EC1B24" />
              </svg>
              Asked Questions{' '}
              <span className="absolute max-md:-right-[25px] xl:right-[90px] right-[10px]  max-lg:-right-[30px] max-sm:right-[20px] max-md:bottom-[0px] -bottom-[18px] max-md:text-[60px] text-[100px] text-red-100">
                ?
              </span>
            </h3>
            <p className="text-gray-700 leading-7 text-xl mt-[13px] max-md:text-[14px]">
              These are some of the most commonly asked questions our clients ask us about social listening and our
              services. Ask us anything!
            </p>
          </div>
          <div className="col-span-7 max-lg:col-span-12">
            <div className="flex flex-col items-start justify-start border">
              {questionItems.map((data, index) => {
                return (
                  <>
                    <div className="h-[1px] w-full bg-darkgray px-2.5 "></div>
                    <div className="px-[15px]">
                      <AccordionItem
                        key={index}
                        open={index === open}
                        title={data.title}
                        desc={data.desc}
                        toggle={() => toggle(index)}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
