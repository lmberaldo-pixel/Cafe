/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#1B4332',
          light: '#E5D5C5',
          gold: '#C19A6B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slowZoom 10s ease-out forwards',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
