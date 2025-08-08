/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // important for toggle
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#4f46e5',
          dark: '#6366f1',
        },
      },
    },
  },
  plugins: [],
}
