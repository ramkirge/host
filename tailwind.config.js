/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimg': "url('./assets/file.png')",
        'bgteam': "url('./assets/baja3.jpg')",
        
      }
    },
  },
  plugins: [],
}

