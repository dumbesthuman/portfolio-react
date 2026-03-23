/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#f0ede6',
        acid: '#c8f135',
        rust: '#e8572a',
        mist: '#8a8a8a',
        dim: '#1a1a1a',
        border: '#242424',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
