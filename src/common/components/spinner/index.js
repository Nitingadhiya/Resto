import React, { Component } from "react";
import { View } from "react-native";
import Spinner from "react-native-spinkit";
import { Matrics, Color } from "../../../common/styles";
import Styles from "./styles";

export const SpinnerView = ({}) => {
  return (
    <View style={Styles.spinnerView}>
      <Spinner
        style={styles.spinner}
        isVisible={true}
        size={Matrics.ScaleValue(50)}
        type={"ThreeBounce"}
        color={Color.darkRed}
      />
    </View>
  );
};
