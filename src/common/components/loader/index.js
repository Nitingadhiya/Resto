import React from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';

import { Color } from '../../styles';

export const LoadWheel = ({ visible }) => {
  return (
    <Modal transparent visible={visible} onRequestClose={() => {}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator
          color={Color.primary}
          size="large"
          style={{
            shadowOpacity: 0.3,

            shadowOffset: { height: 1 },
          }}
        />
      </View>
    </Modal>
  );
};

export const Loader = () => {
  return <ActivityIndicator color={Color.primary} size="small" />;
};
