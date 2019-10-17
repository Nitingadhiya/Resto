import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import {Header} from '../../common/components';
import {Matrics, Color, Images, Fonts} from '../../common/styles';

import Styles from './styles';
const starRating = [
  {key: 'All', selected: true},
  {key: 'French', selected: true},
  {key: 'Italian', selected: true},
  {key: 'Indian', selected: false},
  {key: 'Punjabi', selected: false},
];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default class Details extends Component {
  static navigationOptions = ({navigation}) =>
    Header(navigation, 'logo', '', 'back');
  componentDidMount() {}
  detailsScreen(navigate) {
    navigate('Details');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView style={Styles.detailView}>
          <View style={Styles.viewSpace}>
            {arr.map(res => (
              <TouchableOpacity
                style={Styles.listView}
                activeOpacity={0.8}
                onPress={() => this.detailsScreen(navigate)}>
                <ImageBackground
                  source={Images.prodcutImage}
                  style={Styles.prodcutImage}>
                  <View style={Styles.shadowBg}>
                    <Text style={Styles.itemName}>Sauterelle</Text>
                    <Text style={Styles.itemCategoryName}>
                      French, Fusion, Mediterranean North
                    </Text>
                  </View>
                  <View style={Styles.ratingView}>
                    <View style={Styles.compactView}>
                      <View style={Styles.starView}>
                        {starRating.map((res, index) => (
                          <Image
                            source={
                              res.selected
                                ? Images.starIcon
                                : Images.starEmptyIcon
                            }
                            style={Styles.ratingImage}
                          />
                        ))}
                      </View>
                      <Image
                        source={Images.dollarIcon}
                        style={Styles.ratingImage}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
