import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import Styles from "./styles";

class BottomButton extends Component {
  render() {
    const {
      onPress,
      buttonText,
      color,
      customStyle,
      customeTextStyle
    } = this.props;
    return (
      <TouchableOpacity
        style={[Styles.flatButton, { backgroundColor: color }, customStyle]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={[Styles.flatText, customeTextStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}
export default BottomButton;
