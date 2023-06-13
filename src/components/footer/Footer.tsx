import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:gap-5 flex flex-col-reverse md:flex-row">
          <div className="mb-6 md:mb-0">
            <Link href="/about" className="flex items-center">
              <Image
                width={107}
                height={10}
                className="w-[107px] h-10 object-cover"
                alt=""
                src="/images/homepage/logo-transparent2e1551993152468-1@2x.png"
              />
            </Link>
            <div className="text-sm my-[23px] leading-[20px] inline-block">New York, NY</div>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <div className="bg-white w-[257px] flex flex-row items-center justify-between">
                <a target="_blank" href="https://www.instagram.com/rilaglobal/">
                  <Image
                    width={18}
                    height={18}
                    className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
                    alt=""
                    src="/images/homepage/riinstagramfill.svg"
                  />
                </a>

                <a target="_blank" href={'https://twitter.com/rilaglobal'}>
                  <Image
                    width={18}
                    height={18}
                    className="relative w-[28px] h-7 overflow-hidden shrink-0"
                    alt=""
                    src="/images/homepage/bitwitter.svg"
                  />
                </a>

                <Link
                  href={'https://www.tiktok.com/@rila_global_consulting'}
                  className="relative w-[28px] h-[28px] overflow-hidden shrink-0"
                >
                  <div className="absolute top-[0px] left-[7px] w-7 h-7 overflow-hidden">
                    <div className="absolute top-[4px] left-[0px] bg-white w-[21px] h-6 flex flex-row items-start justify-start">
                      <Image
                        width={18}
                        height={18}
                        className="relative w-[18px] h-5"
                        alt=""
                        src="/images/homepage/vector2.svg"
                      />
                    </div>
                  </div>
                </Link>

                <a target="_blank" href={'https://www.linkedin.com/company/rila-global-consulting/'}>
                  <Image
                    width={18}
                    height={18}
                    className="relative w-[22px] h-[22px]"
                    alt=""
                    src="/images/homepage/-icon-linkedin.svg"
                  />
                </a>
                <a target="_blank" href={'https://www.youtube.com/@rilaglobal/videos'}>
                  <Image
                    width={18}
                    height={18}
                    className="relative w-8 h-8 object-cover"
                    alt=""
                    src="/images/homepage/image-5@2x.png"
                  />
                </a>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-[31px] rounded-51xl bg-red-200 flex flex-row py-3 px-1 box-border items-center justify-center text-white"
            >
              <strong className="text-sm relative leading-[20px] capitalize">Contact Us</strong>
            </Link>
          </div>
          <div className="text-sm grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-200 capitalize ">Company</h2>
              <ul className="text-lightslategray-200  font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    Newsroom
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-200 capitalize ">Resources</h2>
              <ul className="text-lightslategray-200  font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline ">
                    Our Service
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    Our Work
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    Our Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-200 capitalize ">Legal</h2>
              <ul className="text-lightslategray-200  font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
