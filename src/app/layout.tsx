import Header from '@/components/header/Header';
import { Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { Metadata } from 'next';
import { GlobalProvider } from './GlobalProvider';

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '600', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: {
    default: 'RILA',
    template: `%s | RILA Web`,
  },
  description: 'This is the description of RILA Web',
  verification: {
    google: '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir={'ltr'}>
      <head></head>
      <body className={font.className}>
        <GlobalProvider>
          <div className="flex flex-col min-h-[100vh] bg-white">
            <Header />
            <main className="flex-grow md:mt-40">{children}</main>
            <Footer />
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
