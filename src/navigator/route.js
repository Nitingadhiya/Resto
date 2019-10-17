import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screen/tab/categories';
import HappyDealsScreen from '../screen/tab/happy-deals';
import FavoritiesScreen from '../screen/tab/favorities';
import ProductListScreen from '../screen/product-list';
import DetailsScreen from '../screen/details';
import SplashScreen from '../screen/splash';
import WelcomeScreen from '../screen/welcome';
// import OtpVerifyScreen from "../screen/otp-verify";
import LoginScreen from '../screen/login';
// import profileInfoScreen from "../screen/profile-info";
// import editProfileScreen from "../screen/edit-profile";
// import changePasswordScreen from "../screen/change-password";
// import ConversationListScreen from "../screen/conversation-list";
// import MessageScreen from "../screen/message";

const CategoriesTab = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
});

const HappyDealsTab = createStackNavigator({
  HappyDeals: {
    screen: HappyDealsScreen,
  },
});

const FavoritiesScreenTab = createStackNavigator({
  Favorities: {
    screen: FavoritiesScreen,
  },
});

module.exports = {
  SplashScreen,
  WelcomeScreen,
  LoginScreen,
  CategoriesTab,
  HappyDealsTab,
  FavoritiesScreenTab,
  ProductListScreen,
  DetailsScreen,
};
