/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 18,
      md: 24,
      lg: 36,
      xl: 48
    },
    extend: {
      colors: {
        blue: "#2F527B",
        orange: "#F9A826",
        red: "#EA8282",
        green: "#60BF88",
        gray: "rgba(96, 102, 208, 0.7)"
      },
    },
  },
  plugins: [],
}
