import '@/app/globals.css';
import { Header } from '@/app/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center overflow-hidden">
        <Header />
        {children}
      </div>
    </>
  );
}
