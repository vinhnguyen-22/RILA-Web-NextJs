import FormSection from '@/components/about/FormSection';
import TeamBioSection from '@/components/about/TeamBioSection';
import Hero from '@/components/about/hero';
import Heading from '@/components/common/Heading/Heading';
import Contact from '@/components/contact/Contact';
import Polygon from '@/icons/polygon';
import { AboutAwardImages } from '@/mocks/about-data';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    <div className="mt-[40px] ">
      <Hero />
      <section className="section relative mt-[64px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 h-[420px] gap-[60px]">
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
              <p className="text-lg leading-7 text-start">
                RILA GLOBAL CONSULTING is an award-winning social listening consultancy, providing consumer research,
                social media strategy, and social listening software implementation{' '}
              </p>
              <p className="text-lg leading-7 text-start">
                Since 2019, RILA has partnered with some of the world’s largest brands. Fortune 500 clients choose RILA
                because of our values and the quality of our work. All RILA projects are fully executed by veteran
                experts in the field - no outsourcing, no cutting corners. But don’t take it from us – we have a ton of
                Fortune 500 references upon request.
              </p>
            </div>
          </div>
        </div>

        <div className="max-sm:hidden absolute top-[73px] left-0">
          <Image src="/images/about-us/dot-blue.svg" width={300} className="" height={57} alt="" />
          <Image src="/images/about-us/dot-blue.svg" width={300} className="my-[27px] -z-10" height={57} alt="" />
        </div>
      </section>

      <TeamBioSection />

      <section className="mt-[50px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Heading title="In The News" />
          <div className="max-w-[550px] text-center text-lg tracking-[0.03em] leading-[30px] text-gray-500 flex items-center justify-center">
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

          <div className="flex md:flex-row flex-col flex-wrap container mx-auto mt-[63px] justify-between items-center ">
            {AboutAwardImages.map((image, index) => (
              <div key={index} className="aspect-video relative h-[100px]">
                <Image fill className="relative object-contain" alt={'alt'} src={image} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <FormSection />
      <Contact />
    </div>
  );
};

export default About;
