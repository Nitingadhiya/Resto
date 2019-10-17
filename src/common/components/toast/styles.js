import { Color, Images, Matrics, Fonts, ApplicationStyles } from '../../styles';
export default Styles = {
  ...ApplicationStyles,
  signInView: {
    paddingHorizontal: Matrics.ScaleValue(15),
    backgroundColor: Color.paleGrey,
    height: Matrics.ScaleValue(130),
  },
  signInTextView: {
    height: Matrics.ScaleValue(85),
    justifyContent: 'center'
  },
  signInText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(32),
    color: Color.darkThree
  },
  tabView: {
    height: Matrics.ScaleValue(49),
    width: '100%',
    flexDirection: 'row',
  },
  tabTouchView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchopacityBorder: {
    height: Matrics.ScaleValue(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBorder: {
    borderBottomWidth: 2,
    borderBottomColor: Color.lightRed,
  },
  tabText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(14),
    lineHeight: Matrics.ScaleValue(28),
    color: Color.darkThree
  },
  selectedTab: {
    fontFamily: Fonts.type.RubikMedium,
  },
  textViewStyle: {
    flex: 1,
    marginHorizontal: Matrics.ScaleValue(15),
    marginTop: Matrics.ScaleValue(30),
  },
};
