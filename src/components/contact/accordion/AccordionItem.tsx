import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
type AccordionItemProps = {
  open: boolean;
  toggle: any;
  title: string;
  desc: string;
};
const AccordionItem = ({ open, toggle, title, desc }: AccordionItemProps) => (
  <>
    <div className="h-[1px] w-full bg-black"></div>
    <div className="flex flex-row items-center justify-start" onClick={toggle}>
      <div className="flex flex-row py-8 px-2.5 box-border items-center justify-start">
        <div className="relative leading-[36px] text-lg">{title}</div>
      </div>
      <div className="text-white font-bold text-xl">
        {open ? (
          <div className="w-[20px] h-[20px] bg-red-200 rounded-[20px]">
            <AiOutlineMinus />
          </div>
        ) : (
          <div className="w-[20px] h-[20px] bg-red-200 rounded-[20px]">
            <AiOutlinePlus />
          </div>
        )}
      </div>
    </div>

    <Collapse isOpened={open}>
      <div className="bg-white px-[20px] pb-[20px] text-xl">{desc}</div>
    </Collapse>
  </>
);

export default AccordionItem;
