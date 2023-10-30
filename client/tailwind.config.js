/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    inset: {
      0: "0px",
      28: "28px",
      13: "13px",
      30: "30px",
      48: "48px",
      100: "100px",
      158: "158px",
      290: "290px",
      260: "260px",
    },
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"'],
      },
      colors: {
        transparent: "transparent",
        grey: "#F3F4FA",
        background: "#EAEBF0",
        darkBlue: "#5680E9",
        teal: "#84CEEB",
        lightBlue: "5AB9EA",
        purple: "#8860d0",
      },
    },
  },
  plugins: [],
};
