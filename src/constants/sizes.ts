import { Dimensions } from 'react-native';

export const SIZES = {
  ICON_HEIGHT: 128, //this is the size of profile picture
  BORDER_RADIUS: 16,
  font: {
    XSMALL: 12,
    SMALL: 16,
    REGULAR: 24,
    LARGE: 36,
    XLARGE: 56,
  },
  icon: {
    small: 24,
    medium: 32,
    large: 48,
  },
  card: {
    xsmall: 96,
    small: 120,
    medium: 144,
    large: 200,
    xLarge: 288,
  },
};

export enum BUTTON_SIZE {
  SMALL = 128,
  MEDIUM = 256,
  LARGE = 312,
}

export const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
