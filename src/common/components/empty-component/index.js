import React from "react";
import { View, Text } from "react-native";
import Styles from "./styles";
import { Helper } from "../../../util/helper";

export const EmptyComponent = ({ message }) => {
  return (
    <View style={Styles.noOfferView}>
      <Text style={Styles.noOfferText}>
        {Helper.translation(`Words.${message}`, message)}
      </Text>
    </View>
  );
};
