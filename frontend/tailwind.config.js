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
        xs: ['0.625rem', { lineHeight: '0.875rem' }], // 10px
        sm: ['0.75rem', { lineHeight: '2rem' }], // 12px
        base: ['0.875rem', { lineHeight: '2rem' }], // 14px
        lg: ['1rem', { lineHeight: '1.75rem' }], // 16px
        xl: ['1.125rem', { lineHeight: '1.5rem' }], // 18px
        '2xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '3xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '5xl': ['2rem', { lineHeight: '1' }], // 36px
        '6xl': ['2.5rem', { lineHeight: '1' }], // 48px
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


