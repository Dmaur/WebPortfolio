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
        violet: {
          DEFAULT: '#442b48',
          100: '#0e090f',
          200: '#1c121d',
          300: '#2a1a2c',
          400: '#38233b',
          500: '#442b48',
          600: '#74497a',
          700: '#9f6ca7',
          800: '#bf9dc4',
          900: '#dfcee2',
        },
        Dgray: {
          DEFAULT: '#726e60',
          100: '#171613',
          200: '#2e2c26',
          300: '#444239',
          400: '#5b584c',
          500: '#726e60',
          600: '#918d7c',
          700: '#ada99d',
          800: '#c8c6bd',
          900: '#e4e2de',
        },
        olivi: {
          DEFAULT: '#98b06f',
          100: '#1f2514',
          200: '#3e4a29',
          300: '#5c6f3d',
          400: '#7b9351',
          500: '#98b06f',
          600: '#acbf8b',
          700: '#c1cfa8',
          800: '#d6dfc5',
          900: '#eaefe2',
        },
        'yellow_green': {
          DEFAULT: '#b6dc76',
          100: '#27360e',
          200: '#4e6b1c',
          300: '#75a129',
          400: '#9ace40',
          500: '#b6dc76',
          600: '#c5e391',
          700: '#d3eaac',
          800: '#e2f1c8',
          900: '#f0f8e3',
        },
        'mindaro': {
          DEFAULT: '#dbff76',
          100: '#374a00',
          200: '#6d9500',
          300: '#a4df00',
          400: '#c6ff2b',
          500: '#dbff76',
          600: '#e2ff91',
          700: '#e9ffac',
          800: '#f0ffc8',
          900: '#f8ffe3',
        },
      },
    },
  },
  plugins: [],
};
export default config;
