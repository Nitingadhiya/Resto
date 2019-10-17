import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
  AsyncStorage,
} from 'react-native';
import {
  Color,
  Images,
  Matrics,
  Fonts,
  ApplicationStyles,
} from '../../../common/styles';
import Styles from './styles';

export default function BackNavigation(navigation, close) {
  return (
    <TouchableOpacity
      style={Styles.backTouch}
      onPress={() => navigation.goBack()}>
      {close === 'back' ? (
        <Image source={Images.back} />
      ) : (
        <Image source={Images.close} />
      )}
    </TouchableOpacity>
  );
}
