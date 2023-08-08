'use client';

import { questionItems } from '@/mocks/data';
import AccordionItem from '../accordion/AccordionItem';
import { useState } from 'react';

const Question = () => {
  const [open, setOpen] = useState<any>(false);

  const toggle = (index: any) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };
  return (
    <div className="flex flex-col items-start justify-start border">
      {questionItems.map((data, index) => {
        return (
          <div key={index}>
            <div className="h-[1px] w-full bg-darkgray px-2.5 "></div>
            <div className="px-[15px]">
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
