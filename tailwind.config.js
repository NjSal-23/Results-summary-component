/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      'purple': '#603efb',
      'gray': '#d3c3ff',
      'dark-gray': '#4d4d5b',
      'white': '#ffffff',
      'salmon': '#d36e6e',
      'light-salmon': '#fef6f5',
      'yellow': '#eab050',
      'light-yellow': '#fefbf2',
      'green': '#34a78b',
      'light-green': '#f3fbfa',
      'blue': '#3840a7',
      'light-blue': '#f2f3fd',
      'shadow-purple': '#4629cf',

    },
    extend: {
      // fontSize: {
      //  'font-size': '0.75rem';, /* 12px */
      //  'line-height': '1rem'; /* 16px */
      // },
    },
  },
  plugins: [],
}

