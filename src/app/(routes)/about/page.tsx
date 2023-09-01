export default function About() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between px-16 py-6">
      <h1 className="text-dark-grayish-blue pt-24 text-center text-2xl capitalize tracking-[7px]">
        front-end mentor project
      </h1>
      <p>
        Coded by
        <a
          className="text-dark-grayish-blue hover:text-very-dark-blue ml-2 transition-[color] duration-250"
          href="https://www.frontendmentor.io/profile/otr-web-study"
          target="_blank"
        >
          @otr-web-study
        </a>
      </p>
    </main>
  );
}
