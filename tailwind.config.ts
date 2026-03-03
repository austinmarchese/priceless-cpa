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
        // Full Send Inspired - Bold Dark with Electric Orange
        'bg-deep': '#0a0a0a',
        'bg-primary': '#111111',
        'bg-card': '#1a1a1a',
        'bg-card-hover': '#222222',
        'accent': '#ff6b35',
        'accent-hero': '#ff6b35',
        'accent-light': '#ff8c5a',
        'accent-muted': 'rgba(255, 107, 53, 0.12)',
        'text-white': '#ffffff',
        'text-light': '#b0b0b0',
        'text-muted': '#666666',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(.17,.67,.35,.96) forwards',
        'pulse': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
