import TabBanner from '@/components/casestudy/TabBanner';
import VideoBanner from '@/components/casestudy/VideoBanner';
import Heading from '@/components/common/Heading/Heading';
import { CaseStudyBrandImage } from '@/mocks/data';
import Image from 'next/image';

const CaseStudyPage = () => {
  return (
    <section>
      <div className="flex flex-col mx-auto container mt-[100px]">
        <Heading
          title="Case Studies"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book."
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-row justify-around items-center gap-[120px] ">
          {CaseStudyBrandImage.map((item, index) => (
            <div key={index} className="w-full relative h-[124px]">
              <Image src={item.image} className="object-contain" fill alt={item.alt} />
            </div>
          ))}
          <div className="w-full relative h-[124px] flex place-items-center">
            <Image src="/images/case-study/chervon.png" width={60} height={60} alt="chervon" />
          </div>
        </div>
      </div>

      <VideoBanner />
      <TabBanner />
    </section>
  );
};

export default CaseStudyPage;
