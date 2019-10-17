import { ifIphoneX } from "react-native-iphone-x-helper";
import { Color, Images, Matrics, Fonts, ApplicationStyles } from "../../styles";
export default (Styles = {
  ...ApplicationStyles,
  btnStyle: {
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Color.paleGrey,
    height: Matrics.ScaleValue(55),
    justifyContent: "center"
  },
  customViewCont: {
    height: Matrics.ScaleValue(45)
  },
  btnTextStyle: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(16),
    lineHeight: Matrics.ScaleValue(24)
  },
  cancelText: {
    color: Color.lightRed,
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(14)
  },
  customActionView: {
    marginBottom: 15
  },
  mainViewCenter: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start"
    //backgroundColor: "rgba(0,0,0,0.5)"
  },
  bgMaintain: {
    backgroundColor: Color.white,
    margin: Matrics.ScaleValue(15),
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 4,
    borderRadius: Matrics.ScaleValue(5),
    ...ifIphoneX(
      {
        marginTop: Matrics.ScaleValue(90)
      },
      { marginTop: Matrics.ScaleValue(50) }
    )
  },
  bodyModalContent: {
    padding: Matrics.ScaleValue(10)
  },
  headerView: {
    height: Matrics.ScaleValue(40),
    borderBottomWidth: 1,
    borderBottomColor: Color.paleGreyThree,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  headerText: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Rubik,
    flex: 1,
    textAlign: "center",
    marginRight: Matrics.ScaleValue(10)
  },
  closeModalStyle: {
    justifyContent: "flex-start",
    padding: Matrics.ScaleValue(7),
    flexDirection: "row",
    alignItems: "center"
  },
  flagStyles: {
    width: Matrics.ScaleValue(18),
    height: Matrics.ScaleValue(15),
    marginRight: Matrics.ScaleValue(5),
    borderWidth: 1,
    borderColor: Color.paleGreyTwo
  }
});
