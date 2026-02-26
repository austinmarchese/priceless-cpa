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
        'bg-deep': '#06080e',
        'bg-primary': '#0b0e18',
        'bg-card': '#0f1222',
        'bg-card-hover': '#141830',
        'gold': '#c4a24e',
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
    },
  },
  plugins: [],
}
export default config
