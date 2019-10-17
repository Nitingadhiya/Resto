import {Color, Matrics, Fonts} from '../../../common/styles';

export default styles = {
  contentViewStyle: {
    paddingHorizontal: Matrics.ScaleValue(15),
  },
  signupTouch: {alignSelf: 'center', marginVertical: Matrics.ScaleValue(10)},
  textStyle: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(16),
    textAlign: 'center',
    color: Color.darkThree,
    lineHeight: Matrics.ScaleValue(24),
  },
  orView: {
    height: Matrics.ScaleValue(55),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: Matrics.ScaleValue(10),
    marginTop: 0,
  },
  orSubView: {
    marginHorizontal: Matrics.ScaleValue(15),
  },
  textOr: {
    fontSize: Matrics.ScaleValue(16),
    lineHeight: Matrics.ScaleValue(24),
    fontFamily: Fonts.type.Rubik,
    color: Color.white,
  },
  orViewLine: {
    height: Matrics.ScaleValue(1),
    borderBottomWidth: Matrics.ScaleValue(1),
    borderColor: Color.paleGreyThree,
    flex: 1,
  },
  facebookButton: {
    backgroundColor: Color.denimBlue,
    justifyContent: 'center',
    marginBottom: Matrics.ScaleValue(20),
  },
  googleButton: {
    backgroundColor: Color.darkRed90,
    marginTop: Matrics.ScaleValue(14),
  },
  placeholderStyle: {
    fontFamily: Fonts.type.Rubik,
  },
  forgotView: {
    alignSelf: 'center',
    padding: Matrics.ScaleValue(5),
  },
  forgotPswdTxtStyle: {
    textAlign: 'center',
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(16),
    color: Color.darkRed,
  },
};
