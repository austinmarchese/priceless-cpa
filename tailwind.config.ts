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
        // Moss Adams Inspired - Enterprise Navy Blue
        'bg-deep': '#ffffff',
        'bg-primary': '#f7f8fa',
        'bg-card': '#ffffff',
        'bg-card-hover': '#f0f2f5',
        'accent': '#002F6C',
        'accent-hero': '#002F6C',
        'accent-light': '#1a4a8a',
        'accent-muted': 'rgba(0, 47, 108, 0.08)',
        'text-white': '#1a1a2e',
        'text-light': '#4a4a5a',
        'text-muted': '#8a8a9a',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
