import Heading from '@/components/common/Heading/Heading';
import React from 'react';
export const metadata = {
  title: 'Cookie and policy',
  description: 'Cookie and policy',
};
const CookiePolicy = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col justify-center items-center my-[20px]">
        <Heading title="COOKIE POLICY" />

        <div className="max-w-[841px] text-center text-lg tracking-[0.03em] leading-[30px] text-gray-500 flex items-center justify-center">
          This Cookie Policy explains how RILA GLOBAL CONSULTING uses cookies when you visit our Sites.
        </div>
      </div>
      <div className="text-center">
        (
        <a className="text-indigo-600" href="www.rilaglobal.com">
          www.rilaglobal.com
        </a>{' '}
        or{' '}
        <a className="text-indigo-600" href="www.rilaglobalconsulting.com">
          www.rilaglobalconsulting.com
        </a>
        )
      </div>

      <h3 className="text-xl font-semibold my-4">What Are Cookies?</h3>
      <p className="text-justify">
        A cookie is a small file that contains letters and numbers that are stored on your internet browser (on your
        computer, mobile device, or other devices used for browsing).
      </p>
      <h3 className="text-xl font-semibold my-4">How Does rilaglobal.com Use Cookies?</h3>
      <p className="text-justify">
        Our sites use a number of cookies to distinguish you from others who have visited our websites. Cookies help us
        ensure a good user experience, allows us to improve our websites, and personalize your experience.
      </p>
      <p className="text-justify">Cookies used by RILA GLOBAL CONSULTING LLC via our websites:</p>
      <strong className="font-semibold">Essential and Non-essential Cookies</strong>
      <p className="text-justify">
        Essential cookies or also called “strictly necessary cookies” are cookies that are essential for our websites to
        function correctly. If such cookies are rejected by You (the user), parts of the site won’t be usable. These
        cookies are necessary to provide an online service on a website and are solely leveraged to carry out or
        facilitate the transmission of communications over our websites.
      </p>
      <p className="text-justify">Device Identifiers</p>
      <p className="text-justify">These cookies are used to analyze and improve the performance of our Services.</p>
      <p className="text-justify">Analytical | Performance Cookies</p>
      <p className="text-justify">
        We use analytics cookies or also called “performance” cookies to track website visitors and the respective user
        behavior – this is referred to as website analytics. We leverage Google Analytics for this. These cookies help
        us understand information such as the number of website visitors, the number of sessions initiated by visitors,
        and how many times a specific web page of ours was visited, among others. This data is then used to improve how
        our websites work and to improve the user experience.
      </p>
      <p className="text-justify">
        To opt-out of Google Analytics, please visit{' '}
        <a className="text-indigo-700" href="https://tools.google.com/dlpage/gaoptout">
          &nbsp;tools.google.com/dlpage/gaoptout
        </a>{' '}
        and follow the instructions.
      </p>
      <strong className="font-semibold">Functionality Cookies</strong>
      <p className="text-justify">
        These are used to recognize you when you return to our website. This enables us to personalize our content for
        you, greet you by name, and remember your preferences (for example, your choice of language or region).
      </p>
      <h3 className="text-xl font-semibold my-4">How Can I Manage My Cookies?</h3>
      <p className="text-justify">
        If you want to opt-out of our cookies, you can select “reject all cookies” the cookies at the initial (first
        time) visit to our websites or you can do that by going to your browser settings and removing our cookies. If
        you choose to do this, please be aware our websites may no longer function as intended.
      </p>
      <strong className="font-semibold">
        For further information about cookies and how to remove cookies, please visit:
      </strong>
      <p className="text-justify">
        <a className="text-indigo-700" href="https://allaboutcookies.org/how-to-manage-cookies">
          allaboutcookies.org/how-to-manage-cookies
        </a>
      </p>
      <p className="text-justify">
        <a className="text-indigo-700" href="https://us.norton.com/blog/how-to/how-to-clear-cookies">
          us.norton.com/blog/how-to/how-to-clear-cookies
        </a>
      </p>
      <h3 className="text-xl font-semibold my-4">Can I Disable My Cookies and Turn Them Off?</h3>
      <p className="text-justify">
        Yes, you can turn your cookies off and disable them! All browsers allow users to disable cookies and turn them
        off. You can do that by checking your browser and device cookie settings and by choosing the cookies that you
        want to disable or turn off. For more information on how to disable cookies, please visit:
      </p>
      <p className="text-justify">
        <a className="text-indigo-700" href="https://ico.org.uk/for-the-public/online/cookies/">
          ico.org.uk/for-the-public/online/cookies/
        </a>
      </p>
      <p className="text-justify">For more information, please contact hello@rilaglobal.com</p>
    </div>
  );
};

export default CookiePolicy;
