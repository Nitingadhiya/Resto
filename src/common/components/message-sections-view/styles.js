import { Color, Matrics, Fonts } from "../../styles";
import { Helper } from "../../../util";
import { Platform } from "react-native";

export default Styles = {
  dateText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(10)
  },
  innerMessageBody: {
    padding: Matrics.ScaleValue(5),
    margin: Matrics.ScaleValue(5),
    marginLeft: 0,
    borderRadius: Matrics.ScaleValue(5),
    maxWidth: "80%"
  },
  senderName: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(12),
    marginRight: Matrics.ScaleValue(30),
    color: Color.messageCode
  },
  messageText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(16),
    marginRight: Matrics.ScaleValue(50)
  },
  dateView: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 3,
    right: 5
  },
  renderHeaderView: {
    padding: Matrics.ScaleValue(5),
    backgroundColor: Color.messageCode,
    alignSelf: "center",
    borderRadius: Matrics.ScaleValue(5),
    marginTop: Matrics.ScaleValue(5)
  },
  textTitle: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(12),
    textAlign: "center",
    color: Color.white
  },
  messageBody: {
    width: Matrics.screenWidth,
    paddingHorizontal: Matrics.ScaleValue(10)
  },
  headerDate: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(12),
    textAlign: "center",
    color: Color.white
  },
  renderHeaderViewStyles: {
    alignItems: "center",
    padding: Matrics.ScaleValue(5),
    backgroundColor: Color.messageCode,
    position: "absolute",
    alignSelf: "center",
    borderRadius: Matrics.ScaleValue(5),
    zIndex: 1,
    top: Matrics.ScaleValue(5)
  },
  bottomView: {
    width: Matrics.screenWidth,
    backgroundColor: Color.paleGreyTwo,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: Matrics.ScaleValue(5)
  },
  sendButton: {
    marginHorizontal: Matrics.ScaleValue(5),
    marginVertical: Matrics.ScaleValue(5),
    alignItems: "center",
    justifyContent: "center",
    width: Matrics.ScaleValue(40),
    height: Matrics.ScaleValue(40),
    backgroundColor: Color.darkRed,
    borderRadius: Matrics.ScaleValue(20)
  },
  textInput: {
    backgroundColor: Color.white,
    minHeight: Matrics.ScaleValue(45),
    maxHeight: Matrics.ScaleValue(100),
    width: Matrics.screenWidth - Matrics.ScaleValue(55),
    marginLeft: Matrics.ScaleValue(5),
    marginVertical: Matrics.ScaleValue(5),
    padding: 0,
    paddingHorizontal: Matrics.ScaleValue(10),
    paddingTop:
      Platform.OS === "ios" ? Matrics.ScaleValue(12) : Matrics.ScaleValue(8),
    paddingBottom:
      Platform.OS === "ios" ? Matrics.ScaleValue(5) : Matrics.ScaleValue(5),
    borderRadius: Matrics.ScaleValue(10),
    fontSize: Matrics.ScaleValue(18),
    fontFamily: Fonts.type.Rubik,
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center"
  }
};
module.exports = Styles;
