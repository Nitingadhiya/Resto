import React, { Component } from "react";
import { View, Text, AppState, TouchableOpacity, NetInfo } from "react-native";
//import NetInfo from "@react-native-community/netinfo";
import { LoadWheel } from "../loader";
import { Fonts } from "../../styles";

export default class InternetConnection extends Component {
  state = {
    isConnected: true,
    isLoading: false
  };

  setNetworkStatus = status => {
    // if (this.state.isConnected != status)
    this.setState({ isConnected: status });
  };

  _handleAppStateChange = nextAppState => {
    NetInfo.isConnected.fetch().then(this.setNetworkStatus);
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.setNetworkStatus
    );

    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnMount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.setNetworkStatus
    );
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  render() {
    return (
      <View>
        <LoadWheel
          visible={this.state.isLoading}
          onRequestClose={() => this.setState({ isLoading: false })}
          text="Loading..."
        />
        {!this.state.isConnected ? (
          <TouchableOpacity
            onPress={() => {
              NetInfo.isConnected.fetch().then(this.setNetworkStatus);
            }}
          >
            <View style={styles.container}>
              <Text style={styles.textStyle}>No Internet Connection</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
const styles = {
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    paddingVertical: 10,
    // height:100,
    alignItems: "center"
  },
  textStyle: {
    color: "white",
    fontFamily: Fonts.type.ArimoBold
  }
};
