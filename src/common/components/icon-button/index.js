import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Color, Matrics, Fonts, Images } from '../../styles';

export const IconButton = ({
  label,
  onPress,
  customStyle,
  children,
  iconSrc,
  iconStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, customStyle]}>
        <Image source={iconSrc} style={[styles.iconStyle, iconStyle]} />
        <Text style={styles.buttonTextStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  iconStyle: {
    marginRight: Matrics.ScaleValue(10),
  },
  buttonStyle: {
    backgroundColor: Color.primary,
    padding: Matrics.ScaleValue(15),
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // width:Matrics.screenWidth-Matrics.doubleBaseSection,
  },
  buttonTextStyle: {
    color: Color.white,
    fontFamily: Fonts.type.Arimo,
    fontSize: Matrics.ScaleValue(17),
  },
};
