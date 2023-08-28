import type { Config } from 'tailwindcss';
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
      backgroundImage: {},
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 0%)',
        overlay: 'rgba(0, 0, 0, 0.7)',
        orange: 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
      },
      screens: {
        smd: '980px',
      },
      dropShadow: {
        'sh-link': '1px 1px 0px rgba(0,0,0,0.2);',
      },
      transitionProperty: {
        'drop-shadow': '',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
