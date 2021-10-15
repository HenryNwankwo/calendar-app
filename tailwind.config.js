module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#00B87C',
        'secondary-color': '#1A61DB',
        'error-color': '#F40101',
        'success-color': '#008B5E',
        'success-color2': '#FFB425',
        'line-color': '#F6F6F6',
        'light-green': '#E1FDF4',
        'bg-color-grey': '#F6F6F6',
        'bg-color-white': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
