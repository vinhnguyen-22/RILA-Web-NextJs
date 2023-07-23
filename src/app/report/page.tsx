import { Chip } from '@/components/common/Chip';
import Heading from '@/components/common/Heading/Heading';
import { SearchList } from '@/components/common/SearchList';
import ReportCard from '@/components/report/ReportCard';
import ReportList from '@/components/report/ReportList';
import { serverSideCmsClient } from '@/services/cms/cms.client';
import { Report } from '@/types/cms';
import React from 'react';

const ReportPage = async () => {
  const data: Report[] = [
    {
      id: '1',
      title: 'Oil',
      slug: 'oil',
      cover: '/images/report/report-1.png',
      published: true,
      tags: [
        {
          id: '1',
          name: 'tag',
          color: 'orange',
        },
      ],
    },
    {
      id: '2',
      title: 'Neobanking',
      slug: 'neobanking',
      cover: '/images/report/report-1.png',
      published: true,
      tags: [
        {
          id: '1',
          name: 'tag',
          color: 'blue',
        },
      ],
    },
    {
      id: '3',
      title: 'Virtual Shopping',
      slug: 'virtual-shopping',
      cover: '/images/report/report-1.png',
      published: true,
      tags: [
        {
          id: '1',
          name: 'tag',
          color: 'red',
        },
      ],
    },

    {
      id: '1',
      title: 'Oil',
      slug: 'oil',
      cover: '/images/report/report-1.png',
      published: true,
      tags: [
        {
          id: '1',
          name: 'tag',
          color: 'orange',
        },
      ],
    },
    {
      id: '2',
      title: 'Neobanking',
      slug: 'neobanking',
      cover: '/images/report/report-1.png',
      published: true,
      tags: [
        {
          id: '1',
          name: 'tag',
          color: 'blue',
        },
      ],
    },
    {
      id: '3',
      title: 'Virtual Shopping',
      slug: 'virtual-shopping',
      cover: '/images/report/report-1.png',
      published: true,
      tags: [
        {
          id: '1',
          name: 'tag',
          color: 'red',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col mx-auto container mt-[100px]">
      <Heading title="Reports & Analysis" />

      {/* <SearchList<Report>
        ListItem={ReportCard}
        fetchData={articles}
        keyExtractor={({ id }) => id}
        placeholder="Search Articles"
      /> */}

      <div className="flex flex-row text-gray-800 gap-[15px] my-[50px]">
        <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
          all
        </Chip>
        <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
          Industry
        </Chip>
        <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
          Brand
        </Chip>
        <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
          Influencer
        </Chip>
        <Chip className="px-[15px] py-[4px] text-lg font-semibold uppercase hover:text-white rounded-2xl border-gray-800 border-[1px] hover:bg-navy-100 ">
          Market Research
        </Chip>
      </div>
      <div className="">
        <ReportList data={data} />
      </div>
    </div>
  );
};

export default ReportPage;
