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
        'px-2 border-none py-1 capitalize text-sm w-fit rounded-2xl font-semibold text-white whitespace-nowrap',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
