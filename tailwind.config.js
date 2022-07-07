/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
      'fade-in-left': {
        '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
        },
        '100%': {
            opacity: '1',
            transform: 'translateX(0)'
        },
    },
    'fade-in-down': {
      '0%': {
          opacity: '0',
          transform: 'translateY(-10px)'
      },
      '100%': {
          opacity: '1',
          transform: 'translateY(0)'
      },
  },
    },
    animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
    },
    },
  },
  plugins: [],
}
