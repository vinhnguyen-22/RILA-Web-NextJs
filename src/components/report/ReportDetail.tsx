'use client';
import { Report } from '@/types/cms';
import React, { FC } from 'react';
import Contact from '../contact/Contact';
import BulletCheck from '@/icons/bullet';
import Link from 'next/link';

type ReportDetailProps = Report | any;
const ReportDetail: FC<ReportDetailProps> = ({ report }) => {
  return (
    <section className="">
      <div
        className="min-h-[460px] flex justify-center items-center bg-cover"
        style={{ backgroundImage: `url('${report.cover}')` }}
      >
        <h1 className="text-23xl text-white text-center">{report.title}</h1>
      </div>
      <div className="bg-black py-[79px]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col mb-[36px] gap-[15px] text-white ">
              <h3 className="capitalize font-semibold text-23xl">
                Get the full <span className="text-red-100">report</span>
              </h3>
              <div className="block w-3/4 h-[1px] bg-red-500"></div>
              <p className="text-base leading-7 before:content-[' '] before:h-[1px] after:">
                2020 will be remembered as the year of change with the first global pandemic to shut down the whole
                world. One of the key emerging industries that saw increased social media attention and usage since
                COVID-19, is neobanking. Using cutting edge data technology, in this report we explore:
              </p>

              <div className="block w-3/4 max-md:h-[1px] bg-red-500"></div>

              <ul className="max-w-md space-y-1 list-inside ">
                <li className="flex items-center leading-7 text-sm gap-[15px]">
                  <BulletCheck />
                  At least 10 characters
                </li>
                <li className="flex items-center leading-7 text-sm gap-[15px]">
                  <BulletCheck />
                  At least one lowercase character
                </li>
                <li className="flex items-center leading-7 text-sm gap-[15px]">
                  <BulletCheck />
                  At least one special character, e.g., ! @ # ?
                </li>
                <li className="flex items-center leading-7 text-sm gap-[15px]">
                  <BulletCheck />
                  At least 10 characters
                </li>
                <li className="flex items-center leading-7 text-sm gap-[15px]">
                  <BulletCheck />
                  At least one lowercase character
                </li>
                <li className="flex items-center leading-7 text-sm gap-[15px]">
                  <BulletCheck />
                  At least one special character, e.g., ! @ # ?
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[416px] rounded-lg bg-white overflow-hidden">
                <form className="bg-white shadow-md p-[20px]">
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Name:
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Email Address:
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Company
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="company"
                      type="text"
                    />
                  </div>
                  <div className="mb-6 flex justify-start items-center gap-[23px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Country:
                    </label>

                    <div className="inline-block relative w-64">
                      <select className="block appearance-none w-full border-b border-gray-500 hover:border-gray-500 px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline">
                        <option>Really long</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex justify-start items-center gap-[23px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Sign up to get newsletter:
                    </label>

                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                        <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-black">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                        <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-black">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-start items-center gap-[23px]">
                    <div className="flex items-center">
                      <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                      <label htmlFor="radioButton1" className="pl-3 text-base font-medium">
                        I’m agree to RILA’s
                        <Link className="text-blue-700 decoration-clone" href="/">
                          {' '}
                          updated{' '}
                        </Link>
                        and
                        <Link className="text-blue-700 decoration-clone" href="/">
                          {' '}
                          policies.
                        </Link>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-red-100 hover:bg-red-200 w-full text-white font-bold py-[8px] px-[25px] rounded-[10px] focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Get The Full Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default ReportDetail;
