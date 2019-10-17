import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image, Linking, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackActions, NavigationActions} from 'react-navigation';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
    this.navigateToScreen('Login');
  }
  navigateToScreen(route) {
    const navigateAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: route})],
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Splash screen</Text>
      </View>
    );
  }
}
