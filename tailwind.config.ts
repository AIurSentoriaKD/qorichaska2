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
        "qori-primary-soft": "#b3472d",
        "qori-secondary": "#455f88",
        "qori-accent": "#cca72f",
        "qori-surface": "#fcf9f3",
        "qori-surface-low": "#f6f3ed",
        "qori-surface-mid": "#f0eee8",
        "qori-surface-high": "#e5e2dc",
        "qori-ink": "#1c1c18",
        "qori-muted": "#57423d",
        "qori-outline": "#8a716c",
        "qori-outline-soft": "#dec0b9",
        "qori-inverse": "#31312d",
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
