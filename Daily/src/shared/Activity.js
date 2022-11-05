import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GREY_WEAK, NAME_TEXT, TEXT_FADE, WHITE} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import {space, title} from '../utils/typo';
import {BackButton, NextButton} from './svgs';
const Activity = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const today = new Date();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();
  return (
    <View style={styles.activity}>
      <View style={styles.forwardMonth}>
        <TouchableOpacity>
          <BackButton />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: title.medium,
            color: NAME_TEXT,
          }}>
          {month} {year}
        </Text>
        <TouchableOpacity>
          <NextButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  activity: {
    height: DeviceHeight * 0.35,
    width: DeviceWidth * 0.9,
    backgroundColor: GREY_WEAK,
    borderRadius: 20,
    padding: space.aBit,
  },
  forwardMonth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: space.aBit,
  },
});
export default Activity;
