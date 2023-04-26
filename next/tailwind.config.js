/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hBrown: "#2A1D13",
        hOrange: "#F78C15",
        hlOrange: "#FFC31F",
        hYellow: "#FFEA3E",
        hBlue: "#26AEE7",
        hBeige: "#E9D6AB",
      },
    },
  },
  plugins: [],
};
