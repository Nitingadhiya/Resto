import { Color, Matrics, Fonts } from "../../styles";

export default (Styles = {
  noOfferView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noOfferText: {
    fontSize: Matrics.ScaleValue(14),
    fontFamily: Fonts.type.RubikBold,
    color: Color.black70
  }
});
module.exports = Styles;
