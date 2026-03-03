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
        // HiLine Inspired - Light SaaS with Teal
        'bg-deep': '#ffffff',
        'bg-primary': '#f8fafb',
        'bg-card': '#ffffff',
        'bg-card-hover': '#f0f5f4',
        'accent': '#0d9488',
        'accent-hero': '#0d9488',
        'accent-light': '#14b8a6',
        'accent-dark': '#0f766e',
        'accent-muted': 'rgba(13, 148, 136, 0.08)',
        'text-white': '#0f172a',
        'text-light': '#475569',
        'text-muted': '#94a3b8',
        'border': '#e2e8f0',
        'success': '#10b981',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
