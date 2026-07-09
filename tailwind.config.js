/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1128',
          950: '#060a1a',
        },
        royal: {
          DEFAULT: '#2255ff',
          600: '#1e46e0',
          700: '#1a3bc4',
        },
        cyan: {
          glow: '#5eead4',
        },
      },
      boxShadow: {
        glow: '0 0 24px 0 rgba(94, 234, 212, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
