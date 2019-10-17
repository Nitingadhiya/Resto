import React, { Component } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
import { Helper } from "../../../util";
const AppUpdateModal = ({
  visible,
  description,
  message,
  ignoreButton,
  remindMeLater,
  updateButton,
  ignoreModalReq,
  remindMeLaterReq,
  updateModalReq,
  backDisabled,
  appVersion
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={backDisabled ? null : cancelModalReq}
    >
      <View style={Styles.modalViewContainer}>
        <View style={Styles.viewContainer}>
          <View style={Styles.spaceView}>
            <Text style={Styles.msgStyle}>
              {Helper.translation(`Profile.${message}`, message)} ({appVersion})
            </Text>
            <Text style={Styles.issueText}>{description}</Text>
          </View>

          <TouchableOpacity onPress={updateModalReq} style={Styles.btnStyle}>
            <Text style={Styles.btnText}>
              {Helper.translation(`Profile.${updateButton}`, updateButton)}
            </Text>
          </TouchableOpacity>
          {remindMeLater ? (
            <TouchableOpacity
              style={Styles.btnStyle}
              onPress={remindMeLaterReq}
            >
              <Text style={Styles.btnText}>
                {Helper.translation(`Profile.${remindMeLater}`, remindMeLater)}
              </Text>
            </TouchableOpacity>
          ) : null}
          {ignoreButton ? (
            <TouchableOpacity style={Styles.btnStyle} onPress={ignoreModalReq}>
              <Text style={Styles.cancelText}>
                {Helper.translation(`Profile.${ignoreButton}`, ignoreButton)}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

export { AppUpdateModal };
