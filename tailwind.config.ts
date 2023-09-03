import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg':
          'linear-gradient(252deg, #69707D -9.94%, #A3A1A4 16.2%, #FFEDE0 61.54%, #FFEDE0 100%)',
      },
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 0%)',
        overlay: 'rgba(0, 0, 0, 0.7)',
        orange: 'hsl(26, 100%, 55%)',
        'rusty-orange': 'hsl(26, 89%, 44%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },
      transitionProperty: {
        fill: 'fill',
      },
      borderRadius: {
        radii: '10px',
        'radii-4': '4px',
        'radii-5': '5px',
      },
      boxShadow: {
        'sh-cart': '0px 23px 35px 0px rgba(0, 0, 0, 0.10), 0px -1px 10px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [
    nextui(),
    plugin(function ({ addUtilities, addVariant }) {
      addUtilities({
        '.text-shadow-md': {
          'text-shadow': '10px 6px 5px rgba(105, 112, 125, 1)',
        },
        '.text-shadow': {
          'text-shadow': '5px 4px 5px rgba(105, 112, 125, 1)',
        },
      });
      addVariant('child', '& > *');
    }),
  ],
};
export default config;
