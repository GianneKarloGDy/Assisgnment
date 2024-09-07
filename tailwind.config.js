/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '20xl': ['14rem', {
        lineHeight: '12rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      }
    },
  },
  plugins: [],
}