/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Scan all files inside the pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scan all files inside the components directory
    "./app/**/*.{js,ts,jsx,tsx}", // (If using Next.js App Router)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
