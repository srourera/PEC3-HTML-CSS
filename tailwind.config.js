module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#424242',
        'gray-light': '#b9b9b9',
        'gray-extra-light': '#dcdcdc'
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      },
      inset: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      zIndex: {
        '-1': '-1',
      },
      maxHeight: {
        '1280px': '1280px'
      },
      spacing: {
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '50px': '50px',
        '75px': '75px',
        '90px': '90px',
        '115px': '115px'
      }
    },
  },
  variants: {},
  plugins: [],
}
