const theme: any = {
  light: {
    label: '暗色',
    backgroundColor: '#fff',
    primaryColor: '#ff385c',
    secondaryColor: '#00848A',
    fontPrimaryColor: '#484848',
    fontSecondaryColor: '#222',
    fontTertiaryColor: '#717171',
    fontPrimaryBackgroundColor: '#f5f5f5',
    boxShadowPrimaryColor: 'rgba(0, 0, 0, .12)',
    boxShadowSecondaryColor: 'rgba(0, 0, 0, .08)',
    boxShadowTertiaryColor: 'rgba(0, 0, 0, .05)',
    mixin: {
      boxShadow: `transition: box-shadow .2s ease;
                  &:hover {
                    box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
                  }`,
    },
  },
  dark: {
    label: '明色',
    backgroundColor: '#141414',
    primaryColor: '#e84749',
    secondaryColor: '#00848A',
    fontPrimaryColor: '#fff',
    fontSecondaryColor: 'rgba(255, 255, 255, .8)',
    fontTertiaryColor: 'rgba(255, 255, 255, .8)',
    fontPrimaryBackgroundColor: 'rgba(255, 255, 255, .12)',
    boxShadowPrimaryColor: 'rgba(255, 255, 255, .3)',
    boxShadowSecondaryColor: 'rgba(255, 255, 255, .08)',
    boxShadowTertiaryColor: 'rgba(255, 255, 255, .05)',
    mixin: {
      boxShadow: `transition: box-shadow .2s ease;
                  &:hover {
                    box-shadow: 0 2px 10px rgba(255, 255, 255, .6);
                  }`,
    },
  },
}

export default theme
