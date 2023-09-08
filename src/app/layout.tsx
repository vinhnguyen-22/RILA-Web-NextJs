import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GlobalProvider } from './GlobalProvider';

export const revalidate = 60; // revalidate this page every 60 seconds

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '600', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: {
    default: 'RILA GLOBAL CONSULTING',
    template: `%s | RILA`,
  },
  description: 'This is the description of RILA GLOBAL CONSULTING',
  // verification: {
  //   google: '',
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir={'ltr'}>
      <head></head>
      <body suppressHydrationWarning={true} className={font.className}>
        <GlobalProvider>
          <div className="flex flex-col min-h-[100vh] bg-white">
            <Header />
            <main className="flex-grow md:mt-[100px] lg:mt-[100px] xl:mt-[60px]">{children}</main>
            <Footer />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
