import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Styles from './styles';
import {Header} from '../../../common/components';

export default class Categories extends Component {
  static navigationOptions = ({navigation}) => Header(navigation, 'logo');

  componentDidMount() {}
  render() {
    const {navigation} = this.props;

    return (
      <View style={Styles.mainContainer}>
        <Text>Happy deals</Text>
        <Text>Comming soon..</Text>
      </View>
    );
  }
}
