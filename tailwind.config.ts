import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        ibmPlexMono: ['"IBM Plex Mono"', 'monospace'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
        cabin: ['Cabin Sketch', 'cursive'],
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],

      },
      
      colors: {
        glaucous: {
          DEFAULT: '#577399',
          100: '#11171e',
          200: '#232e3d',
          300: '#34455b',
          400: '#465c7a',
          500: '#577399',
          600: '#768eb0',
          700: '#98aac4',
          800: '#bac7d8',
          900: '#dde3eb',
        },
        ash_gray: {
          DEFAULT: '#acbfa4',
          100: '#212a1e',
          200: '#43543b',
          300: '#647d59',
          400: '#87a27c',
          500: '#acbfa4',
          600: '#beccb7',
          700: '#ced9c9',
          800: '#dee6db',
          900: '#eff2ed',
        },
        beige: {
          DEFAULT: '#e2e8ce',
          100: '#343c1c',
          200: '#697738',
          300: '#9bb057',
          400: '#bfcc93',
          500: '#e2e8ce',
          600: '#e8edd8',
          700: '#eef1e2',
          800: '#f3f6ec',
          900: '#f9faf5',
        },
        bittersweet: {
          DEFAULT: '#fe5f55',
          100: '#430500',
          200: '#860a01',
          300: '#c90e01',
          400: '#fe1f0f',
          500: '#fe5f55',
          600: '#fe7e75',
          700: '#fe9e97',
          800: '#ffbfba',
          900: '#ffdfdc',
        },
        rich_black: {
          DEFAULT: '#0d0c1d',
          100: '#030206',
          200: '#05050c',
          300: '#080711',
          400: '#0b0a17',
          500: '#0d0c1d',
          600: '#2b285f',
          700: '#4a43a1',
          800: '#807bc8',
          900: '#bfbde3',
        },
      },
    },
  },
  plugins: [],
};
export default config;
