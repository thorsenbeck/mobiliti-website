/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf8',
          100: '#fdf9ed',
          200: '#faf3d9',
          300: '#f5e9be',
          400: '#edd99a',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cddccd',
          300: '#a8c4a8',
          400: '#7ea67e',
          500: '#5d8a5d',
          600: '#4a7050',
          700: '#3c5a41',
          800: '#324936',
          900: '#293c2d',
        },
        earth: {
          50: '#faf6f1',
          100: '#f3ebe0',
          200: '#e6d4bc',
          300: '#d4b592',
          400: '#be9268',
          500: '#a97749',
          600: '#8f6039',
          700: '#764d2e',
          800: '#614028',
          900: '#513523',
        },
        warm: {
          50: '#fdf8f3',
          100: '#faeee0',
          200: '#f4dabb',
          300: '#ecc08e',
          400: '#e29f5c',
          500: '#d98535',
          600: '#c96e27',
          700: '#a75822',
          800: '#874722',
          900: '#6e3c1f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
