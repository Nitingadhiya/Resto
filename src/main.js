import React, {Component} from 'react';
import {Text, View, Linking, TextInput} from 'react-native';
import AppNavigation from './navigator';

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
    this.fontScalling();
  }

  fontScalling() {
    TextInput.defaultProps = {
      ...(TextInput.defaultProps || {}),
      allowFontScaling: false,
    };
    Text.defaultProps = {
      ...(Text.defaultProps || {}),
      allowFontScaling: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigation />
      </View>
    );
  }
}
