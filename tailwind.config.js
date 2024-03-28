/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        Blue: "hsl(231, 50%, 38%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      }
    },
  },
  plugins: [],
}