import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  //createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import _ from 'lodash';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import {
  CategoriesTab,
  HappyDealsTab,
  FavoritiesScreenTab,
  SplashScreen,
  WelcomeScreen,
  LoginScreen,
  ProductListScreen,
  DetailsScreen,
} from './route';

import {
  Images,
  Color,
  Fonts,
  Matrics,
  ApplicationStyles,
} from '../common/styles';
import {Helper, Events} from '../util';

const styles = {
  tabLabel: {
    fontSize: Matrics.ScaleValue(14),
    color: '#4B0021',
    textAlign: 'center',
  },
  tabTextColor: {
    fontSize: Matrics.ScaleValue(14),
    color: Color.white,
    textAlign: 'center',
  },
  badgeIconView: {
    backgroundColor: Color.cherryRed,
    position: 'absolute',
    zIndex: 1,
    height: 18,
    width: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    right: -5,
    top: -5,
  },
  badgeIconText: {
    fontSize: Matrics.ScaleValue(10),
    color: Color.white,
    fontFamily: Fonts.type.Rubik,
  },
  iconTabBar: {
    // height: Matrics.ScaleValue(35),
    // width: Matrics.ScaleValue(40),
    height: Matrics.ScaleValue(21),
    width: Matrics.ScaleValue(23),
  },
  iconfvTabBar: {
    // height: Matrics.ScaleValue(35),
    // width: Matrics.ScaleValue(40),
    height: Matrics.ScaleValue(20),
    width: Matrics.ScaleValue(23),
  },
  iconDealsTabBar: {
    // height: Matrics.ScaleValue(35),
    // width: Matrics.ScaleValue(60),
    height: Matrics.ScaleValue(20),
    width: Matrics.ScaleValue(30),
  },
};

const TabNavigation = createMaterialTopTabNavigator(
  {
    Categories: {
      screen: CategoriesTab,
      navigationOptions: ({navigation}) => {
        return {
          tabBarLabel: ({focused}) => (
            <View
              style={{
                width: Matrics.screenWidth / 3,
                height: Matrics.ScaleValue(18),
                marginTop: Matrics.ScaleValue(-5),
              }}>
              <Text style={focused ? styles.tabTextColor : styles.tabLabel}>
                Categories
              </Text>
            </View>
          ),
          tabBarVisible:
            navigation.state.params && navigation.state.params.tabBarVisible,
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.homeIconFocus : Images.homeIcon}
              style={styles.iconTabBar}
            />
          ),
        };
      },
    },
    HappyDeals: {
      screen: HappyDealsTab,
      navigationOptions: ({navigation}) => {
        return {
          tabBarLabel: ({focused}) => (
            <View
              style={{
                width: Matrics.screenWidth / 3,
                height: Matrics.ScaleValue(18),
                marginTop: Matrics.ScaleValue(-5),
              }}>
              <Text style={focused ? styles.tabTextColor : styles.tabLabel}>
                Happy Deal
              </Text>
            </View>
          ),
          tabBarVisible:
            navigation.state.params && navigation.state.params.tabBarVisible,
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.happyDealsFocus : Images.happyDeals}
              style={styles.iconDealsTabBar}
            />
          ),
        };
      },
    },
    Favorities: {
      screen: FavoritiesScreenTab,
      navigationOptions: ({navigation}) => {
        return {
          tabBarLabel: ({focused}) => (
            <View
              style={{
                width: Matrics.screenWidth / 3,
                height: Matrics.ScaleValue(18),
                marginTop: Matrics.ScaleValue(-8),
              }}>
              <Text style={focused ? styles.tabTextColor : styles.tabLabel}>
                Favorities
              </Text>
            </View>
          ),
          tabBarVisible:
            navigation.state.params && navigation.state.params.tabBarVisible,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={
                  focused ? Images.favoritiesIconFocus : Images.favoritiesIcon
                }
                style={styles.iconfvTabBar}
              />
              {/* {_.get(navigation, 'state.params.badgeIcon', '') ? (
                <View style={styles.badgeIconView}>
                  <Text style={styles.badgeIconText}>
                    {_.get(navigation, 'state.params.badgeIcon', '0')}
                  </Text>
                </View>
              ) : null} */}
            </View>
          ),
        };
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: {
        //opacity: 0,
        backgroundColor: Color.white,
      },
      iconStyle: {
        width: Matrics.ScaleValue(25),
        height: Matrics.ScaleValue(25),
        padding: 0,
      },
      tabStyle: {
        //height: Matrics.ScaleValue(65),
        padding: 5,
        ...ifIphoneX(
          {
            marginBottom: 20,
          },
          {
            marginBottom: 0,
          },
        ),
      },
      showIcon: true,
      upperCaseLabel: false,
      labelStyle: {
        marginBottom: 5,
      },
      style: {backgroundColor: Color.darkRed},
      activeTintColor: Color.primary,
      pressColor: Color.cherryRed10,
      swipeEnabled: true,
      animationEnabled: true,
      keyboardHidesTabBar: true,
    },
    lazy: true,
    initialRouteName: 'Categories',
    initialRouteParams: {transition: 'fade'},
  },
);

const transitionFadeIn = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0.5, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0.5, 1, 1],
  });

  return {
    opacity,
    transform: [{scaleY}],
  };
  // const rotateY = position.interpolate({
  //   inputRange: [index - 1, index],
  //   outputRange: ['180deg', '0deg'],
  // });

  // return { transform: [{ rotateY }], backfaceVisibility: 'hidden' };
};

const transitionFromBottom = (index, layout, position) => {
  const {initHeight} = layout;

  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [initHeight, 0, 0],
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1],
  });

  return {opacity, transform: [{translateY}]};
  // const rotateY = position.interpolate({
  //   inputRange: [index - 1, index],
  //   outputRange: ["180deg", "0deg"]
  // });

  // return { transform: [{ rotateY }], backfaceVisibility: "hidden" };
};

const transitionFluid = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scale = position.interpolate({
    inputRange: [0, 0.01, 0.99, 1],
    outputRange: [0.3, 0.3, 1, 1],
  });

  const translateX = position.interpolate({
    inputRange,
    outputRange: [Matrics.screenWidth - 20, 0, 0],
  });

  const translateY = position.interpolate({
    inputRange,
    outputRange: [Matrics.screenWidth - 40, 0, 0],
  });

  return {
    opacity,
    transform: [{scale}, {translateX}, {translateY}],
  };
};

const transitionConfig = () => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: sceneProps => {
    const {layout, position, scene} = sceneProps;
    const {index, route} = scene;

    const width = layout.initWidth;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });
    const params = route.params || {}; // <- That's new
    const transition = params.transition || 'default'; // <- That's new
    return {
      transitionFromBottom: transitionFromBottom(index, layout, position),
      fadeInTransition: transitionFadeIn(index, position),
      fluidTransition: transitionFluid(index, position),
      default: {opacity, transform: [{translateX}]},
    }[transition];
  },
});

const AppNavigation = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    // Welcome: {
    //   screen: WelcomeScreen,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    TabHome: {
      screen: TabNavigation,
      navigationOptions: ({navigation}) => ({
        header: null,
        gesturesEnabled: false,
      }),
    },
    ProductList: {
      screen: ProductListScreen,
      navigationOptions: {
        // header: null,
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        // header: null
      },
    },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
    headerMode: 'screen',
    transitionConfig,
  },
);

export default createAppContainer(AppNavigation);
