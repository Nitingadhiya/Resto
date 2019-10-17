import {
  Color,
  Images,
  Matrics,
  Fonts,
  ApplicationStyles
} from "../../../common/styles";
export default (Styles = {
  ...ApplicationStyles,
  flatButton: {
    height: Matrics.ScaleValue(45),
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.darkRed,
    justifyContent: "center"
  },
  flatText: {
    color: Color.white,
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.RubikMedium
  }
});
module.exports = Styles;
