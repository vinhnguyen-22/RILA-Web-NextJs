'use client';
import { FC, PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';
import { NotionRenderer as Renderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import useMounted from '@/hooks/use-mounted';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { BlogVerticalList } from '@/components/common/RelatedPost/PostVerticalList';
import { Article } from '@/types/cms';
import RelatedPosts from '@/components/common/RelatedPost/RelatedPosts';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(({ Code: NotionCode }) => {
    return NotionCode;
  })
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(({ Collection: NotionCollection }) => NotionCollection)
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(({ Equation: NotionEquation }) => NotionEquation)
);
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then(({ Pdf: NotionPdf }) => NotionPdf), {
  ssr: false,
});
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then(({ Modal: NotionModal }) => NotionModal),
  { ssr: false }
);

export interface NotionRendererProps<T> {
  recordMap: ExtendedRecordMap;
  relatedPosts: T[];
}

export const NotionRenderer = <T,>(props: PropsWithChildren<NotionRendererProps<T>>) => {
  const { recordMap, relatedPosts } = props;
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  return (
    <>
      <div className="grid grid-cols-3 w-full">
        <div className="col-span-3">
          <Renderer
            darkMode={(resolvedTheme ?? 'dark') === 'light'}
            recordMap={recordMap}
            showCollectionViewDropdown={false}
            showTableOfContents={true}
            minTableOfContentsItems={3}
            linkTableTitleProperties={false}
            hideBlockId
            previewImages
            fullPage
            components={{
              nextImage: Image,
              nextLink: Link,
              Code,
              Collection,
              Equation,
              Modal,
              Pdf,
            }}
            pageAside={<BlogVerticalList data={relatedPosts} />}
          />
        </div>
      </div>

      {relatedPosts && <RelatedPosts data={relatedPosts} />}
    </>
  );
};
