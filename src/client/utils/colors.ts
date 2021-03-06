export const colors = {
  turquoise: '#1ABC9C',
  greenSea: '#16A085',
  emerald: '#2ECC71',
  nephritis: '#27AE60',
  peterRiver: '#3498DB',
  belizeHole: '#2980B9',
  amethyst: '#9B59B6',
  wisteria: '#8E44AD',
  wetAsphalt: '#34495E',
  midnightBlue: '#2C3E50',
  sunFlower: '#F1C40F',
  orange: '#F39C12',
  carrot: '#E67E22',
  pumpkin: '#D35400',
  alizarin: '#E74C3C',
  pomegranate: '#C0392B',
  clouds: '#ECF0F1',
  silver: '#BDC3C7',
  concrete: '#95A5A6',
  asbestos: '#7F8C8D',
  white: '#fff',
  dark: '#333333',
  darker: '#222222',
  darkest: '#000000',
}
export const darkTheme = {
  background: colors.darker,
  inputBackground: colors.dark,
  text: colors.clouds,
  shadow: colors.asbestos,
  code: {
    color: colors.sunFlower,
    background: colors.darkest,
    hover: colors.carrot,
  },
  link:{
    normal: colors.belizeHole,
    hover: colors.peterRiver
  } ,
  hoverMenu:{
    normal: colors.belizeHole,
    hover: colors.peterRiver,
    background: colors.darkest,
  } ,
  pellet: { background: colors.amethyst, text: colors.darkest },
  checkMark:{
    color: colors.nephritis
  },
  checkFail:{
    color: colors.pomegranate
  },
  unavailable:{
    color: colors.concrete
  }
}
