import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GlobalProvider } from './GlobalProvider';
import Script from 'next/script';

export const revalidate = 120; // revalidate this page every 60 seconds

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '600', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://localhost:3000'),
  title: {
    default: 'RILA GLOBAL CONSULTING',
    template: `%s | RILA`,
  },
  description:
    "Professional And Research Services For Social Listening - Trusted By The World's Biggest Brands.",
  openGraph: {
    title: 'RILA GLOBAL CONSULTING',
    description:
      "Professional And Research Services For Social Listening - Trusted By The World's Biggest Brands.",
    url: new URL(process.env.SITE_URL || 'https://localhost:3000'),
    siteName: 'RILA GLOBAL CONSULTING',
    images: [
      {
        url: '/Preview.png',
        width: 800,
        height: 600,
      },
      {
        url: '/Preview.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir={'ltr'}>
      <head>
        <Script
          src={`https://cdn-cookieyes.com/client_data/b2a0870eceff69ee9396bced/script.js`}
        ></Script>
      </head>
      <body suppressHydrationWarning={true} className={font.className}>
        <GlobalProvider>
          <div className="flex flex-col min-h-[100vh] bg-white">
            {/* <Header /> */}
            <main className="flex-grow md:mt-[100px] lg:mt-[100px] xl:mt-[60px]">{children}</main>
            {/* <Footer /> */}
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
