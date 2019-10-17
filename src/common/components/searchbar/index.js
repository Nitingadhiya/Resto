import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {TextInputView} from '..';
import {Color, Images} from '../../styles';
import Styles from './styles';

class SearchBar extends Component {
  state = {
    searchInput: null,
  };

  /* text input change */
  textInputChange = (stateVal, value) => {
    this.setState({[stateVal]: value});
  };

  // Text input method
  textInput = (
    filterPress,
    sortPress,
    onChangeText,
    onBlur,
    onFocus,
    searchInput,
  ) => (
    <View style={Styles.searchMainView}>
      <Image source={Images.search} style={Styles.searchIcon} />
      <TextInputView
        placeholder="Search"
        placeholderTextColor={Color.darkRed}
        placeholderStyle={Styles.placeholderStyle}
        style={Styles.textInput}
        value={searchInput}
        maxLength={40}
        onFocus={onFocus}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      <TouchableOpacity style={Styles.filterStyle} onPress={filterPress}>
        <Image source={Images.filter} />
      </TouchableOpacity>
      <TouchableOpacity style={Styles.filterStyle} onPress={sortPress}>
        <Image source={Images.sort} />
      </TouchableOpacity>
    </View>
  );

  render() {
    const {filterPress, sortPress, onChangeText, onBlur, onFocus} = this.props;
    const {searchInput} = this.state;
    return (
      <View style={Styles.textViewStyle}>
        <View style={Styles.contentViewStyle}>
          {this.textInput(
            filterPress,
            sortPress,
            onChangeText,
            onBlur,
            onFocus,
            searchInput,
          )}
        </View>
      </View>
    );
  }
}
export default SearchBar;
