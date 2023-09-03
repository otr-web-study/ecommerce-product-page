import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';
import { UIProvider } from './providers/ui-provider';
import { ContextProvider } from './providers/context-provider';

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'E-commerce product page',
  description: 'E-commerce product page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${kumbh.className} bg-background leading-normal text-foreground light`}>
        <UIProvider>
          <ContextProvider>{children}</ContextProvider>
        </UIProvider>
      </body>
    </html>
  );
}
