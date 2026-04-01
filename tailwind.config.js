/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peat: {
          50: "#f7f3ef",
          100: "#ebe3d7",
          200: "#d6c5ad",
          300: "#bfa37e",
          400: "#ab855a",
          500: "#9c744c",
          600: "#855d40",
          700: "#6b4836",
          800: "#5a3c31",
          900: "#4d342c",
          950: "#2b1b17",
        },
        moss: {
          50: "#f3f6f0",
          100: "#e3eadc",
          200: "#c7d5bb",
          300: "#a3b892",
          400: "#7f9a6b",
          500: "#627d4f",
          600: "#4c633c",
          700: "#3d4e32",
          800: "#33402b",
          900: "#2c3726",
          950: "#151d12",
        },
        copper: {
          DEFAULT: "#c77d3a",
          light: "#dfa05c",
          dark: "#9e5f26",
        },
        ink: {
          DEFAULT: "#1a1714",
          light: "#2a2520",
          lighter: "#3a342e",
        },
        cream: {
          DEFAULT: "#f0e8da",
          dark: "#ddd2bf",
        },
      },
      fontFamily: {
        display: ['"EB Garamond"', "Georgia", "serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
        accent: ['"Cinzel"', "Georgia", "serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
