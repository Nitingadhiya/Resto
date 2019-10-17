import React, { Component } from "react";
import Toast from "react-native-root-toast";
import { Events } from "../../../util";
import GlobalVar from "../../../global";

class ToastComponent extends Component {
  state = {
    isVisible: false,
    message: null
  };
  componentDidMount() {
    Events.on("toast", "toast", message => {
      this.setState({
        isVisible: true,
        message: message || "Something went to wrong, please try next time."
      });
      setTimeout(() => {
        this.setState({
          isVisible: false
        });
      }, GlobalVar.toastTimeout);
    });
  }

  render() {
    const { isVisible, message } = this.state;
    return (
      <Toast
        visible={isVisible}
        position={Toast.positions.BOTTOM}
        shadow={false}
        animation={true}
        hideOnPress={true}
        duration={Toast.durations.SHORT}
      >
        {message}
      </Toast>
    );
  }
}
export default ToastComponent;
