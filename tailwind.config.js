/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        green: "#7DB834",
        greenText: "#7DB834",
        blueBack: "#1D73AF",
        blueFore: "#2182C6",
        header: "#005164"
        

      },
      fontFamily:{
        poppins: ["Poppins","sans-serif"],
        Kumbh: ["Kumbh Sans","sans-serif"],
        baloo: ["Baloo Bhaijaan 2","sans-serif"],
      }
    },
  },
  plugins: [],
}
