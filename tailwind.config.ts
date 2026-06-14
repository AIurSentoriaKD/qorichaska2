/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Manrope", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        caslon: ["Libre Caslon Text", "Georgia", "serif"],
      },
      colors: {
        "qori-primary": "#933018",
        "qori-secondary": "#455f88",
        "qori-accent": "#cca72f",
        "qori-surface": "#fcf9f3",
        "qori-surface-low": "#f6f3ed",
        "qori-surface-high": "#e5e2dc",
        "qori-muted": "#57423d",
        "qori-outline": "#8a716c",
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero.png')",
        parallax: "url('/hotelview1.jpg')",
      },
    },
  },
  plugins: [],
};
