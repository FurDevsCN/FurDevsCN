/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        notify: {
          from: { marginTop: "-100px" },
          to: { marginTop: "20px" },
        },
      },
      animationIterationCount: {
        1: "1",
      },
    },
    fontFamily: {
      HooskaiChamferedSquare: ["HooskaiChamferedSquare", "sans-serif"],
    },
  },
  plugins: [],
};
