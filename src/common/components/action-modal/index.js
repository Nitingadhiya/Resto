import React, {Component} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {Helper} from '../../../util';

const ActionModal = ({visible, actionOptions, onPress, imageSrc, title}) => {
  return (
    <Modal visible={visible} transparent onRequestClose={() => {}}>
      <View style={Styles.modalViewContainer}>
        <View style={Styles.viewContainer}>
          {actionOptions.map((res, index) => (
            <TouchableOpacity
              style={Styles.btnStyle}
              onPress={() => onPress(index)}
              key={`${res}`}>
              <Text style={Styles.btnTextStyle}>
                {/* {res} */}
                {Helper.translation(`Profile.${res}`, res)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[Styles.viewContainer, Styles.customActionView]}>
          <TouchableOpacity
            style={[Styles.btnStyle, Styles.customViewCont]}
            onPress={() => onPress(3)}>
            <Text style={[Styles.btnTextStyle, Styles.cancelText]}>
              {Helper.translation(`Words.Cancel`, 'Cancel')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export {ActionModal};
