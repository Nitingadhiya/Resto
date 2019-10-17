//import firebase from "react-native-firebase";
import _ from 'lodash';
import moment from 'moment';
// import I18n from 'react-native-i18n';
//import AsyncStorage from '@react-native-community/async-storage';
import RegisterObj from '../api/register-data';
import {Images} from '../common/styles';
import {ErrorObj} from '../api';
import GlobalVar from '../global';
import HeroesVar from '../../config/heroes-config';
import ServerVar from '../../config/server-config';
import Http from '../api/http';
import {APICaller, Uxcam, Events} from './';
import TypeData from '../api/type-data';

export const Helper = {
  //set badge number
  setBadgeNumber: badge => {
    // firebase
    //   .notifications()
    //   .getBadge()
    //   .then(count => {
    //     if (!count) {
    //       count = 0;
    //     }
    //     count++;
    //     firebase.notifications().setBadge(count);
    //   })
    //   .then(() => {
    //     //console.log("Doing great");
    //   })
    //   .catch(error => {
    //     //console.log("fail to count");
    //   });
    //firebase.notifications().setBadge(10);
  },
  customTrackEvent: name => {
    if (ServerVar.server === 'live') {
      console.log('Looks **...');
      //AppEventsLogger.logEvent("fb_mobile_achievement_unlocked");
      //AppEventsLogger.logEvent("fb_mobile_activate_app");
      //AppEventsLogger.logEvent("fb_mobile_complete_registration");
      AppEventsLogger.logEvent(name); // facebook analytics
    }
  },
  trackScreenView: screen => {
    // AppEventsLogger.logEvent("Screen", screen); // facebook analytics
    //firebase.analytics().setCurrentScreen(screen, screen); // firebase analytics
    //Uxcam.tagScreenName(screen); // Uxcam Analytics
  },
  translation: function(key, defaultValue = null) {
    if (!defaultValue) {
      defaultValue = key;
    }
    return defaultValue; //I18n.t(key, {defaultValue});
  },
  has: function(errors, field) {
    return _.indexOf(_.keys(errors), field) > -1;
  },
  errorMessage: (errors, field) => {
    if (!errors) return;

    if (Helper.has(errors, field)) {
      if (!errors) return;
      return errors[field][0];
    }
  },
  // AsyncStorage setValue
  asyncStorage: (params, value) => {
    AsyncStorage.setItem(params, value);
    if (params === 'apiToken') {
      global.apiToken = value;
    }
  },
  removeAsyncStorage: params => {
    AsyncStorage.removeItem(params);
    global.apiToken = null;
  },
  clearStorage: () => {
    AsyncStorage.clear();
  },

  splitIconName: name => {
    const splt = name.split('fa-');
    return splt[1];
  },
  getArrayDetails: (name, arr) => {
    let countryName = null;
    arr.map(res => {
      res.types.map(typ => {
        if (typ === name) {
          countryName = res.short_name;
        }
      });
    });
    if (global.apiToken) {
      RegisterObj.country = countryName;
      return HeroesVar.country;
    }
    return countryName;
  },
  pronounce(val) {
    if (val === 'en' || val === 'EN') {
      return 'English';
    } else if (val === 'de' || val === 'DE') {
      return 'German';
    } else if (val === 'pl' || val === 'PL') {
      return 'Polish';
    } else {
      return val;
    }
  },
  multiLanguage(language) {
    const children = [];
    language.map((res, index) => {
      children.push({
        key: res.key,
        name: res.label,
        id: res.key,
      });
    });

    dataOption.multiSelectItems = [{children}];
  },
  saveLanguage(language) {
    if (language === 'de') {
      HeroesVar.language = 'de';
    } else if (language === 'pl') {
      HeroesVar.language = 'pl';
    } else {
      HeroesVar.language = 'en';
    }
  },

  SaveRegisterValue(datakeys, data) {
    datakeys.map(res => {
      RegisterObj[res] = data[res];
    });
  },
  capitalize: str => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  splitNameWithDot: str => {
    if (!str) return;
    const splt = str.split('.');
    return Helper.capitalize(splt[1]);
  },
  qualificationWanted: () => {
    if (!dataOption || !RegisterObj.qualifications) return;
    dataOption.qualifications_wanted = _.filter(
      dataOption.qualifications,
      option => !RegisterObj.qualifications.includes(option.key),
    );
    Events.trigger('qualificationWanted');
  },
  removeExtraData: () => {
    if (global.apiToken) {
      return;
    }
    const typ = TypeData[ServerVar.contactType];
    if (!typ) return;
    const checkCountry = Object.keys(typ);
    checkCountry.map(res => {
      if (HeroesVar.country === res) {
        const obj = Object.keys(typ[HeroesVar.country]);
        obj.map(res => {
          delete RegisterObj[res];
        });
      }
    });
  },
  addContactType: () => {
    if (global.apiToken) {
      return;
    }
    _.merge(RegisterObj, TypeData[ServerVar.contactType][HeroesVar.country]);
  },
  registerDeviceToken: fcmToken => {
    if (!fcmToken || !global.apiToken) return;
    const body = {
      token: fcmToken,
    };
    console.log(fcmToken, 'Token');
    APICaller(`${Http.registerDevice}`, 'PUT', global.apiToken, body).then(
      json => {
        console.log('Register', json);
      },
    );
  },
  checkResponseStatus: status => {
    if (
      status !== GlobalVar.responseSuccess &&
      status !== GlobalVar.responseInvalidCode
    ) {
      Events.trigger(
        'toast',
        Helper.translation(
          `Words.${GlobalVar.requestFailedMsg}`,
          GlobalVar.requestFailedMsg,
        ),
      );
      return false;
    }
    return true;
  },
  countryFlag: res => {
    if (res === 'de') return Images.deFlag;
    if (res === 'en') return Images.enFlag;
    if (res === 'pl') return Images.plFlag;
  },
  pushNotificationLogs(type) {
    const body = {
      notification_type: type,
    };
    APICaller(
      `${Http.pushNotificationLogsEndpoint}`,
      'POST',
      global.apiToken,
      body,
    ).then(json => {
      console.log('Notification Logs', json);
    });
  },
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  //Convert UTC to Local date time
  localDateTime(date) {
    if (!date) return null;
    var stillUtc = moment.utc(date).toDate();
    return (local = moment(stillUtc)
      .local()
      .format('YYYY-MM-DD HH:mm:ss'));
  },
};

//export default new Helper();
