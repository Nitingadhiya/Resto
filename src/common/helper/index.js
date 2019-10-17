import { Dimensions } from 'react-native';

// Grab the window object from that native screen size.
const window = Dimensions.get('window');

// The vertical resolution of the screen.
const screenHeight = window.height;

// The horizontal resolution of the screen.
const screenWidth = window.width;

export const wp = percentage => {
  const value = (percentage * screenWidth) / 100;
  return Math.round(value);
};

// The average resolution of common devices, based on a ~5" mobile screen.
// const baselineHeight = screenHeight < 750 ? 680 : 800;
const baselineHeight = screenHeight == 812 ? 800 : 680;

// Scales the item based on the screen height and baselineHeight
export const scale = value =>
  Math.round((screenHeight / baselineHeight) * value);

export default null;
