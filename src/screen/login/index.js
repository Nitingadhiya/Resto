import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {get} from 'lodash';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Matrics, Color, Images, Fonts} from '../../common/styles';
import GlobalVar from '../../global';
import Styles from './styles';
import Front from './front';
import Bottom from './bottom';
//import {Header, BottomBG} from '../../common/components';
import {Events, Helper} from '../../util';

class Login extends Component {
  // static navigationOptions = ({ navigation }) =>
  //   Header(navigation, Helper.translation("Words.Login", "Login"), "", "back");

  state = {};

  componentDidMount() {
    Helper.trackScreenView('LoginScreen');
  }

  navigateToScreen(type, navigation) {
    if (type === 'Signup') {
      Helper.customTrackEvent('RegistrationProcessStarted');
    }
    navigation.navigate(type, {transition: 'transitionFromBottom'});
  }

  dontHaveAccount = navigation => (
    <TouchableOpacity
      onPress={() => this.navigateToScreen('Signup', navigation)}
      activeOpacity={1}
      style={Styles.signupTouch}>
      <Text style={Styles.textStyle}>
        {Helper.translation(
          "Login.Don't Have an Account?",
          "Don't Have an Account?",
        )}{' '}
        <Text style={{color: Color.darkRed}}>
          {Helper.translation('Login.Sign Up', 'Sign Up')}
        </Text>
      </Text>
    </TouchableOpacity>
  );

  renderItem = () => (
    <View style={Styles.ScreenLogoView}>
      <Text style={Styles.logoText}>
        {Helper.translation('Type.TWORK', 'TWORK')}
      </Text>
      <View style={Styles.welcomeTextView}>
        <Text style={Styles.welcomeText}>
          {Helper.translation(
            'Type.Der Gamechanger der Arbeitswelt',
            'Der Gamechanger der Arbeitswelt',
          )}
        </Text>
        <Text style={[Styles.welcomeText, Styles.welcomeSubText]}>
          {Helper.translation(
            '100 % echte Menschen, 0 % Bullshit',
            '100 % echte Menschen, 0 % Bullshit',
          )}
        </Text>
        <Text style={[Styles.welcomeText, Styles.welcomeParaText]}>
          {Helper.translation(
            'Genug vom Fachkräftemangel? Nennen Sie uns Ihre Branche und bewerben Sie sich als Vorreiter für die Revolution Ihres Arbeitsmarkts',
            'Genug vom Fachkräftemangel? Nennen Sie uns Ihre Branche und bewerben Sie sich als Vorreiter für die Revolution Ihres Arbeitsmarkts.',
          )}
        </Text>
      </View>
    </View>
  );

  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.mainContainer}>
        <ImageBackground
          source={Images.welcomeBg}
          style={Styles.welcomeBg}
          resizeMode="cover"
        />
        <KeyboardAvoidingView
          keyboardShouldPersistTaps={Matrics.keyboardShouldPersistTaps}
          behavior={GlobalVar.keyboardBehavior()}
          // keyboardVerticalOffset={GlobalVar.verticalOffset()}
          style={{flex: 1}}>
          <View style={Styles.bgView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={Matrics.keyboardShouldPersistTaps}
              style={{flex: 1}}>
              <View style={Styles.textViewStyle}>
                <View style={Styles.imageViewStyles}>
                  <Image source={Images.logo} style={Styles.imageLogo} />
                </View>

                <View style={Styles.frontBtmView}>
                  <Front navigation={get(this.props, 'navigation', null)} />
                  <Bottom />
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Login;
