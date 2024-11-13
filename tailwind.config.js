/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'TW',



  corePlugins: {
      preflight: false,
  },


  content: [
    "./src/app/**/*.{html,js,jsx,ts,tsx}",
    "./src/app/components/**/*.{html,js,jsx}",

    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],


 }