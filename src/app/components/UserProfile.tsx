'use client';
import Image from 'next/image';
import { Popover, PopoverTrigger, PopoverContent, User, Link } from '@nextui-org/react';
import Avatar from '@/assets/imgages/image-avatar.png';

export const UserProfile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="rounded-full outline outline-1 outline-transparent transition-all duration-250 hover:outline-orange focus-visible:outline-orange">
          <Image
            className="h-auto w-6 focus-visible:outline-none md:h-[50px] md:w-[50px]"
            src={Avatar}
            alt="profile pic"
          />
          <span className="sr-only">profile</span>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        {() => (
          <>
            <User
              name="otr-web-study"
              description={
                <Link
                  href="https://www.frontendmentor.io/profile/otr-web-study"
                  size="sm"
                  isExternal
                >
                  @otr-web-study
                </Link>
              }
              avatarProps={{
                src: '/assets/images/image-avatar.png',
              }}
            />
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};
