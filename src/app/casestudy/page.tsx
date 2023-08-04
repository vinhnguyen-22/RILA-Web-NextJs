import CaseStudyList from '@/components/casestudy/List/CaseStudyList';
import TabBanner from '@/components/casestudy/TabBanner';
import VideoBanner from '@/components/casestudy/VideoBanner';
import Heading from '@/components/common/Heading/Heading';
import Paginate from '@/components/common/Paginate/Paginate';
import { CaseStudyBrandImage } from '@/mocks/data';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isCaseStudy } from '@/types/guards';
import Image from 'next/image';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Case Study',
  description: 'Case Study',
};

const CaseStudyPage = async () => {
  const caseStudies = await serverSideCmsClient.getDatabaseEntries(process.env.NOTION_CASESTUDY_DB_ID, isCaseStudy);

  return (
    <>
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
      </section>
      <section className="my-[30px]">
        <VideoBanner />
      </section>
      <section className="container mx-auto">
        <CaseStudyList data={caseStudies} />
      </section>
      <section className="my-[40px]">
        <TabBanner />
      </section>
    </>
  );
};

export default CaseStudyPage;
