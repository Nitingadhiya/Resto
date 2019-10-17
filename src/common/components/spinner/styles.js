import { Color, Matrics, Fonts, ApplicationStyles } from "../../styles";

export default (Styles = {
  ...ApplicationStyles,
  spinnerView: {
    width: "100%",
    height: "60%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    top: "20%"
  }
});
module.exports = Styles;
