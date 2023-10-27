'use client';
import ArrowPoint from '@/icons/arrow-point';
import BulletCheck from '@/icons/bullet';
import { Report } from '@/types/cms';
import Link from 'next/link';
import { FC, FormEvent, useState } from 'react';
import Contact from '../contact/Contact';
import { Toaster, toast } from 'sonner';

interface Props {
  report: Report | null;
}

const ReportDetail: FC<Props> = ({ report }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    newsletter: true,
    report_name: report?.title,
    report_link: report?.PDF,
  });

  const summaryItems = report?.summary.split('•');
  const summary = summaryItems?.slice(0, 1);
  const bulletItems = summaryItems?.slice(1);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // console.log(formData);
      const response = await fetch(`/api/report`, {
        body: JSON.stringify(formData),
        method: 'POST',
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error('Failed to submit the data. Please try again.');
      } else {
        setIsLoading(false);
        toast.success('Your report has arrived!');
        setFormData({
          name: '',
          email: '',
          company: '',
          newsletter: true,
          report_name: report?.title,
          report_link: report?.PDF,
        });
      }
      const data = await response.json();
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        // ✅ TypeScript knows err is Error
        console.error(err.message);
        setError(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };

  return (
    <section className="">
      <Toaster position="bottom-right" />
      <div
        className="min-h-[460px] flex justify-center items-center bg-cover"
        style={{ backgroundImage: `url('${report?.cover}')` }}
      >
        <h1 className="text-23xl text-white text-center">{report?.title}</h1>
      </div>
      <div className="bg-black py-[79px]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
            <div className="relative flex flex-col mb-[36px] gap-[12px] text-white ">
              <h3 className="capitalize font-semibold text-23xl">
                Get the full <span className="text-red-100">report</span>
              </h3>
              <div className="block w-3/4 h-[1px] bg-red-500"></div>
              <p className="text-white text-base leading-7 before:content-[' '] before:h-[1px] after:">
                {summary}
              </p>

              <div className="block w-3/4 max-md:h-[1px] bg-red-500"></div>

              <ul className="max-w-md space-y-1 list-inside ">
                {bulletItems?.map((key) => (
                  <li key={key} className="flex items-center gap-[15px]">
                    <div>
                      <BulletCheck />
                    </div>
                    <p className="leading-7 text-sm text-white">{key}</p>
                  </li>
                ))}
              </ul>

              <div className="lg:block hidden absolute bottom-[8%] -right-[10%] rotate-0 text-white font-gochi text-base font-normal leading-7">
                <div className="absolute -top-[30px] -left-[50px]">
                  <span className="inline-block -rotate-90">✏️</span> fill this out
                </div>
                <ArrowPoint position="right" />
              </div>

              {/* <div className="max-sm:block hidden absolute bottom-[0%] right-[10%] rotate-0 text-white font-gochi text-base font-normal leading-7">
                <div className="absolute -top-[30px] -left-[50px]">
                  <span className="inline-block -rotate-90">✏️</span> fill this out
                </div>
                <ArrowPoint position="down" />
              </div> */}
            </div>

            <div className="flex justify-center items-center">
              <div className="w-[416px] rounded-lg bg-white overflow-hidden">
                <form
                  onSubmit={submit}
                  method="post"
                  target="_blank"
                  className="bg-white shadow-md p-[20px]"
                >
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Name:
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      onChange={(event) => {
                        setFormData({ ...formData, name: event.target.value });
                      }}
                      value={formData.name}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Email Address:
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Company
                    </label>
                    <input
                      className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(event) => {
                        setFormData({ ...formData, company: event.target.value });
                      }}
                    />
                  </div>

                  <div className="mb-6 flex justify-start items-center gap-[23px]">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Sign up to get newsletter:
                    </label>

                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton1"
                          className="w-4 h-4  bg-black border-black "
                          checked={formData.newsletter === true}
                          onChange={() => {
                            setFormData({ ...formData, newsletter: true });
                          }}
                        />
                        <label
                          htmlFor="radioButton1"
                          className="pl-3 text-sm font-medium text-black"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="radio1"
                          id="radioButton2"
                          className="w-4 h-4  bg-black border-black "
                          checked={formData.newsletter === false}
                          onChange={() => {
                            setFormData({ ...formData, newsletter: false });
                          }}
                        />
                        <label
                          htmlFor="radioButton2"
                          className="pl-3 text-sm font-medium text-black"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-start items-center gap-[10px]">
                    <div className="flex items-center">
                      <input
                        required
                        type="checkbox"
                        name="radio2"
                        id="radioButton3"
                        className="outline-none h-5 w-5 "
                      />
                      <label htmlFor="radioButton1" className="pl-3 text-sm font-medium italic ">
                        By submitting this form you agree to RILA’s
                        <Link className="text-blue-700 decoration-clone" href="/cookie-policy">
                          {' '}
                          Privacy Policy{' '}
                        </Link>
                        and
                        <Link
                          className="text-blue-700 decoration-clone"
                          href="/terms-and-conditions"
                        >
                          {' '}
                          T&C’s{' '}
                        </Link>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-red-100 hover:bg-red-200 w-full text-white font-bold py-[8px] px-[25px] rounded-[10px] focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      {isLoading ? 'Loading...' : 'Get The Full Report'}
                    </button>
                  </div>
                  {error && <div className="mt-3 text-red-300 md:text-sm text-xs">{error}</div>}
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
