'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Toaster, toast } from 'sonner';

const Heros = () => {
  const media = useMediaQuery('(max-width: 600px)');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/newsletter`, {
        body: JSON.stringify({ email: email }),
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }
      const data = await response.json();
      console.log('data', data.status);
      if (data.status == 201) {
        toast.success("You've already subscribed");
      } else if (data.status == 200) {
        setEmail('');
        toast.success('Submitted successfully!');
      }
    } catch (err) {
      if (err instanceof Error) {
        // ✅ TypeScript knows err is Error
        console.error(err.message);
        setError(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative h-[620px] text-21xl text-white -mt-[40px] bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `url('${
          media ? '/images/blog/hero.png' : '/images/blog/rectangle-38.png'
        }`,
      }}
    >
      <div className="h-full p-10 flex flex-col justify-center">
        <Toaster position="bottom-right" />
        <div className="md:mt-0 mt-20 lg:pl-20 pl-0">
          <form onSubmit={submit} method="post" target="_blank">
            <p className="tracking-[0.03em] text-white md:text-4xl text-3xl capitalize">
              <strong>Welcome to RILA&apos;S Blog</strong>
            </p>

            <div className="mt-[15px] md:text-xl text-base tracking-[0.03em] leading-[30px] flex items-center ">
              Your destination for the latest trends, news, and consumer analyses
            </div>
            <div className="my-6 flex">
              <div className="flex lg:w-2/3 w-full border-[1.5px] rounded-[66px] border-solid border-white  py-1.5 pr-1.5 pl-6 text-lg">
                <div className='flex w-full'>
                <input
                  required
                  className="w-full pr-2 flex md:text-base text-sm font-light items-center shrink-0 outline-none bg-inherit placeholder:text-white "
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="Enter Your Email"
                />
                </div>
                <div className="relative h-[46px] flex">
                  <button
                    type="submit"
                    className="rounded-[42px] bg-red-100 flex py-2 px-6 items-center justify-center"
                  >
                    <p className="relative text-white text-base">
                      {isLoading ? 'Submitting...' : 'Subscribe'}
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 m-3 flex justify-start items-center gap-[10px]">
              <div className="flex items-center">
                <input
                  required
                  type="checkbox"
                  name="checkbox"
                  id="radioButton"
                  className="outline-none h-4 w-4"
                />
                <label htmlFor="radioButton1" className="pl-3 md:text-sm text-xs font-medium">
                  By checking this box, you agree to be contacted by RILA via email and receive
                  regular updates, in accordance with our{' '}
                  <Link className="underline" href="/cookie-policy">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link className="underline" href="/terms-and-conditions">
                    T&C’s
                  </Link>
                </label>
              </div>
            </div>
            {error && <div className="pl-3 text-red-300 md:text-sm text-xs">{error}</div>}
          </form>
        </div>

        <div className="lg:col-span-2 col-span-3"></div>
      </div>
    </div>
  );
};

export default Heros;
