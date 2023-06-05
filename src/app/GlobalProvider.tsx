import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export function GlobalProvider({ children }: any): JSX.Element {
  return <>{children}</>;
}
