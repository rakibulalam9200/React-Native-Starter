/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#7C69EF',
        'text-color': '#101828',
        'border-color': '#D0D5DD',
        'secondary-text-color': '#344054',
        'light-gray': '#EAECF0',
        // Add more custom colors as needed
      },
      fontFamily: {
        'rubik': ['Rubik-Regular', 'sans-serif'],
        'rubik-bold': ['Rubik-Bold', 'sans-serif'],
        'rubik-medium': ['Rubik-Medium', 'sans-serif'],
        'rubik-semi-bold': ['Rubik-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
