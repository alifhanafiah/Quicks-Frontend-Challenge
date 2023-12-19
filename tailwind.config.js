/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#3498db",
          gray: {
            400: "#4f4f4f",
            500: "#828282",
            200: "#e0e0e0",
          },
        },
      },

      width: {
        68: "4.25rem",
        60: "3.75rem",
      },

      height: {
        68: "4.25rem",
        60: "3.75rem",
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
