/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#3498db",
          gray: {
            200: "#e0e0e0",
            400: "#4f4f4f",
            500: "#828282",
          },
        },

        indicator: {
          purple: "#8785FF",
          yellow: {
            200: "#F8B76B",
          },
        },
      },

      width: {
        60: "3.75rem",
        68: "4.25rem",
      },

      height: {
        60: "3.75rem",
        68: "4.25rem",
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
