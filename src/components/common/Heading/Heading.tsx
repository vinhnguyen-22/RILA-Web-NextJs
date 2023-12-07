import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-21xl mx-auto">
      <h1>
        <strong className="tracking-[0.03em] flex items-center justify-center">{title}</strong>
      </h1>
      {subtitle ? (
        <div className="max-w-[841px] text-center text-xl tracking-[0.03em] leading-[30px] text-gray-500 flex items-center justify-center">
          {subtitle}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Heading;
