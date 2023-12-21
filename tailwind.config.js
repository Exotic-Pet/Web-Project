/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#678E40",
          normal: "#91AF74",
          light: "#ABC592",
        },
        brown: {
          dark: "#543816",
          normal: "#A3907A",
          light: "#D0CCC6",
        },
        yellow: {
          dark: "#D7A10A",
          normal: "#EFC141",
          light: "#F7D575",
        },
        cyan: {
          dark: "#4D9895",
          normal: "#93C9C8",
        },
        gray: {
          dark: "#EFEAE6",
          normal: "#F9F5F2",
        },
      },
      letterSpacing: {
        wide: "0.1rem",
        wider: "0.2rem",
        widest: "0.3rem",
      },
    },
  },
  plugins: [],
};
