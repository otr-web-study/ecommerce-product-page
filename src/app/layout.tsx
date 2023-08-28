import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Header } from './components/Header';

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'E-commerce product page',
  description: 'E-commerce product page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className} light bg-background leading-normal text-foreground`}>
        <Providers>
          <div className="flex min-h-screen flex-col items-center overflow-hidden">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
