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
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}
export default config
