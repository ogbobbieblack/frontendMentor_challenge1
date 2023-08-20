/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 98%)",
        black: "hsl(0, 0%, 8%)",
        gray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};

