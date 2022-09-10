module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#040714',
        secondary: '#f9f9f9',
        cta: '#0063e5',
        'cta-hover': '#016cf9',
        'cta-secondary': '#000',
        'cta-secondary-hover': '#f9f9f9',
        silver: '#c0c0c0',
      },
      spacing: {
        'header-small': '52px',
        'header-large': '70px',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(farthest-side at 70% 20%, transparent, #040714)',
      },
    },
  },
  plugins: [],
};
