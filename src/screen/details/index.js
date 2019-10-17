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
  StyleSheet,
  Modal,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import _ from 'lodash';
import {Header} from '../../common/components';
import {Matrics, Color, Images, Fonts} from '../../common/styles';
import MapView, {PROVIDER_GOOGLE, MAP_TYPES} from 'react-native-maps';
import Styles from './styles';
const starRating = [
  {key: 'All', selected: true},
  {key: 'French', selected: true},
  {key: 'Italian', selected: true},
  {key: 'Indian', selected: false},
  {key: 'Punjabi', selected: false},
];
const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 250,
    width: Matrics.screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const arrRating = ['The Welcome', 'Atmosphere', 'Service', 'Food'];
export default class Details extends Component {
  static navigationOptions = ({navigation}) =>
    Header(navigation, 'logo', 'fav', 'back');

  state = {
    starCount: 0,
    moreInfoView: false,
    statusinfo: false,
    modalVisible: false,
  };
  onStarRatingPress(rating, index) {
    if (index === 0) {
      this.setState({
        starCount1: rating,
      });
    }
    if (index === 1) {
      this.setState({
        starCount2: rating,
      });
    }
    if (index === 2) {
      this.setState({
        starCount3: rating,
      });
    }
    if (index === 3) {
      this.setState({
        starCount4: rating,
      });
    }
  }

  ratingState(index) {
    if (index === 0) {
      return this.state.starCount1;
    }
    if (index === 1) {
      return this.state.starCount2;
    }
    if (index === 2) {
      return this.state.starCount3;
    }
    if (index === 3) {
      return this.state.starCount4;
    }
  }

  starRatingView(index) {
    return (
      <StarRating
        maxStars={5}
        starSize={Matrics.ScaleValue(20)}
        rating={this.ratingState(index)}
        fullStarColor={'#F9C312'}
        starStyle={Styles.starCss}
        emptyStarColor={Color.darkRed}
        iconSet={'FontAwesome'}
        emptyStar={'star-o'}
        selectedStar={rating => this.onStarRatingPress(rating, index)}
      />
    );

    // starRating.map((res, index) => (
    //   <Image
    //     source={res.selected ? Images.starIcon : Images.starIcon}
    //     style={Styles.starIconCss}
    //   />
    // ));
  }

  reviewArray() {
    return arrRating.map((res, index) => (
      <View style={Styles.starReviewView}>
        <View style={Styles.textView}>
          <Text style={Styles.welcomeText}>{res}</Text>
        </View>
        {this.starRatingView(index)}
      </View>
    ));
  }
  moreinfo() {
    this.setState({
      moreInfoView: !this.state.moreInfoView,
      statusinfo: !this.state.statusinfo,
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView style={Styles.detailView}>
          <View style={Styles.mainCView}>
            <ScrollView horizontal pagingEnabled>
              <ImageBackground
                source={Images.prodcutImage}
                style={Styles.bgImage}>
                <View style={Styles.paginationView}>
                  <Text style={Styles.textPagination}>1/3</Text>
                </View>
                <View style={Styles.prodcutTitleView}>
                  <View>
                    <Text style={Styles.titleText}>Fancy Pie Pizza</Text>
                  </View>
                  <View style={Styles.ratingView}>
                    <Text style={Styles.ratingCount}>37 </Text>
                    {starRating.map((res, index) => (
                      <Image
                        source={
                          res.selected ? Images.starIcon : Images.starEmptyIcon
                        }
                        style={Styles.starIconCss}
                      />
                    ))}
                  </View>
                </View>
              </ImageBackground>
              <ImageBackground
                source={Images.prodcutImage}
                style={Styles.bgImage}>
                <View style={Styles.paginationView}>
                  <Text style={Styles.textPagination}>2/3</Text>
                </View>
                <View style={Styles.prodcutTitleView}>
                  <View>
                    <Text style={Styles.titleText}>Fancy Pie Pizza</Text>
                  </View>
                  <View style={Styles.ratingView}>
                    <Text style={Styles.ratingCount}>37 </Text>
                    {starRating.map((res, index) => (
                      <Image
                        source={
                          res.selected ? Images.starIcon : Images.starEmptyIcon
                        }
                        style={Styles.starIconCss}
                      />
                    ))}
                  </View>
                </View>
              </ImageBackground>
              <ImageBackground
                source={Images.prodcutImage}
                style={Styles.bgImage}>
                <View style={Styles.paginationView}>
                  <Text style={Styles.textPagination}>3/3</Text>
                </View>
                <View style={Styles.prodcutTitleView}>
                  <View>
                    <Text style={Styles.titleText}>Fancy Pie Pizza</Text>
                  </View>
                  <View style={Styles.ratingView}>
                    <Text style={Styles.ratingCount}>37 </Text>
                    {starRating.map((res, index) => (
                      <Image
                        source={
                          res.selected ? Images.starIcon : Images.starEmptyIcon
                        }
                        style={Styles.starIconCss}
                      />
                    ))}
                  </View>
                </View>
              </ImageBackground>
            </ScrollView>
            <View style={Styles.addressView}>
              <View style={Styles.locationAddressView}>
                <Image
                  source={Images.locationWhiteIcon}
                  style={Styles.locationIconCss}
                />
                <Text style={Styles.addressText}> 118 Piccadilly</Text>
              </View>
              <View style={Styles.distanceView}>
                <Text style={Styles.addressText}>20 M</Text>
              </View>
            </View>
            <View style={Styles.descriptionView}>
              <Text style={Styles.descriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </Text>
            </View>
            <View style={Styles.iconDetails}>
              <View style={Styles.foodMenuView}>
                <Image source={Images.foodMenu} style={Styles.foodMenuIcon} />
                <Text>Food Menu</Text>
              </View>
              <View style={Styles.foodMenuView}>
                <Image source={Images.callIcon} style={Styles.foodMenuIcon} />
                <Text>Book A Table</Text>
              </View>
            </View>
            <View style={Styles.reviewView}>{this.reviewArray()}</View>
            <TouchableOpacity activeOpacity={0.8} style={Styles.touchOpac}>
              <Text style={Styles.touchText}>Send your note</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.moreinfo()}
              style={[Styles.touchOpac, Styles.extraTouch]}>
              <Text style={[Styles.touchText, Styles.colorWhite]}>
                {!this.state.statusinfo ? 'MORE' : 'LESS'} INFORMATION
              </Text>
            </TouchableOpacity>
            {this.state.moreInfoView ? (
              <View style={Styles.moreInfoView}>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image source={Images.emailIcon} style={Styles.emailIcon} />
                  </View>
                  <Text style={Styles.textContact}>Email for Restaurant</Text>
                </View>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image source={Images.wifiIcon} style={Styles.emailIcon} />
                  </View>
                  <Text style={Styles.textContact}>Free Wifi</Text>
                </View>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image source={Images.vegIcon} style={Styles.emailIcon} />
                  </View>
                  <Text style={Styles.textContact}>Vegetarian</Text>
                </View>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image
                      source={Images.parkingIcon}
                      style={Styles.emailIcon}
                    />
                  </View>
                  <Text style={Styles.textContact}>Parking</Text>
                </View>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image source={Images.sea} style={Styles.emailIcon} />
                  </View>
                  <Text style={Styles.textContact}>Seaview</Text>
                </View>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image source={Images.terrace} style={Styles.emailIcon} />
                  </View>
                  <Text style={Styles.textContact}>Terrace</Text>
                </View>
                <View style={Styles.contactInfo}>
                  <View style={Styles.imageView}>
                    <Image source={Images.smoking} style={Styles.emailIcon} />
                  </View>
                  <Text style={Styles.textContact}>Smoking Area</Text>
                </View>
              </View>
            ) : null}
            <View style={styles.container}>
              <MapView
                style={styles.map}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></MapView>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.setModalVisible(true)}
          style={[Styles.touchOpac, Styles.extraTouch]}>
          <Text style={[Styles.touchText, Styles.colorWhite]}>
            O'RESTO OFFER
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: !this.state.modalVisible,
            });
          }}>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: Matrics.screenWidth - Matrics.ScaleValue(40),
                elevation: 3,
                shadowColor: Color.black,
                shadowOpacity: 0.8,
                shadowOffset: {width: 2, height: 2},
                borderRadius: Matrics.ScaleValue(10),
                paddingBottom: Matrics.ScaleValue(10),
              }}>
              <View
                style={{
                  height: Matrics.ScaleValue(45),
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: Color.paleGreyTwo,
                }}>
                <Text
                  style={{
                    color: Color.black30,
                    fontSize: Matrics.ScaleValue(16),
                    fontFamily: Fonts.type.Rubik,
                  }}>
                  O'RESTO OFFER
                </Text>
              </View>
              <View style={{height: 100, justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: Fonts.type.RubikMedium,
                    fontSize: Matrics.ScaleValue(16),
                    color: Color.black30,
                    textAlign: 'center',
                  }}>
                  1 coffee offered for a purchased menu
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: Color.darkRed,
                  height: Matrics.ScaleValue(45),
                  width: Matrics.ScaleValue(150),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: Matrics.ScaleValue(15),
                  alignSelf: 'center',
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text
                  style={{
                    color: Color.white,
                    fontSize: Matrics.ScaleValue(16),
                    fontFamily: Fonts.type.Rubik,
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
