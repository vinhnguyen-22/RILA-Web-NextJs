import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
import classNames from 'classnames';
type AccordionItemProps = {
  open: boolean;
  toggle: any;
  title: string;
  desc: string;
};
const AccordionItem = ({ open, toggle, title, desc }: AccordionItemProps) => (
  <>
    <div className="flex flex-row w-full items-center justify-between" onClick={toggle}>
      <div className="flex flex-row py-[30px] box-border items-center justify-start">
        <div className={classNames('md:text-base text-sm relative leading-[36px]', open ? 'font-semibold' : '')}>
          {title}
        </div>
      </div>
      <div className="text-white font-bold text-xl justify-end">
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
      <div className="bg-white pb-[20px] md:text-base text-sm">{desc}</div>
    </Collapse>
  </>
);

export default AccordionItem;
