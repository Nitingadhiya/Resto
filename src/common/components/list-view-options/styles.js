import { Color, Images, Matrics, Fonts, ApplicationStyles } from "../../styles";
export default (Styles = {
  totalContributeView: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    justifyContent: "space-between",
    paddingVertical: Matrics.ScaleValue(18),
    paddingHorizontal: Matrics.ScaleValue(15),
    borderBottomWidth: 1,
    borderBottomColor: Color.paleGreyTwo
  },
  totalContText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(16),
    lineHeight: Matrics.ScaleValue(20),
    color: Color.darkThree
  },
  verifiedView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  verifiedText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(12),
    lineHeight: Matrics.ScaleValue(16),
    color: Color.tealishGreen,
    marginRight: Matrics.ScaleValue(8),
    marginLeft: Matrics.ScaleValue(4)
  },
  unverifiedText: {
    color: Color.white
  },
  verifiedInnerView: {
    flexDirection: "row"
  },
  unVerifiedInnerView: {
    backgroundColor: Color.darkRed,
    borderRadius: Matrics.ScaleValue(5)
  }
});
module.exports = Styles;
