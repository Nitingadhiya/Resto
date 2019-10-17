import {Dimensions, Platform} from 'react-native';
import {Header} from 'react-navigation-stack';
import {scale} from '../helper/';

const {width, height} = Dimensions.get('window');

const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const Matrics = {
  screenHeight,
  screenWidth,

  navBarHeight: Platform.OS == 'ios' ? (screenHeight == 812 ? 44 : 20) : 0,

  profileImage: scale(100),
  profileImageSmall: scale(80),

  orderImage: scale(70),
  productImage: scale(72),
  categoryView: screenWidth / 4 - 20,
  newShopsImage: screenHeight / 5.5,
  foodImage: scale(70),
  itemImage: scale(90),
  offerViewHeight: screenWidth / 2.5,

  btnHeight:
    Platform.OS === 'ios'
      ? height == 812
        ? scale(120)
        : scale(90)
      : scale(120),

  fontBold: 'bold',
  keyboardShouldPersistTaps: 'handled',
  keyboardVerticalOffset: Header.HEIGHT,
  extraScrollHeight: 10,
  // headerHeight: Header.HEIGHT,
  /* App tour style */
  introPaddingTop: scale(80),
  font20: scale(20),

  ScaleValue: val => {
    return scale(val);
  },
};

export default Matrics;
