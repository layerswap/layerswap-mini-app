/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {

      colors: {
        'telegram-bg': 'var(--tg-theme-bg-color)',
        'telegram-bg-secondary': 'var(--tg-theme-secondary-bg-color)',
        'telegram-text': 'var(--tg-theme-text-color)',
        'telegram-hint': 'var(--tg-theme-hint-color)',
        'telegram-link': 'var(--tg-theme-link-color)',
        'telegram-primary': 'var(--tg-theme-button-color)',
        'telegram-primary-text': 'var(--tg-theme-button-text-color)',
        'telegram-secondary-white': 'var(--tg-theme-secondary-bg-color)',
      },
    },
  },
  plugins: [],
}

