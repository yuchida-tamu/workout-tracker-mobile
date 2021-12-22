const BASE = {
  PRIMARY: '#BB72DE',
  SECONDARY: '#09CBB4',
  TERTIARY: '#FFDA56',
  GRAY: '#888888',
  BLACK: '#313131',
  WHITE: '#fff',
};

export const COLOR = {
  ...BASE,
  text: {
    BLACK: BASE.BLACK,
    WHITE: BASE.WHITE,
  },
  bg: {
    gradient: {
      LIGHT_GREEN: '#92FF96',
      TEAL: '#09CBB4',
      ORANGE: '#FF8B49',
      YELLOW: '#FFDA56',
      PURPLE: BASE.PRIMARY,
      LIGHT_BLUE: '#95FFF2',
    },
  },
};
