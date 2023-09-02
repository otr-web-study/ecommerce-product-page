'use client';
import { useState, useRef } from 'react';
import { Input } from '@nextui-org/react';
import { Textarea } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { type FieldValues, useForm } from 'react-hook-form';
import { PopoverSent } from './components/PopoverSent';

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const triggerPopoverRef = useRef<HTMLButtonElement>(null);

  const onSubmit = (fields: FieldValues) => {
    setIsPopoverOpen(true);
    reset();
  };

  return (
    <main className="mt-6 grid w-full place-items-center px-6 pb-9 md:mt-[90px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-[500px] flex-col gap-4"
        noValidate
      >
        <h1 className="text-center text-3xl text-very-dark-blue">Contact us</h1>
        <p className="text-center text-dark-grayish-blue">
          We would love to hear about your thoughts.
        </p>
        <Input
          {...register('name', { required: 'Field is required.' })}
          label="Name"
          isRequired
          variant="underlined"
          validationState={errors?.name ? 'invalid' : 'valid'}
          errorMessage={(errors?.name?.message as string) ?? ''}
        />
        <Input
          {...register('email', {
            required: 'Field is required.',
            pattern: { value: /^\S+@\S+$/i, message: 'Please enter valid email.' },
          })}
          label="Email"
          type="email"
          isRequired
          variant="underlined"
          validationState={errors?.email ? 'invalid' : 'valid'}
          errorMessage={(errors?.email?.message as string) ?? ''}
        />
        <Textarea
          {...register('message', { required: 'Field is required.' })}
          isRequired
          variant="underlined"
          label="Message"
          labelPlacement="inside"
          className="col-span-12 mb-6 md:col-span-6 md:mb-0"
          validationState={errors?.message ? 'invalid' : 'valid'}
          errorMessage={(errors?.message?.message as string) ?? ''}
        />
        <Button
          ref={triggerPopoverRef}
          type="submit"
          className="mx-[20%] mb-[34px] mt-[31px] h-[54px] bg-orange text-base font-bold text-white"
        >
          Send Message
        </Button>
        <PopoverSent
          isOpen={isPopoverOpen}
          setIsOpen={setIsPopoverOpen}
          triggerRef={triggerPopoverRef}
        />
      </form>
    </main>
  );
}
