'use client';
import useMounted from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import { Block, ExtendedRecordMap } from 'notion-types';
import { FC, ReactNode } from 'react';
import { NotionRenderer as Renderer } from 'react-notion-x';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(({ Code: NotionCode }) => {
    return NotionCode;
  }),
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    ({ Collection: NotionCollection }) => NotionCollection,
  ),
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(
    ({ Equation: NotionEquation }) => NotionEquation,
  ),
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then(({ Pdf: NotionPdf }) => NotionPdf),
  {
    ssr: false,
  },
);
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then(({ Modal: NotionModal }) => NotionModal),
  { ssr: false },
);

export interface NotionRendererProps {
  recordMap: ExtendedRecordMap;
  related: ReactNode;
}

export const NotionRenderer: FC<NotionRendererProps> = ({ recordMap, related }) => {
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
            linkTableTitleProperties={false}
            previewImages
            pageCover={false}
            hideBlockId
            forceCustomImages
            fullPage
            disableHeader
            mapImageUrl={(url, block) => mapImageUrl(url, block) || ''}
            components={{
              nextImage: Image,
              nextLink: Link,
              Code,
              Collection,
              Equation,
              Modal,
              Pdf,
            }}
            pageAside={<div className="w-full">{related}</div>}
          />
        </div>

        {/* <div className="col-span-1">
          <BlogVerticalList data={relatedArticles} />
        </div> */}
      </div>
    </>
  );
};
export function mapImageUrl(url: string, block: Block): string | null {
  if (!url) {
    return null;
  }

  if (url.startsWith('data:')) {
    return url;
  }

  // more recent versions of notion don't proxy unsplash images
  if (url.startsWith('https://images.unsplash.com')) {
    return url;
  }

  try {
    const u = new URL(url);

    if (
      u.pathname.startsWith('/secure.notion-static.com') &&
      u.hostname.endsWith('.amazonaws.com')
    ) {
      if (
        u.searchParams.has('X-Amz-Credential') &&
        u.searchParams.has('X-Amz-Signature') &&
        u.searchParams.has('X-Amz-Algorithm')
      ) {
        // if the URL is already signed, then use it as-is
        return url;
      }
    }
  } catch {
    // ignore invalid urls
  }

  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`;
  }

  url = `https://www.notion.so${
    url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`
  }`;

  const notionImageUrlV2 = new URL(url);
  let table = block.parent_table === 'space' ? 'block' : block.parent_table;
  if (table === 'collection' || table === 'team') {
    table = 'block';
  }
  notionImageUrlV2.searchParams.set('table', table);
  notionImageUrlV2.searchParams.set('id', block.id);
  notionImageUrlV2.searchParams.set('cache', 'v2');

  url = notionImageUrlV2.toString();

  return url;
}
