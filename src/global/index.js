import { Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Matrics } from "../common/styles";

const GlobalVar = {
  apiKey: "AIzaSyAk8_09_s4YD5AjGobzjNJKu81GPu--Wig", //"AIzaSyCeGzkqAkLd9Pt9OsYYxUJ2GUaHtKUuuAU",
  toastTimeout: 2000,
  requestTimeout: 35000,
  responseInvalidCode: 422,
  responseUnauthorizedCode: 401,
  responseNotFound: 404,
  responseToManyRequest: 429,
  responseSuccess: 200,
  responseInternalServerCode: 500,
  failedMsg: "Poor network connection or server not responding!",
  requestFailedMsg: "Request Failed",
  imageCompressionRatio: 0.7,
  validateEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email);
  },
  keyboardBehavior() {
    return Platform.OS === "ios" ? "padding" : null;
  },
  verticalOffset() {
    if (isIphoneX()) {
      return Matrics.ScaleValue(55) + 30;
    } else {
      return Matrics.ScaleValue(55) + 10;
    }
  }
};

export default GlobalVar;
