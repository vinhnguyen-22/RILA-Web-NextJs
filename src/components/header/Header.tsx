'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full fixed z-10 bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:block">
            <Link href="/">
              <Image
                width={90}
                height={9}
                className="w-[90px] h-9"
                alt="Logo"
                src="/images/homepage/logo-transparent2e1551993152468-1@2x.png"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="bg-black p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-base font-semibold leading-[32px] text-gray-300 hover:text-red-300 duration-200">
                <Link href="/about">Home</Link>
              </li>
              <li className="text-base font-semibold leading-[32px] text-gray-300 hover:text-red-300 duration-200">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-base font-semibold leading-[32px] text-gray-300 hover:text-red-300 duration-200">
                <Link href="/about">Services</Link>
              </li>
              <li className="text-base font-semibold leading-[32px] text-gray-300 hover:text-red-300 duration-200">
                <Link href="/about">Resources</Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hidden md:flex lg:flex rounded-51xl bg-tomato-100 w-36 h-[40px] flex-row box-border items-center justify-center text-white hover:bg-red-200"
                >
                  <span className="text-center text-sm relative font-semibold leading-[20px] capitalize inline-block w-[99px] shrink-0">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 md:hidden">
              <Link
                href="/about"
                className="rounded-51xl bg-tomato-100 w-[100%] h-[40px] flex flex-row box-border items-center justify-center text-white hover:bg-red-200"
              >
                <span className="text-center text-sm relative font-semibold leading-[20px] capitalize inline-block w-[99px] shrink-0">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
