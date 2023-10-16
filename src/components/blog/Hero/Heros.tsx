'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
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
        <div className="">
          <form onSubmit={submit} method="post" target="_blank">
            <h1 className="tracking-[0.03em] capitalize">
              <strong>Welcome to RILA&apos;S Blog</strong>
            </h1>

            <div className="mt-[15px] md:text-xl text-base tracking-[0.03em] leading-[30px] flex items-center ">
              Your destination for the latest trends, news, and consumer analyses
            </div>
            <div className="mt-[15px] rounded-[66px] flex flex-row justify-between py-1.5 pr-2.5 pl-6 text-lg border-[2px] border-solid border-white">
              <input
                required
                className="w-1/2 relative flex md:text-base text-sm font-light items-center shrink-0 outline-none bg-inherit placeholder:text-white "
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Enter Your Email"
              />
              <div className="relative h-[46px] flex place-content-center text-center md:text-xl text-xs max-sm:min-w-[132px]">
                <button
                  type="submit"
                  className="rounded-[47px] bg-red-100 flex flex-row py-2 px-6 items-center justify-center"
                >
                  <p className="relative text-white font-base">
                    {isLoading ? 'Submitting...' : 'Subscribe Now'}
                  </p>
                </button>
              </div>
            </div>

            <div className="m-3 flex justify-start items-center gap-[10px]">
              <div className="flex items-center">
                <input
                  required
                  type="checkbox"
                  name="checkbox"
                  id="radioButton"
                  className="outline-none h-4 w-4"
                />
                <label
                  htmlFor="radioButton1"
                  className="pl-3 md:text-sm text-xs font-medium italic "
                >
                  By checking this box, you agree to be contacted by RILA via email and receive
                  regular updates, in accordance with our Privacy Policy
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
