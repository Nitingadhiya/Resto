import {Color, Matrics, Fonts, ApplicationStyles} from '../../../common/styles';

export default Styles = {
  ...ApplicationStyles,
  contentViewStyle: {
    //backgroundColor: Color.white,
    paddingHorizontal: Matrics.ScaleValue(15),
    //  marginTop: Matrics.ScaleValue(60)
  },
  textInput: {
    height: Matrics.ScaleValue(55),
    borderWidth: 1,
    borderColor: Color.paleGreyThree,
    fontSize: Matrics.ScaleValue(20),
    padding: 0,
    marginBottom: Matrics.ScaleValue(3),
    paddingLeft: Matrics.ScaleValue(30),
    fontFamily: Fonts.type.Rubik,
    paddingRight: Matrics.ScaleValue(45),
    borderRadius: Matrics.ScaleValue(30),
  },
  phoneInput: {
    height: Matrics.ScaleValue(55),
    borderWidth: 1,
    borderColor: Color.paleGreyThree,
    fontSize: Matrics.ScaleValue(18),
    padding: 0,
    marginBottom: Matrics.ScaleValue(3),
    marginTop: 0,
    paddingLeft: Matrics.ScaleValue(8),
    fontFamily: Fonts.type.Rubik,
    paddingRight: Matrics.ScaleValue(45),
    borderRadius: Matrics.ScaleValue(8),
    borderBottomWidth: 0,
    backgroundColor: Color.white,
  },
  signInButton: {
    marginHorizontal: Matrics.ScaleValue(15),
    //marginTop: Matrics.ScaleValue(25),
    marginBottom: Matrics.ScaleValue(10),
    backgroundColor: '#006b70',
  },
  placeholderStyle: {
    lineHeight: Matrics.ScaleValue(24),
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(18),
  },
  iconViewStyles: {
    position: 'absolute',
    zIndex: 1,
    top: Matrics.ScaleValue(18),
    marginLeft: Matrics.ScaleValue(8),
  },
  textInputView: {marginBottom: Matrics.ScaleValue(10)},
  tabMainView: {
    flexDirection: 'row',
    marginVertical: Matrics.ScaleValue(15),
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: Matrics.ScaleValue(5),
  },
  tabView: {
    height: Matrics.ScaleValue(40),
    width: (Matrics.screenWidth - Matrics.ScaleValue(60)) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },
  activeTab: {
    borderBottomColor: Color.white,
  },
  activeTabText: {
    color: Color.white,
  },
  tabText: {
    color: Color.white,
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(14),
  },
};
module.exports = Styles;
