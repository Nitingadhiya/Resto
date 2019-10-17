import React, {Component} from 'react';
import {
  View,
  Image,
  Animated,
  Easing,
  BackHandler,
  Platform,
  ImageBackground,
  Text,
} from 'react-native';

import Styles from './styles';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    //this.animatedValue = new Animated.Value(0);
    this.state = {
      animatedStartValue: 0,
      v: 1,
      languages: [],
      lang: null,
    };
  }

  render() {
    const {exitApp} = this.state;
    const {navigation} = this.props;
    return (
      <View style={Styles.mainContainer}>
        {/* <ImageBackground
            source={Images.welcomeBg}
            style={Styles.welcomeBg}
            resizeMode="cover"
          /> */}
        <View style={Styles.bgView}>
          <Text>Welcome</Text>
        </View>
      </View>
    );
  }
}
