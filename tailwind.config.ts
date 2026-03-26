import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#E0F7FA',
          teal: '#80DEEA',
          dark: '#006064'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
