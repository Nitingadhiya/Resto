import {
  Color,
  Images,
  Matrics,
  Fonts,
  ApplicationStyles
} from "../../../common/styles";
export default (Styles = {
  ...ApplicationStyles,
  spaceView: {
    paddingHorizontal: Matrics.ScaleValue(20),
    paddingVertical: Matrics.ScaleValue(10)
  },
  titleText: {
    fontSize: Matrics.ScaleValue(20),
    fontFamily: Fonts.type.RubikMedium,
    lineHeight: Matrics.ScaleValue(28),
    color: Color.charcoalGrey,
    textAlign: "center",
    marginBottom: Matrics.ScaleValue(15)
  },
  msgStyle: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Rubik,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Matrics.ScaleValue(45)
  },
  btnFirst: {
    borderRightWidth: 1,
    borderColor: Color.greyishBrown30
  },
  btnView: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: Color.greyishBrown30
  },
  leaveText: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium,
    lineHeight: Matrics.ScaleValue(24),
    color: Color.darkRed,
    textAlign: "center"
  },
  cancelText: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium,
    lineHeight: Matrics.ScaleValue(24),
    color: Color.slateGrey,
    textAlign: "center"
  }
});
module.exports = Styles;
