import React, { Component } from "react";
import { View } from "react-native";
import Styles from "./styles";

const styleFn = top => {
  return top ? { top: 0 } : { bottom: 0 };
};

export const BottomBG = ({ color, top }) => (
  <View style={[Styles.bottomBg, styleFn(top), { backgroundColor: color }]} />
);
