/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {HIDDEN_TEXT, SEARCH_BG} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import {CloseIcon, SearchIcon} from './svgs';

const SearchEngine = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.textContainer}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.textInput}
          numberOfLines={1}
          placeholder={'Search for something...'}
          placeholderTextColor={HIDDEN_TEXT}
          onSubmitEditing={Keyboard.dismiss}
          returnKeyType={'search'}
        />
      </View>
      <View style={styles.cancelContainer}>
        <TouchableOpacity style={styles.cancelTouchStyle}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cancelTouchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    height: DeviceHeight * 0.065,
    width: '100%',
    backgroundColor: SEARCH_BG,
    borderRadius: 15,
    flexDirection: 'row',
  },
  textInput: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    paddingLeft: DeviceWidth * 0.9 * 0.85 * 0.1875,
  },
  textContainer: {
    width: '85%',
    height: '100%',
    flexDirection: 'row',
  },
  searchIcon: {
    width: '18.75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelContainer: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SearchEngine;
