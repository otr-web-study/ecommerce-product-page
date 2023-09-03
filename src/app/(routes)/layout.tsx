import { Header } from '@/app/components/Header';
import { Container } from '@/app/components/Container';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center overflow-hidden">
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
}
