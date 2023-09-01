'use client';
import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

export default function Contact() {
  return (
    <main className="mt-6 grid w-full place-items-center px-6 pb-9 md:mt-[90px]">
      <form className="flex w-full max-w-[500px] flex-col gap-4">
        <h1 className="text-very-dark-blue text-center text-3xl">Contact us</h1>
        <p className="text-dark-grayish-blue text-center">
          We would love to hear about your thoughts.
        </p>
        <Input label="Name" isRequired variant="underlined" />
        <Input label="Email" type="email" isRequired variant="underlined" />
        <Textarea
          isRequired
          variant="underlined"
          label="Message"
          labelPlacement="inside"
          className="col-span-12 mb-6 md:col-span-6 md:mb-0"
        />
        <Button className="mx-[20%] mb-[34px] mt-[31px] h-[54px] bg-orange text-base font-bold text-white">
          Send Message
        </Button>
      </form>
    </main>
  );
}
