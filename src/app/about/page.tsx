import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section className="bg-white ">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center max-w-lg">
          <div className="mb-4">
            <Link href="/">
              <Image
                width={107}
                height={10}
                className="w-[107px] h-10 object-cover"
                alt=""
                src="/images/homepage/logo-transparent2e1551993152468-1@2x.png"
              />
            </Link>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-center text-gray-700">We’ll be back soon!</h3>
          <p className="text-sm text-center text-gray-300">
            Sorry for the inconvenience but we’re performing some maintenance at the moment. If you need to you can
            always{' '}
            <Link href="/" className="text-blue-600 hover:underline">
              Contact us{' '}
            </Link>
            , otherwise we’ll be back online shortly! — RILA
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
