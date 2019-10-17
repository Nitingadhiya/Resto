//import RNUxcam from "react-native-ux-cam";
import ServerVar from '../../config/server-config';

export const Uxcam = {
  startRecording: screen => {
    RNUxcam.startWithKey(ServerVar.uxcamURL()); // Start screen recording
  },
  // stopRecording = () => {
  //   RNUxcam.stopApplicationAndUploadData(); // Stop screen recording
  // };
  setUserIdentity: userData => {
    RNUxcam.setUserIdentity(userData); // set User identity for screen recording
  },
  setUserProperty: (key, value) => {
    RNUxcam.setUserProperty(key, value); // set User Property
  },
  tagScreenName: name => {
    RNUxcam.tagScreenName(name); //set screen name
  },
  logEvent: (eventName, object) => {
    const obj = object;
    if (!object) {
      object = null;
    }
    RNUxcam.logEvent(eventName, object); // Log activity
  },
};
//export default new Uxcam();
