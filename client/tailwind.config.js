/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"'],
      },
      colors: {
        transparent: "transparent",
        grey: "#DFE3F5",
        darkBlue: "#5680E9",
        teal: "#84CEEB",
        lightBlue: "5AB9EA",
        purple: "#8860d0",
      },
    },
  },
  plugins: [],
};
