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
        // Exact colors from pricelesscpa.com
        'bg-deep': '#06080e',
        'bg-primary': '#0b0e18',
        'bg-card': '#0f1222',
        'bg-card-hover': '#141830',
        'gold': '#c4a24e',
        'gold-hero': '#9b824e',
        'gold-light': '#dfc06a',
        'gold-muted': 'rgba(196, 162, 78, 0.15)',
        'text-white': '#f0ede6',
        'text-light': '#c8c5bc',
        'text-muted': '#7a7870',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(.23,1,.32,1) forwards',
        'pulse-glow': 'pulseGlow 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(196, 162, 78, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(196, 162, 78, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
