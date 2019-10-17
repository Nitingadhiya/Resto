import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, TextInputView} from '../../../common/components';
import {Color, Matrics} from '../../../common/styles';
import Styles from './styles';
import {APICaller, Events, Helper} from '../../../util';
import Http from '../../../api/http';
import GlobalVar from '../../../global';
import ErrorComponent from '../../../common/components/error-message';
import RegisterObj from '../../../api/register-data';

class Front extends Component {
  state = {
    email: '',
    password: '',
    errorModal: false,
    errorMsg: '',
    successModal: false,
    successMsg: '',
    loading: false,
    loginMessage: null,
    activeTab: '1',
    textInputArray: [
      {
        placeholder: 'Nickname',
        stateName: 'nickename',
        returnKeyType: 'next',
        keyboardType: 'default',
        nextRef: 'phone',
        phoneInput: false,
      },
      {
        placeholder: 'Phone Number',
        stateName: 'phone',
        returnKeyType: 'next',
        keyboardType: 'phone-pad',
        nextRef: 'email',
        phoneInput: false,
      },
      {
        placeholder: 'Email Id',
        stateName: 'email',
        returnKeyType: 'next',
        keyboardType: 'email-address',
        nextRef: 'email',
        phoneInput: false,
      },
    ],
    errorsMsg: null,
  };

  /* text input change */
  textInputChange = (stateVal, value) => {
    console.log(RegisterObj.phone);
    this.setState({[stateVal]: value});
  };

  loadingView = visible => {
    this.setState({
      loading: visible,
    });
  };

  /* Simple login  */
  signInFunction = navigation => {
    navigation.navigate('Categories');
  };

  textInput = (
    placeholder,
    stateName,
    returnKeyType,
    keyboardType,
    nextRef,
    value,
    phoneInput,
  ) => (
    <View key={`${nextRef}_Text`} style={Styles.textInputView}>
      <TextInputView
        placeholder={placeholder}
        placeholderTextColor={Color.darkRed}
        placeholderStyle={Styles.placeholderStyle}
        style={Styles.textInput}
        value={value[stateName]}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        maxLength={40}
        onSubmitEditing={() =>
          nextRef === 'email' ? this.email.focus() : this.phone.focus()
        }
        onChangeText={email => this.textInputChange(stateName, email)}
        Ref={r => {
          nextRef === 'email' ? (this.email = r) : (this.phone = r);
        }}
        phoneInput={phoneInput}
      />
      <ErrorComponent stateName={stateName} errorsMsg={this.state.errorsMsg} />
    </View>
  );

  passwordVisibleFn() {
    const {textInputArray} = this.state;
    textInputArray.map((res, index) => {
      if (res.passwordVisible) {
        textInputArray[index].secureTextEntry = !textInputArray[index]
          .secureTextEntry;
        this.setState({
          textInputArray: textInputArray,
        });
      }
    });
  }

  tabUIView = activeTab => (
    <View style={Styles.tabMainView}>
      <TouchableOpacity
        style={[Styles.tabView, activeTab === '1' && Styles.activeTab]}
        onPress={() => this.phoneTabPress()}
        activeOpacity={1}>
        <Text
          style={[Styles.tabText, activeTab === '1' && Styles.activeTabText]}>
          {Helper.translation('Login.Phone', 'Phone')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.tabView, activeTab === '2' && Styles.activeTab]}
        onPress={() => this.emailTabPress()}
        activeOpacity={1}>
        <Text
          style={[Styles.tabText, activeTab === '2' && Styles.activeTabText]}>
          {Helper.translation('Login.Email', 'Email')}{' '}
          {this.state.detailsData &&
            this.state.detailsData.reviews.length > 0 &&
            `(${this.state.detailsData.reviews.length})`}
        </Text>
      </TouchableOpacity>
    </View>
  );

  phoneTabPress() {
    this.setState({
      activeTab: '1',
    });
  }

  emailTabPress() {
    this.setState({
      activeTab: '2',
    });
  }

  render() {
    const {navigation} = this.props;
    const {textInputArray, activeTab} = this.state;
    return (
      <View>
        <View style={Styles.contentViewStyle}>
          {/* {this.tabUIView(activeTab)} */}
          {textInputArray &&
            textInputArray.map(res => {
              return this.textInput(
                res.placeholder,
                res.stateName,
                res.returnKeyType,
                res.keyboardType,
                res.nextRef,
                this.state,
                res.phoneInput,
              );
            })}
        </View>

        <Button
          label={Helper.translation(`Login.Sign In`, 'Sign In')}
          customStyle={Styles.signInButton}
          onPress={() => this.signInFunction(navigation)}
        />
      </View>
    );
  }
}
export default Front;
