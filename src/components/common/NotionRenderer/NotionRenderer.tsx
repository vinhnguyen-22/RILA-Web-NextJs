'use client';
import { FC } from 'react';
import { useTheme } from 'next-themes';
import { NotionRenderer as Renderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import useMounted from '@/hooks/use-mounted';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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

export interface NotionRendererProps {
  recordMap: ExtendedRecordMap;
}

export const NotionRenderer: FC<NotionRendererProps> = ({ recordMap }) => {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  console.log(recordMap);
  return (
    <Renderer
      darkMode={(resolvedTheme ?? 'dark') === 'light'}
      recordMap={recordMap}
      showCollectionViewDropdown={false}
      showTableOfContents={true}
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
    />
  );
};
