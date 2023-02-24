/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      background: {
        "bg-gradient-home-header": "linear-gradient(66.36deg,rgba(142,197,252,.5),72%,#e0c3fc)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
};
