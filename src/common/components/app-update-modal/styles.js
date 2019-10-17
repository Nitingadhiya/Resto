import { Color, Images, Matrics, Fonts, ApplicationStyles } from "../../styles";
export default (Styles = {
  ...ApplicationStyles,
  spaceView: {
    paddingHorizontal: Matrics.ScaleValue(20),
    paddingVertical: Matrics.ScaleValue(10)
  },
  // titleText: {
  //   fontSize: Matrics.ScaleValue(20),
  //   fontFamily: Fonts.type.RubikMedium,
  //   lineHeight: Matrics.ScaleValue(28),
  //   color: Color.charcoalGrey,
  //   textAlign: "center",
  //   marginBottom: Matrics.ScaleValue(15)
  // },
  issueText: {
    fontSize: Matrics.ScaleValue(12),
    fontFamily: Fonts.type.Rubik,
    //lineHeight: Matrics.ScaleValue(28),
    color: Color.charcoalGrey,
    textAlign: "center",
    marginBottom: Matrics.ScaleValue(15)
  },
  msgStyle: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium,
    lineHeight: Matrics.ScaleValue(24),
    color: Color.charcoalGrey,
    textAlign: "center"
  },
  modalViewContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center"
  },
  viewContainer: {
    backgroundColor: Color.white,
    borderRadius: Matrics.ScaleValue(15),
    margin: Matrics.ScaleValue(45),
    paddingTop: Matrics.ScaleValue(10)
  },
  btnStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: Matrics.ScaleValue(45),
    borderTopWidth: 1,
    borderColor: Color.paleGrey
  },
  btnFirst: {
    borderRightWidth: 1,
    borderColor: Color.greyishBrown30
  },
  btnView: {
    borderTopWidth: 1,
    borderColor: Color.greyishBrown30
  },
  btnUpdateView: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: Color.greyishBrown30
  },
  btnText: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Rubik,
    lineHeight: Matrics.ScaleValue(24),
    color: Color.darkRed90,
    textAlign: "center"
  },
  cancelText: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium,
    lineHeight: Matrics.ScaleValue(24),
    color: Color.darkRed90,
    textAlign: "center"
  }
});
module.exports = Styles;
