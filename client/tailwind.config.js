/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    inset: {
      0: "0px",
      13: "13px",
      28: "28px",
      30: "30px",
      48: "48px",
      50: "50px",
      100: "100px",
      158: "158px",
      260: "260px",
      290: "290px",
      400: "400px",
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
        lightBlue: "#5AB9EA",
        purple: "#8860d0",
        alert: "#f44336",
      },
    },
  },
  plugins: [],
};
