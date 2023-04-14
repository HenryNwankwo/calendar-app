module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '350px',
      md: '547px',
      lg: '768px',
      xl: '1024px',
      '2xl': '1680px',
    },
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
        'txt-color': 'hsla(300, 1%, 38%, 1)',
        'icon-color': '#616061',
      },
      padding: {
        4.5: '18px',
      },
      height: {
        18: '71px',
        41: '165px',
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        31: '124px',
        33: '135px',
        34: '139px',

        61: '243px',
      },
      minHeight: {
        44: '176px',
      },
      spacing: {
        17: '72px',
        18: '75px',
        57: '228px',
        106: '425px',
        '1/2': '50%',
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'hover'],
      borderColor: ['checked', 'hover'],
      border: ['hover'],
      cursor: ['hover', 'focus'],
      a: ['active'],
      height: ['hover'],
      width: ['hover'],
      padding: ['hover'],
      color: ['hover'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
