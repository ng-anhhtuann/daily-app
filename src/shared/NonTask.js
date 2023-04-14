/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {TEXT, TEXT_WEAK} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import DivideLine from './DivideLine';

const NonTask = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.schedule}>You don't have any schedule yet!</Text>
      <TouchableOpacity>
        <Text style={styles.add}>+ Add</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  schedule: {
    color: TEXT_WEAK,
    marginRight: DeviceWidth * 0.05,
  },
  add: {color: TEXT},
});
export default NonTask;
