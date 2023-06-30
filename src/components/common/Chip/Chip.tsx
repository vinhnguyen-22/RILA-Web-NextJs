import classNames from 'classnames';
import { FC, ReactNode } from 'react';

export interface ChipProps {
  children: ReactNode;
  className?: string;
  style?: any;
}

export const Chip: FC<ChipProps> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={classNames(
        'px-2 py-1 text-sm w-fit rounded-2xl border-2 bg-opacity-20  text-gray-300 whitespace-nowrap',
        ' border-gray-600 ',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
