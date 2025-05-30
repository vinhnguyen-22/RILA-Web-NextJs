import CaseStudyList from '@/components/case-studies/List/CaseStudyList';
import TabBanner from '@/components/case-studies/TabBanner';
import VideoBanner from '@/components/case-studies/VideoBanner';
import Heading from '@/components/common/Heading/Heading';
import Paginate from '@/components/common/Paginate/Paginate';
import { CaseStudyBrandImage } from '@/mocks/data';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { isCaseStudy } from '@/types/guards';
import Image from 'next/image';

export const dynamic = "force-dynamic";

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
            subtitle="Discover our comprehensive case studies, showcasing RILA’s global leadership in social listening. Explore how our data-driven insights empower clients to achieve transformative results through cutting-edge solutions."
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
