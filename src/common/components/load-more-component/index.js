import React from "react";
import { View } from "react-native";
import Styles from "./styles";
import { SpinnerView } from "../../../common/components";

export const LoadMoreComponent = ({ loadMore }) => {
  return <View style={Styles.mainView}>{loadMore && <SpinnerView />}</View>;
};
