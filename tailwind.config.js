/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        blue: {
          200: '#E3EBF3',
          500: '#5967B0',
        },
        red: {
          500: '#F28970',
        },
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};

