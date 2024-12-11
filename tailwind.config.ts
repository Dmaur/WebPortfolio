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
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      
      colors: {
        dark_green: {
          DEFAULT: '#0a210f',
          100: '#020603',
          200: '#040c06',
          300: '#061309',
          400: '#08190b',
          500: '#0a210f',
          600: '#20672f',
          700: '#36af50',
          800: '#6fd385', 
          900: '#b7e9c2',
        },
        café_noir: {
          DEFAULT: '#483519',
          100: '#0e0b05',
          200: '#1d150a',
          300: '#2b200f',
          400: '#392a14',
          500: '#483519',
          600: '#85622f',
          700: '#bf8f48',
          800: '#d4b485',
          900: '#eadac2',
        },
        mindaro: {
          DEFAULT: '#cfee9e',
          100: '#2e440c',
          200: '#5d8718',
          300: '#8bcb24',
          400: '#afe25c',
          500: '#cfee9e',
          600: '#d9f2b3',
          700: '#e3f5c6',
          800: '#ecf8d9',
          900: '#f6fcec',
        },
        cocoa_brown: {
          DEFAULT: '#da7422',
          100: '#2b1707',
          200: '#562e0d',
          300: '#824514',
          400: '#ad5d1b',
          500: '#da7422',
          600: '#e38f4b',
          700: '#eaab78',
          800: '#f1c7a5',
          900: '#f8e3d2',
        },
        teal: {
          DEFAULT: '#177e89',
          100: '#05191b',
          200: '#093236',
          300: '#0e4a51',
          400: '#12636c',
          500: '#177e89',
          600: '#21b3c3',
          700: '#4ad1e0',
          800: '#87e1eb',
          900: '#c3f0f5',
        },
      },
    },
  },
  plugins: [],
};
export default config;
