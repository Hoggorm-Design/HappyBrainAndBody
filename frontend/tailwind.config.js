const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1440px',
      '4xl': '1600px',
      '5xl': '1920px',
      '6xl': '2560px',
    },
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '2.5rem' }], // 14px
        base: ['1rem', { lineHeight: '2.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '2rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
      },
      colors: {
        'custom-teal': '#5D92A8',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',   // Small shadow
        DEFAULT: '0 2px 4px var(--tw-shadow-color)', // Default shadow
        lg: '0 8px 16px var(--tw-shadow-color)', // Large shadow
      },
      backgroundImage: {
        hero: "url('./assets/hero2.jpeg')",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
      );
    }),
  ],
};


