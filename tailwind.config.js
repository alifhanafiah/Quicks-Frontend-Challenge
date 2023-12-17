/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3498db',
          gray: {
            400: '#4f4f4f',
            500: '#828282',
            200: '#e0e0e0',
          },
        },
      },
    },
  },
  plugins: [],
};
