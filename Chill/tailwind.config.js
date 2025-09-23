/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 0, 128, 0.6)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 0, 128, 1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
    },
  },
  plugins: [],
}
