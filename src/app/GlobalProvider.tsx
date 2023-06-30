'use client';
import './globals.css';

// Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

// notion
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

import '@/styles/notion.css';
export function GlobalProvider({ children }: any): JSX.Element {
  return <>{children}</>;
}
