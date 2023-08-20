'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CaseStudyTabsData } from '@/mocks/data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Collapse } from 'react-collapse';

const TabBanner = () => {
  const media = useMediaQuery('(max-width:600px)');
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab: any = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  return (
    <section>
      <div
        className="md:h-[471px] max-sm:py-[50px]"
        style={{ backgroundImage: `url('./images/case-study/banner.png')` }}
      >
        <div className="container mx-auto  grid lg:grid-cols-2 grid-cols-1 h-full">
          <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-semibold text-white leading-10">
              <div className="flex justify-between items-center  gap-[17px]">
                <div className="bg-white px-[13px] py-[20px] rounded-md">
                  <Image
                    src="/images/case-study/evelom.png"
                    width={127.5}
                    height={33.32}
                    alt="evelom-small"
                  />
                </div>
                <span className="">X</span>
                <div className="bg-white px-[13px] py-[20px] rounded-md">
                  <Image
                    src="/images/homepage/logo-transparent.png"
                    width={104}
                    height={40}
                    alt="evelom-small"
                  />
                </div>
              </div>
            </div>
            <h3 className="mt-[26px] max-sm:text-center text-2xl text-white font-semibold leading-10">
              Revolutionizing Luxury Skincare Marketing
            </h3>
          </div>

          {!media ? (
            <div className="md:flex hidden justify-center items-start flex-col">
              <div className="relative">
                <div className={'flex space-x-3 font-semibold text-xl'}>
                  {CaseStudyTabsData.map((tab, idx) => {
                    return (
                      <button
                        key={idx}
                        ref={(el) => (tabsRef.current[idx] = el)}
                        className={`pt-2 pb-3 ${
                          idx == activeTabIndex ? 'text-white' : 'text-ghostwhite opacity-50'
                        } `}
                        onClick={() => setActiveTabIndex(idx)}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
                <span
                  className="absolute bottom-0 block h-1 bg-white transition-all duration-300"
                  style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                />
              </div>
              <div className="py-4 text-white">
                <p className="text-white">{CaseStudyTabsData[activeTabIndex].content}</p>

                <Link
                  className="block mt-[15px] font-semibold"
                  href={CaseStudyTabsData[activeTabIndex].link}
                >
                  Read more
                  <svg
                    className="ml-[22px] inline-block"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7071 8.44282C19.0976 8.0523 19.0976 7.41914 18.7071 7.02861L12.3431 0.66465C11.9526 0.274126 11.3195 0.274126 10.9289 0.66465C10.5384 1.05517 10.5384 1.68834 10.9289 2.07886L16.5858 7.73572L10.9289 13.3926C10.5384 13.7831 10.5384 14.4163 10.9289 14.8068C11.3195 15.1973 11.9526 15.1973 12.3431 14.8068L18.7071 8.44282ZM0 8.73572H18V6.73572H0V8.73572Z"
                      fill="#fff"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <div className="md:hidden flex flex-col items-start">
              <div className="relative">
                <div className={'flex flex-col items-start font-semibold text-xl'}>
                  {CaseStudyTabsData.map((tab, idx) => {
                    return (
                      <>
                        <button
                          key={idx}
                          ref={(el) => (tabsRef.current[idx] = el)}
                          className={`py-1 my-1 ${
                            idx == activeTabIndex
                              ? 'text-white border-b-4 border-white'
                              : 'text-ghostwhite opacity-50'
                          } `}
                          onClick={() => setActiveTabIndex(idx)}
                        >
                          {tab.label}
                        </button>
                        <Collapse isOpened={idx == activeTabIndex}>
                          <div className="  font-normal">
                            <p className="text-white">{tab.content}</p>

                            <Link
                              className={
                                'absolute -bottom-[30px] mt-[15px] font-semibold' +
                                (idx == activeTabIndex ? 'block' : 'hidden')
                              }
                              href={tab.link}
                            >
                              Read more
                              <svg
                                className="ml-[22px] inline-block"
                                width="19"
                                height="16"
                                viewBox="0 0 19 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.7071 8.44282C19.0976 8.0523 19.0976 7.41914 18.7071 7.02861L12.3431 0.66465C11.9526 0.274126 11.3195 0.274126 10.9289 0.66465C10.5384 1.05517 10.5384 1.68834 10.9289 2.07886L16.5858 7.73572L10.9289 13.3926C10.5384 13.7831 10.5384 14.4163 10.9289 14.8068C11.3195 15.1973 11.9526 15.1973 12.3431 14.8068L18.7071 8.44282ZM0 8.73572H18V6.73572H0V8.73572Z"
                                  fill="#fff"
                                />
                              </svg>
                            </Link>
                          </div>
                        </Collapse>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabBanner;
