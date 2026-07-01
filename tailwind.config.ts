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
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8EDF4',
          100: '#C5D0E3',
          200: '#91A4C3',
          300: '#5D78A3',
          400: '#3A5585',
          500: '#0B1F3A',
          600: '#091929',
          700: '#071420',
          800: '#050E17',
          900: '#03090E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FDF8E8',
          100: '#F9EEC3',
          200: '#F2DB87',
          300: '#EBC84B',
          400: '#D4AF37',
          500: '#B08E22',
          600: '#8C6E18',
          700: '#684F0F',
          800: '#442F07',
          900: '#201002',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#333333',
            a: { color: '#D4AF37' },
            h1: { fontFamily: 'var(--font-playfair)' },
            h2: { fontFamily: 'var(--font-playfair)' },
            h3: { fontFamily: 'var(--font-playfair)' },
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
