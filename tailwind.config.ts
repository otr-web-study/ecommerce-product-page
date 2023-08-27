import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 0%)',
        overlay: 'rgba(0, 0, 0, 0.7)',
        orange: 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
      }
    },
  },
  plugins: [],
}
export default config
