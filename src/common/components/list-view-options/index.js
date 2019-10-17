import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  Image
} from "react-native";
import { Color, Images, Matrics, Fonts, ApplicationStyles } from "../../styles";
import Styles from "./styles";
import { Helper } from "../../../util";
// import Helper from "../../../util/helper";

export default class ListViewOptions extends React.PureComponent {
  verifiedView = data => {
    if (data.verified && data.percentage) {
      return (
        <View style={Styles.verifiedInnerView}>
          <Image source={Images.verified} />
          <Text style={Styles.verifiedText}>Verified</Text>
        </View>
      );
      return null;
    }
    if (data.percentage) {
      return (
        <View style={[Styles.verifiedInnerView, Styles.unVerifiedInnerView]}>
          <Text style={[Styles.verifiedText, Styles.unverifiedText]}>
            {data.percentage}%
          </Text>
        </View>
      );
    }
  };

  listDisplay = (title, onPress) => {
    if (title) {
      return title.map((res, index) => (
        <TouchableOpacity
          style={Styles.totalContributeView}
          key={res.key}
          onPress={() => onPress(res.key)}
          activeOpacity={1}
        >
          <Text
            style={[
              Styles.totalContText,
              res.customTextStyle && { color: res.customTextStyle }
            ]}
          >
            {Helper.translation(`Profile.${res.value}`, res.value)}
            {/* {res.value} */}
          </Text>
          <View style={Styles.verifiedView}>
            {this.verifiedView(res)}
            {res.navigate && <Image source={Images.arrowRight} />}
          </View>
        </TouchableOpacity>
      ));
    }
  };

  render() {
    const { title, onPress } = this.props;
    return <View>{this.listDisplay(title, onPress)}</View>;
  }
}
