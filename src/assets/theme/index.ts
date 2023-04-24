const theme = {
  light: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A',
    fontPrimaryColor: '#484848',
    fontSecondaryColor: '#222',
    boxShadowTransition: 'transition: box-shadow .2s ease',

    mixin: {
      boxShadow: `transition: box-shadow .2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }`,
    },
  },
}

export default theme
