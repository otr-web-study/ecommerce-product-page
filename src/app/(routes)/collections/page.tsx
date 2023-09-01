import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/app/components/Container';
import { getCollections } from '@/lib/getCollections';

export default function Collections() {
  const collections = getCollections();

  const content = collections.map((c) => (
    <div
      key={c.id}
      className="max-w-[400px] rounded-radii shadow-xl transition-transform duration-250 hover:-translate-y-2 hover:translate-x-2 hover:shadow-2xl md:max-w-none"
    >
      <Link href={c.href} className="w-full">
        <Image
          src={c.image}
          alt={c.title}
          width={500}
          height={500}
          className="w-full rounded-t-radii"
        />
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-very-dark-blue font bold text-xl">{c.title}</h2>
          <p className="text-dark-grayish-blue">{c.description}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <Container>
      <main className="mt-6 grid w-full grid-cols-1 place-items-center gap-16 px-6 pb-16 md:mt-[90px] md:grid-cols-2">
        {content}
      </main>
    </Container>
  );
}
