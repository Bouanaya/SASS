 /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '2rem'
      }
    },

    extend: {
      colors: {
        Blue: '#1E5EFF'
      }
    }
  },
  plugins: []
}