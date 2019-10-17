import React, { Component } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import Styles from "./styles";
// import Helper from "../../../util/helper";
import { Helper } from "../../../util";
const ConfirmModal = ({
  visible,
  title,
  message,
  leftButton,
  rightButton,
  leaveModalReq,
  cancelModalReq,
  backDisabled
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
            <Text style={Styles.titleText}>
              {Helper.translation(`Profile.${title}`, title)}
            </Text>
            <Text style={Styles.msgStyle}>
              {Helper.translation(`Profile.${message}`, message)}
            </Text>
          </View>
          <View style={Styles.btnView}>
            {leftButton && (
              <TouchableOpacity
                style={[Styles.btnStyle, Styles.btnFirst]}
                onPress={cancelModalReq}
              >
                <Text style={Styles.leaveText}>
                  {Helper.translation(`Profile.${leftButton}`, leftButton)}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={Styles.btnStyle} onPress={leaveModalReq}>
              <Text style={Styles.cancelText}>
                {Helper.translation(`Profile.${rightButton}`, rightButton)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export { ConfirmModal };
