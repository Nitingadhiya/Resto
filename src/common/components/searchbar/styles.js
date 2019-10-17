import {
  Color,
  Images,
  Matrics,
  Fonts,
  ApplicationStyles,
} from '../../../common/styles';
export default Styles = {
  ...ApplicationStyles,
  textViewStyle: {
    backgroundColor: Color.black70,
    padding: Matrics.ScaleValue(5),
  },
  contentViewStyle: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    borderRadius: Matrics.ScaleValue(10),
  },
  textInput: {
    fontSize: Matrics.ScaleValue(18),
    padding: 0,
    fontFamily: Fonts.type.Rubik,
    paddingLeft: Matrics.ScaleValue(10),
    height: Matrics.ScaleValue(40),
    width: Matrics.screenWidth - Matrics.ScaleValue(50),
  },
  placeholderStyle: {
    lineHeight: Matrics.ScaleValue(24),
    fontFamily: Fonts.type.RubikLight,
    fontSize: Matrics.ScaleValue(18),
  },
  searchMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Matrics.ScaleValue(10),
    height: Matrics.ScaleValue(40),
    width: '100%',
  },
  filterStyle: {
    padding: Matrics.ScaleValue(12),
    borderRightWidth: 1,
    borderRightColor: Color.paleGrey,
  },
  searchIcon: {
    width: Matrics.ScaleValue(20),
    height: Matrics.ScaleValue(20),
  },
};
module.exports = Styles;
