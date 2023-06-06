'use client';
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
export function GlobalProvider({ children }: any): JSX.Element {
  return <>{children}</>;
}
