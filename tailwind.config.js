module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/*.html'],
  theme: {
    extend: {
      textColor: {
        'gray-dark': '#424242',
        'gray-light': '#b9b9b9'
      },
      flex: {
        '25': '0 0 25%',
        '50': '0 0 50%',
        '75': '0 0 75%',
        '100': '0 0 100%',
      },
      inset: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      zIndex: {
        '-1': '-1',
      },
      maxWidth: {
        'screen-h-10': '10vh',
        'screen-h-20': '20vh',
        'screen-h-30': '30vh',
        'screen-h-40': '40vh',
        'screen-h-50': '50vh',
        'screen-h-60': '60vh',
        'screen-h-70': '70vh',
        'screen-h-80': '80vh',
        'screen-h-90': '90vh',
        'screen-w-10': '10vw',
        'screen-w-20': '20vw',
        'screen-w-30': '30vw',
        'screen-w-40': '40vw',
        'screen-w-50': '50vw',
        'screen-w-60': '60vw',
        'screen-w-70': '70vw',
        'screen-w-80': '80vw',
        'screen-w-90': '90vw'
      },
      spacing: {
        '10-px': '10px',
        '15-px': '15px',
        '20-px': '20px',
        '25-px': '25px',
        '50-px': '50px',
        '75-px': '75px',
        '90-px': '90px',
        '115-px': '115px'
      }
    },
  },
  variants: {},
  plugins: [],
}
