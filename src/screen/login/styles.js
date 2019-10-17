import {ifIphoneX} from 'react-native-iphone-x-helper';
import {Color, Matrics, Fonts, ApplicationStyles} from '../../common/styles';
export default Styles = {
  ...ApplicationStyles,
  contentContainerStyle: {
    flex: 1,
  },
  textViewStyle: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  signupTouch: {alignSelf: 'center', marginVertical: Matrics.ScaleValue(10)},
  textStyle: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(16),
    textAlign: 'center',
    color: Color.darkThree,
    lineHeight: Matrics.ScaleValue(24),
  },
  imageViewStyles: {
    //paddingHorizontal: Matrics.ScaleValue(15),
    //paddingVertical: Matrics.ScaleValue(20),
    ...ifIphoneX(
      {
        marginTop: Matrics.ScaleValue(50),
      },
      {
        marginTop: Matrics.ScaleValue(5),
      },
    ),
    // marginBottom: Matrics.ScaleValue(50),
    // backgroundColor: Color.white,
    //borderRadius: Matrics.ScaleValue(100),
    alignSelf: 'center',
    // width: Matrics.ScaleValue(200),
    // height: Matrics.ScaleValue(200),
  },
  imageLogo: {
    width: Matrics.ScaleValue(220),
    height: Matrics.ScaleValue(220),
    alignSelf: 'center',
  },
  frontBtmView: {
    paddingHorizontal: Matrics.ScaleValue(15),
    flex: 1,
  },
  logoText: {
    fontFamily: Fonts.type.RubikBold,
    fontSize: Matrics.ScaleValue(40),
    color: Color.white,
    textAlign: 'center',
  },
  welcomeBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  welcomeText: {
    fontFamily: Fonts.type.RubikBold,
    fontSize: Matrics.ScaleValue(18),
    color: Color.white,
    textAlign: 'center',
  },
  welcomeSubText: {
    fontSize: Matrics.ScaleValue(16),
    marginTop: Matrics.ScaleValue(10),
  },
  welcomeParaText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(14),
    marginTop: Matrics.ScaleValue(10),
  },
  welcomeTextView: {
    width: '100%',
    alignItems: 'center',
    marginTop: Matrics.ScaleValue(10),
    padding: Matrics.ScaleValue(10),
  },
  bgView: {flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'},
  ScreenLogoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...ifIphoneX(
      {
        marginTop: Matrics.ScaleValue(150),
      },
      {
        marginTop: Matrics.ScaleValue(80),
      },
    ),
  },
};
