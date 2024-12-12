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
        'xs': '0.75vw',   // Extra small text, smallest
        'sm': '0.875vw',  // Small text
        'md': '1vw',    // Base font size
        'lg': '1.25vw',   // Large text
        'xl': '1.5vw',    // Extra large text
        '2xl': '2vw',     // 2x Extra large text
        '3xl': '2.5vw',   // 3x Extra large text
        '4xl': '4.5vw',     // 4x Extra large text
        '5xl': '5.5vw',
        '6xl': '7vw', // 5x Extra large text, biggest
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


