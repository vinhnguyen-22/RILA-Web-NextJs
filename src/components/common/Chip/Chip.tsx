import classNames from 'classnames';
import { FC, ReactNode } from 'react';

export interface ChipProps {
  children: ReactNode;
  className?: string;
}

export const Chip: FC<ChipProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'px-2 py-1 text-sm w-fit rounded-2xl border-2 bg-opacity-20  text-gray-300 whitespace-nowrap',
        ' border-gray-600 ',
        className
      )}
    >
      {children}
    </div>
  );
};
