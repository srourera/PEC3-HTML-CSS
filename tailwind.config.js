module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/*.html'],
  theme: {
    extend: {
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
      }
    },
  },
  variants: {},
  plugins: [],
}
