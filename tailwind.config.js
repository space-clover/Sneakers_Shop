/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fcf9ee',
        yellow: '#ddc92a',
        beige: '#e7d6c4',
        blacktosummer: '#141414',
      },
      spacing: {
        '1': '1%',
        '2': '2%',
        '3': '3%',
        '4': '4%',
        '5': '5%',
        '6': '6%',
        '7': '7%',
        '8': '8%',
        '9': '9%',
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '60': '60%',
        '70': '70%',
        '80': '80%',
        '90': '90%',
        '100': '100%',
      },
    },
  },
  plugins: [],
}
