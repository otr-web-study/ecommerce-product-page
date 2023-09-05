import { SmileIcon } from '@/app/components/icons/SmileIcon';

export default function About() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between px-16 py-6">
      <h1 className="pt-24 text-center text-2xl capitalize tracking-[7px] text-dark-grayish-blue">
        front-end mentor project
      </h1>
      <SmileIcon className="h-24 w-24 fill-orange" />
      <p>
        Coded by
        <a
          className="ml-2 text-dark-grayish-blue transition-[color] duration-250 hover:text-very-dark-blue"
          href="https://www.frontendmentor.io/profile/otr-web-study"
          target="_blank"
        >
          @otr-web-study
        </a>
      </p>
    </main>
  );
}
