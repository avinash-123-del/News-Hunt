/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scale: {
          '80%': { scale:('80%') },
          '90%': { scale:('90%') },
          '100%': { scale:('100%') },
        }
      },
      animation: {
        ticker: 'ticker 20s linear infinite',
        scale: 'scale 8s linear infinite'
      },
      fontFamily:{
        'newshead': ['Josefin Sans', 'sans-serif'],
        'newscontent': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
