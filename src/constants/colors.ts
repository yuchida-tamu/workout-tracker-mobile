const BASE = {
  PRIMARY: '#BB72DE',
  SECONDARY: '#1DDEC7',
  TERTIARY: '#FFDA56',
  LIGHT_GRAY: '#CFCFCF',
  GRAY: '#888888',
  BLACK: '#313131',
  WHITE: '#fff',
};

export const COLOR = {
  ...BASE,
  text: {
    BLACK: BASE.BLACK,
    WHITE: BASE.WHITE,
    WARNING: '#FF5656',
  },
  bg: {
    DARK_PRIMARY: '#683780',
    DARK_SECONDARY: '#19BDA9',
    gradient: {
      LIGHT_GREEN: '#92FF96',
      TEAL: '#09CBB4',
      ORANGE: '#FF8B49',
      YELLOW: '#FFDA56',
      PURPLE: BASE.PRIMARY,
      LIGHT_BLUE: BASE.SECONDARY,
    },
  },
  button: {
    WARNING: '#FF5656',
  },
  graph: {
    category: {
      ARM: '#FF5733',
      BACK: '#EBA729',
      SHOULDERS: '#8BBA27',
      LEGS: '#37A548',
      CHEST: '#30BD9C',
      ABS: '#3E98CF',
      FULL_BODY: '#A651DE',
      OTHER: '#DD58A2',
    },
  },
};
