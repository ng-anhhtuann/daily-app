/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GREY_LINE} from '../utils/colors';
import {DeviceHeight} from '../utils/device';

const DivideLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 2,
    width: '100%',
    backgroundColor: GREY_LINE,
    marginTop: DeviceHeight * 0.015,
    marginBottom: DeviceHeight * 0.015,
  },
});
export default DivideLine;
