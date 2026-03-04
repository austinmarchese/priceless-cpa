import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c4a24e',
          light: '#dfc06a',
          dark: '#9b824e',
          muted: 'rgba(196, 162, 78, 0.15)',
        },
        dark: {
          bg: '#06080e',
          card: '#0f1222',
          'card-hover': '#141830',
          secondary: '#0b0e18',
        },
        text: {
          primary: '#f0ede6',
          secondary: '#c8c5bc',
          muted: '#7a7870',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '800' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float-delayed 10s ease-in-out infinite 2s',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'draw': 'draw 1.5s ease-out forwards 0.5s',
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-2deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        draw: {
          from: { strokeDasharray: '0 1000' },
          to: { strokeDasharray: '1000 0' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(6px)', opacity: '0' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196, 162, 78, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(196, 162, 78, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
