/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        romantic: {
          // tailwind.config.js
colors: {
  romantic: {
 bg: '#120C1F',       // Deep Black-Currant
    surface: '#1E142D',  // Moody Plum
    plum: '#E2E0EF',     // Lavender-Gray text
    rose: '#FF2D75',     // Hot Pink (Glow)
    lilac: '#8A2BE2',    // Electric Purple
    wine: '#3E102F',   // Soft Purple Glow  
  }
} // Dusty Rose Cream
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};