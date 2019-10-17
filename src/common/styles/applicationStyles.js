import {Platform} from 'react-native';

import Color from './color';
import Matrics from './matrics';
import Fonts from '../assets/fonts';

const ApplicationStyles = {
  headerStyle: {
    //backgroundColor: Color.darkRed,
    // borderBottomWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Color.headerBorder,
    elevation: 0,
    backgroundColor: Color.white,
  },
  languageIconView: {
    paddingVertical: Matrics.ScaleValue(5),
    paddingHorizontal: Matrics.ScaleValue(15),
  },
  stepView: {
    padding: 5,
    paddingHorizontal: Matrics.ScaleValue(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepText: {
    color: Color.darkRed,
    fontSize: Matrics.ScaleValue(12),
    fontFamily: Fonts.type.Rubik,
    lineHeight: Matrics.ScaleValue(24),
  },
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Color.white,
    fontSize: Matrics.ScaleValue(20),
    fontFamily: Fonts.type.Rubik,
  },
  inviteText: {
    color: Color.darkRed,
    fontFamily: Fonts.type.RubikBold,
    fontSize: Matrics.ScaleValue(14),
  },
  headerLeftIconStyle: {
    margin: Matrics.ScaleValue(16),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  formContainer: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: Matrics.ScaleValue(25),
  },
  navBarMargin: {
    paddingTop:
      Platform.OS == 'ios' ? (Matrics.screenHeight == 812 ? 44 : 20) : 0,
  },
  modalViewContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  viewContainer: {
    backgroundColor: Color.white,
    borderRadius: Matrics.ScaleValue(14),
    marginHorizontal: Matrics.ScaleValue(8),
    marginVertical: Matrics.ScaleValue(5),
    padding: Matrics.ScaleValue(5),
    // width: '75%'
  },
  fontStyle: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Arimo,
  },
  searchContainer: {
    backgroundColor: Color.primary,
    paddingHorizontal: Matrics.ScaleValue(15),
    paddingTop: Matrics.ScaleValue(5),
    paddingBottom: Matrics.ScaleValue(15),
  },
  searchView: {
    backgroundColor: Color.white,
    borderRadius: Matrics.ScaleValue(5),
    padding: Matrics.ScaleValue(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    margin: Matrics.ScaleValue(10),
    alignSelf: 'center',
  },
  closeiconStyle: {
    height: 12,
    width: 12,
    margin: Matrics.ScaleValue(10),
    alignSelf: 'center',
    tintColor: Color.darkGray,
  },
  searchInput: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.Arimo,
    flex: 1,
    color: Color.darkGray,
  },
  titleStyle: {
    fontSize: Matrics.ScaleValue(15),
    fontFamily: Fonts.type.ArimoBold,
    marginHorizontal: Matrics.ScaleValue(15),
    marginVertical: Matrics.ScaleValue(10),
  },
  textStyle: {
    fontFamily: Fonts.type.Arimo,
  },
  scrollViewCss: {
    flex: 1,
    backgroundColor: Color.white,
  },
  extraHeight: {
    height: Matrics.ScaleValue(20),
  },
  errorTextStyle: {
    fontSize: Matrics.ScaleValue(16),
    fontFamily: Fonts.type.ArimoBold,
    textAlign: 'center',
    color: Color.textGray,
  },
  pickerView: {
    width: Matrics.screenWidth - 40,
    height: Matrics.ScaleValue(55),
    borderBottomWidth: 1,
    paddingTop: Matrics.ScaleValue(5),
    borderBottomColor: Color.paleGreyTwo,
    paddingRight: Matrics.ScaleValue(45),
  },
  datePickerStyle: {
    dateInput: {
      borderWidth: 0,
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: Matrics.ScaleValue(55),
    },
    placeholderText: {
      lineHeight: Matrics.ScaleValue(55),
      fontSize: Matrics.ScaleValue(16),
      fontFamily: Fonts.type.Rubik,
      color: Color.silver,
      marginTop: Platform.OS === 'android' ? Matrics.ScaleValue(10) : 0,
    },
    dateText: {
      lineHeight: Matrics.ScaleValue(55),
      fontSize: Matrics.ScaleValue(16),
      marginTop: Platform.OS === 'android' ? Matrics.ScaleValue(10) : 0,
      fontFamily: Fonts.type.Rubik,
    },
  },
  textInput: {
    height: Matrics.ScaleValue(45),
    borderBottomWidth: 1,
    borderColor: Color.paleGreyTwo,
    fontSize: Matrics.ScaleValue(16),
    padding: 0,
    fontFamily: Fonts.type.Rubik,
    paddingRight: Matrics.ScaleValue(45),
    justifyContent: 'center',
    paddingLeft: Matrics.ScaleValue(10),
    borderRadius: Matrics.ScaleValue(5),
    marginVertical: Matrics.ScaleValue(5),
  },
  multiline: {
    height: Matrics.ScaleValue(80),
    textAlignVertical: 'top',
    padding: Matrics.ScaleValue(5),
  },
  errorMessage: {
    fontSize: Matrics.ScaleValue(14),
    fontFamily: Fonts.type.Rubik,
    color: Color.error,
  },
  passwordVisible: {
    position: 'absolute',
    zIndex: 1,
    top: Matrics.ScaleValue(10),
    right: 0,
    padding: Matrics.ScaleValue(10),
  },
  q2Title: {
    fontSize: Matrics.ScaleValue(18),
    color: Color.black30,
    fontFamily: Fonts.type.Rubik,
    marginBottom: Matrics.ScaleValue(5),
  },
  q2TitleOption: {
    fontSize: Matrics.ScaleValue(14),
    color: Color.black30,
    fontWeight: 'bold',
    marginLeft: Matrics.ScaleValue(5),
  },
  chooseTypeReg: {
    borderWidth: 1,
    borderColor: Color.paleGreyTwo,
    borderRadius: Matrics.ScaleValue(5),
    flexDirection: 'row',
    height: Matrics.ScaleValue(60),
    alignItems: 'center',
    paddingHorizontal: Matrics.ScaleValue(20),
    marginTop: Matrics.ScaleValue(5),
  },
  customRadioBtnStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  radioButtonView: {
    // marginRight: Matrics.ScaleValue(15)
  },
  checkboxTitleStyle: {
    fontWeight: 'normal',
    fontSize: Matrics.ScaleValue(13),
    color: Color.black70,
  },
  checkboxView: {
    alignItems: 'flex-start',
    marginRight: Matrics.ScaleValue(20),
  },
  errorText: {
    color: Color.error,
    fontSize: Matrics.ScaleValue(14),
    fontFamily: Fonts.type.RubikBold,
    marginVertical: Matrics.ScaleValue(5),
  },
};
export default ApplicationStyles;
