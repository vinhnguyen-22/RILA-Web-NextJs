'use client';

import { CaseStudy } from '@/types/cms';
import React, { useEffect, useState } from 'react';
import CaseStudyCard from '../LinkCard/CaseStudyCard';
import { SearchList } from '../../common/SearchList';
import { SearchIcon } from '@/icons/search';
import { Chip } from '../../common/Chip';
import SearchBar from '../../common/SearchBar/SearchBar';
import useCaseStudies from '@/hooks/useCaseStudies';
import Paginate from '../../common/Paginate/Paginate';
type Props = {
  data: CaseStudy[];
};

const CaseStudyList = ({ data }: Props) => {
  const { caseStudies, totalPages } = useCaseStudies(data);

  return (
    <div className="">
      <div className="mx-1 grid grid-cols-1 md:grid-cols-3 ">
        {caseStudies.map((element, i) => (
          <CaseStudyCard key={i} {...element} />
        ))}
      </div>
      <Paginate totalPages={totalPages} elementToScroll={null} />
    </div>
  );
};

export default CaseStudyList;
