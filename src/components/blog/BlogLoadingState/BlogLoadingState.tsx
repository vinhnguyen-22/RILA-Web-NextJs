'use client';

import { PATHS } from '@/app/constants';
import { ContentPageLoadingState } from '@/components/common/ContentPageLoadingState';
import { Skeleton } from '@/components/common/Skeleton';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const BlogLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.BLOG)
    return (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={`article-skel-${i}`} />
        ))}
      </>
    );

  return <ContentPageLoadingState />;
};
