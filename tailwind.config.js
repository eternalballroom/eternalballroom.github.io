/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',

  content: [
    "./src/app/**/*.{html,js,jsx,ts,tsx}",
    "./src/app/components/**/*.{html,js,jsx}",

    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'mygray': '#0f0f0f',
        'mylightgray': '#28282A',
      },
    }
  }

 }