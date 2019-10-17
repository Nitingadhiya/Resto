import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PhoneInput from 'react-native-phone-input';
import {Matrics, Fonts, Color, ApplicationStyles} from '../../styles';
// import Helper from "../../../util/helper";
import {Helper} from '../../../util';
import RegisterObj from '../../../api/register-data';

const visibility = (secureTextEntry, passwordVisibleFn) => (
  <TouchableOpacity
    style={ApplicationStyles.passwordVisible}
    onPress={passwordVisibleFn}>
    <Icon
      name={secureTextEntry ? 'visibility' : 'visibility-off'}
      size={20}
      color={Color.black30}
    />
  </TouchableOpacity>
);

export const TextInputView = ({
  keyboardType,
  maxLength,
  onFocus,
  placeholder,
  placeholderTextColor,
  value,
  style,
  onBlur,
  onChangeText,
  onSubmitEditing,
  multiline,
  returnKeyType,
  Ref,
  editable,
  autoCapitalize,
  secureTextEntry,
  placeholderStyle,
  phoneInput,
  langType,
  passwordVisible,
  passwordVisibleFn,
}) => {
  if (phoneInput === true) {
    return (
      <PhoneInput
        ref={ref => {
          this.phone = ref;
        }}
        style={
          style
            ? style
            : {
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
                backgroundColor: editable ? Color.paleGrey : Color.white,
              }
        }
        textStyle={{
          fontSize: Matrics.ScaleValue(16),
          fontFamily: Fonts.type.Rubik,
        }}
        onChangePhoneNumber={val => {
          RegisterObj.phone = val;
          if (this.phone.getISOCode()) {
            console.log('iso', this.phone.getISOCode());
            // global.countryCode = this.phone.getCountryCode();
            RegisterObj.phone_country_code = this.phone.getISOCode();
          }
        }}
        onSelectCountry={val => {
          RegisterObj.phone_country_code = val;
        }}
        value={value}
        cancelText={Helper.translation('Words.Cancel', 'Cancel')}
        confirmText={Helper.translation('Words.Confirm', 'Confirm')}
        disabled={editable}
      />
    );
  }
  return (
    <View>
      <TextInput
        style={[
          style,
          multiline ? ApplicationStyles.multiline : '',
          {backgroundColor: editable ? Color.paleGrey : Color.white},
        ]}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={Helper.translation(
          `${langType}.${placeholder}`,
          placeholder,
        )}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize={autoCapitalize || 'none'}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        editable={!editable}
        ref={Ref}
        onBlur={onBlur}
        onFocus={onFocus}
        underlineColorAndroid="transparent"
        placeholderStyle={placeholderStyle}
      />
      {passwordVisible && visibility(secureTextEntry, passwordVisibleFn)}
    </View>
  );
};
