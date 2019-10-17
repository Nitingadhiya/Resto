import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import Styles from './styles';
import {Header} from '../../../common/components';
import SearchBar from '../../../common/components/searchbar';
import GlobalVar from '../../../global';
import {Matrics, Images} from '../../../common/styles';

const categoryArr = [
  {key: 'All', selected: true},
  {key: 'French', selected: false},
  {key: 'Italian', selected: false},
  {key: 'Indian', selected: false},
  {key: 'Punjabi', selected: false},
  {key: 'Chinise', selected: false},
  {key: 'Continatal', selected: false},
];
const procutList = [
  {key: 'French', selected: false},
  {key: 'Italian', selected: false},
  {key: 'Indian', selected: false},
  {key: 'Punjabi', selected: false},
  {key: 'Chinise', selected: false},
  {key: 'Continatal', selected: false},
  {key: 'Chinise', selected: false},
  {key: 'Continatal', selected: false},
  {key: 'Chinise', selected: false},
  {key: 'Continatal', selected: false},
];
export default class Categories extends Component {
  static navigationOptions = ({navigation}) => Header(navigation, 'logo');

  componentDidMount() {}

  navigateProductList(navigation) {
    navigation.navigate('ProductList');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={Styles.mainContainer}>
        <SearchBar />
        <KeyboardAvoidingView
          keyboardShouldPersistTaps={Matrics.keyboardShouldPersistTaps}
          behavior={GlobalVar.keyboardBehavior()}
          keyboardVerticalOffset={GlobalVar.verticalOffset()}
          style={{flex: 1}}>
          <View style={Styles.bgView}>
            <ScrollView horizontal>
              <View style={Styles.categoryMainView}>
                {categoryArr.map(res => (
                  <View style={Styles.catView}>
                    <Text
                      style={[
                        Styles.categoryText,
                        {
                          color: !res.selected
                            ? 'rgba(255,255,255,0.5)'
                            : 'rgba(255,255,255,1)',
                        },
                      ]}>
                      {res.key}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
            <ScrollView>
              <View style={Styles.mainListView}>
                <View style={Styles.gridView}>
                  {procutList &&
                    procutList.map((res, index) => (
                      <TouchableOpacity
                        style={[
                          Styles.touchSpace,
                          {
                            marginRight:
                              index % 2 === 0 ? 0 : Matrics.ScaleValue(5),
                          },
                        ]}
                        activeOpacity={0.8}
                        onPress={() => this.navigateProductList(navigation)}>
                        <ImageBackground
                          source={Images.prodcutImage}
                          style={Styles.productImage}>
                          <View style={Styles.shadowBg}>
                            <Text style={Styles.productCategoryText}>
                              {res.key}
                            </Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
