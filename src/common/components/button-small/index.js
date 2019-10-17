import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Color, Matrics, Fonts } from "../../styles";

export const ButtonSmall = ({
  label,
  onPress,
  customStyle,
  children,
  customTextStyle
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, customStyle]}>
        <Text style={[styles.buttonTextStyle, customTextStyle]}>{label}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    backgroundColor: Color.darkRed,
    padding: Matrics.ScaleValue(10),
    alignItems: "flex-end",
    margin: Matrics.ScaleValue(5),
    borderRadius: Matrics.ScaleValue(5)
  },
  buttonTextStyle: {
    color: Color.white,
    fontSize: Matrics.ScaleValue(14)
  }
};
