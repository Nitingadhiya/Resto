import { Color, Matrics, Fonts } from "../../styles";

export default Styles = {
  rowView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Color.paleGreyThree,
    padding: Matrics.ScaleValue(10),
    paddingVertical: Matrics.ScaleValue(15)
  },
  onlineView: {
    height: Matrics.ScaleValue(10),
    width: Matrics.ScaleValue(10),
    backgroundColor: "transparent",
    alignSelf: "center",
    borderRadius: Matrics.ScaleValue(5),
    position: "absolute",
    bottom: Matrics.ScaleValue(0),
    right: Matrics.ScaleValue(-2),
    zIndex: 1
  },
  // imageView: {
  //   marginRight: Matrics.ScaleValue(10),
  //   width: Matrics.ScaleValue(50),
  //   height: Matrics.ScaleValue(50),
  //   borderRadius: Matrics.ScaleValue(25),
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  imageView: { paddingRight: Matrics.ScaleValue(10) },
  userImage: {
    width: Matrics.ScaleValue(50),
    height: Matrics.ScaleValue(50),
    borderRadius: Matrics.ScaleValue(25),
    borderWidth: 2,
    borderColor: Color.paleGrey
  },
  listMessageView: { justifyContent: "center", flex: 1 },
  userNameText: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(16),
    color: Color.charcoalGrey
  },
  companyText: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(12),
    color: Color.charcoalGrey
  },
  messageText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(12),
    color: Color.slateGrey
  },
  dateText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(10),
    color: Color.slateGrey
  },
  dateView: {
    marginTop: Matrics.ScaleValue(12)
  },
  imageText: {
    fontFamily: Fonts.type.RubikMedium,
    fontSize: Matrics.ScaleValue(30),
    color: Color.white
  },
  unreadCountView: {
    backgroundColor: Color.darkRed,
    height: Matrics.ScaleValue(15),
    width: Matrics.ScaleValue(15),
    borderRadius: Matrics.ScaleValue(7),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: Matrics.ScaleValue(5)
  },
  unreadCountText: {
    fontFamily: Fonts.type.Rubik,
    fontSize: Matrics.ScaleValue(10),
    color: Color.white
  }
};
module.exports = Styles;
