import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import { LoginManager, AccessToken } from "react-native-fbsdk";
// import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {Button} from '../../../common/components';
import {Color, Matrics} from '../../../common/styles';
import {Helper, Uxcam} from '../../../util';
import Styles from './styles';

// GoogleSignin.configure({
//   scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId:
//     '165138052015-6htjqeucusv1bfq103lm2drfdgb8666u.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   // hostedDomain: "roadheroes-1557213099338.firebaseapp.com", // specifies a hosted domain restriction
//   // loginHint: "", // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   // forceConsentPrompt: false, // [Android] if you want to show the authorization prompt at each login.
//   // accountName: "nitin@pinetco.com", // [Android] specifies an account name on the device that should be used
//   // iosClientId:
//   //   "1072949474240-i2lf1h66tp3i7mphi7l2o0193pug2tu0.apps.googleusercontent.com" // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });

class Bottom extends Component {
  state = {};
  // loginWithFacebook() {
  //   Uxcam.logEvent("Login", {
  //     SignIn: "Sign In with Facebook"
  //   });
  //   LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
  //     result => {
  //       if (!result.isCancelled) {
  //         AccessToken.getCurrentAccessToken().then(data => {
  //           const accessToken = data.accessToken.toString();
  //           fetch(
  //             "https://graph.facebook.com/v3.0/me?fields=email,name,picture&access_token=" +
  //               accessToken
  //           )
  //             .then(response => response.json())
  //             .then(json => {
  //               //console.log(json);
  //               // Some user object has been set up somewhere, build that user here
  //             })
  //             .catch(() => {
  //               reject("ERROR GETTING DATA FROM FACEBOOK");
  //             });
  //         });
  //       } else {
  //         // this.setState({ isLoading: false });
  //       }
  //     },
  //     error => {
  //       console.warn("some error occurred!!", error);
  //     }
  //   );
  // }
  // loginWithGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     //console.log(userInfo);
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     //console.log(error);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // dontHaveAccount = signup => (
  //   <TouchableOpacity
  //     onPress={signup}
  //     activeOpacity={1}
  //     style={Styles.signupTouch}
  //   >
  //     <Text style={Styles.textStyle}>
  //       {Helper.translation(
  //         "Login.Don't Have an Account?",
  //         "Don't Have an Account?"
  //       )}{" "}
  //       <Text style={{ color: Color.darkRed }}>
  //         {Helper.translation("Login.Sign Up", "Sign Up")}
  //       </Text>
  //     </Text>
  //   </TouchableOpacity>
  // );

  renderForgot = forgotPassoword => (
    <TouchableOpacity
      style={Styles.forgotView}
      onPress={forgotPassoword}
      activeOpacity={1}>
      <Text style={Styles.forgotPswdTxtStyle}>
        {Helper.translation('Login.Forgot Password?', 'Forgot Password?')}
      </Text>
    </TouchableOpacity>
  );

  orSeprator = () => (
    <View style={Styles.orView}>
      <View style={Styles.orViewLine} />
      <View style={Styles.orSubView}>
        <Text style={Styles.textOr}>
          {Helper.translation('Login.Or', 'Or')}
        </Text>
      </View>
      <View style={Styles.orViewLine} />
    </View>
  );

  renderFB = () => (
    <Button
      label={Helper.translation(
        'Login.Sign in with Facebook',
        'Sign in with Facebook',
      )}
      customStyle={Styles.facebookButton}
      customIcon={
        <FIcon
          name="facebook"
          size={Matrics.ScaleValue(20)}
          color={Color.white}
        />
      }
      // onPress={() => this.loginWithFacebook()}
    />
  );

  // renderTW = () => (
  //   <Button
  //     label={Helper.translation(
  //       "Login.Sign in with Google",
  //       "Sign in with Google"
  //     )}
  //     customStyle={Styles.googleButton}
  //     customIcon={
  //       <FIcon
  //         name="google"
  //         size={Matrics.ScaleValue(20)}
  //         color={Color.white}
  //       />
  //     }
  //     onPress={() => this.loginWithGoogle()}
  //   />
  // );

  render() {
    const {signup, forgotPassoword} = this.props;
    return (
      <View style={Styles.contentViewStyle}>
        {/* {this.renderForgot(forgotPassoword)} */}
        {/* {this.dontHaveAccount(signup)} */}
        {this.orSeprator()}
        {this.renderFB()}
        {/*{this.renderTW()} */}
      </View>
    );
  }
}
export default Bottom;
