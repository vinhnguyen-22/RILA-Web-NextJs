import Hero from '@/components/about/hero';
import Heading from '@/components/common/Heading/Heading';
import Contact from '@/components/contact/Contact';
import AboutImg from '@/icons/about-img';
import Polygon from '@/icons/polygon';
import { awardImages } from '@/mocks/data';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    <div className="mt-[40px]">
      <Hero />
      <section className="section mx-[95px] ">
        <div className="grid grid-cols-12 h-[527px] gap-[60px]">
          <div className="relative max-sm:hidden col-span-5 h-full flex-col justify-center items-center">
            <div className="relative">
              <div className="absolute top-0 right-0 rounded-md bg-yellow-200 opacity-50 w-[177.5px] h-[129.248px]"></div>
              <div className="absolute bottom-0 right-0">
                <Polygon />
              </div>
              <div className="absolute top-0 right-0 rounded-md bg-yellow-200 opacity-50 w-[177.5px] h-[129.248px]"></div>
              <div className="relative h-full">
                <Image src="/images/about-us/ellipse-6.png" className="mx-auto" height={420} width={420} alt="" />
              </div>
            </div>
          </div>

          <div className="col-span-7 h-full flex flex-col justify-center gap-[15px]">
            <h3 className="text-4xl font-semibold spacing-[1.92px]">Our Story</h3>
            <p className="text-xl leading-7 text-start">
              RILA GLOBAL CONSULTING is an award-winning social listening consultancy, providing consumer research,
              social media strategy, and social listening software implementation{' '}
            </p>
            <p className="text-xl leading-7 text-start">
              Since 2019, RILA has partnered with some of the world’s largest brands. Fortune 500 clients choose RILA
              because of our values and the quality of our work. All RILA projects are fully executed by veteran experts
              in the field - no outsourcing, no cutting corners. But don’t take it from us – we have a ton of Fortune
              500 references upon request.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[100px] container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Heading
            title="Introducing Our Expert Team"
            subtitle="The Brilliant Minds Behind Data Analysis in Social Listening"
          />
          <div className="grid grid-cols-3">
            <div className="flex justify-center items-center">
              <Image src="/images/about-us/rectangle-17.png" alt="" width={401} height={404} />
            </div>
            <div className="flex justify-center items-center"></div>
            <div className="flex justify-center items-center"></div>
          </div>
        </div>
      </section>

      <section className="mt-[50px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Heading title="In The News" />
          <div className="max-w-[550px] text-center text-xl tracking-[0.03em] leading-[30px] text-gray-500 flex items-center justify-center">
            Our Insights Spotlighted by Top Outlets Worldwide. Click on the link to read the article.
          </div>

          <div className="container mx-auto mt-[63px] ">
            <div className="aspect-video relative h-[273px] w-full">
              <Image fill className="relative object-contain" alt={'alt'} src={'/images/about-us/image-12.png'} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[50px] mx-auto">
        <div className="flex flex-col ">
          <Heading title="Awards" subtitle="Global Recognition of RILA’s Excellence" />

          <div className="flex md:flex-row flex-col container mx-auto mt-[63px] justify-between items-center ">
            {awardImages.map((image, index) => (
              <div key={index} className="aspect-video relative h-[100px]">
                <Image fill className="relative object-contain" alt={'alt'} src={image} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'linear-gradient(180deg, #251B00 0%, #010D82 100%)' }}>
        <div className="container py-[80px] mx-auto">
          <div className="grid grid-cols-2 gap-[50px]">
            <div className="text-white flex flex-col gap-4">
              <h3 className="text-semibold text-3xl">Let&apos;s Start a Conversation!</h3>
              <p className="text-white">
                Discover how our advanced social listening solutions can revolutionize your brand&apos;s online
                presence, drive impactful strategies, and unlock invaluable consumer insights.
              </p>
              <form action="" className="flex flex-col gap-[10px]">
                <input
                  type="text"
                  className="placeholder:text-gray-700 outline-none focus:border-red-100 p-[10px] w-full rounded-md"
                  placeholder="Enter your Email"
                />
                <textarea
                  rows={4}
                  className="placeholder:text-gray-700 outline-none focus:border-red-100 p-[10px] w-full rounded-md"
                  placeholder="How can we help?"
                ></textarea>

                <button className="bg-red-100 px-[25px] py-[8px] text-white font-semibold rounded-51xl w-[40%]">
                  Contact RILA
                </button>
              </form>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute top-0 right-0 ">
                <Image src="/images/about-us/dot.svg" width={400} height={239} alt="" />
              </div>

              <div className="relative">
                <AboutImg />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default About;
