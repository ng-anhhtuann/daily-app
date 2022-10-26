/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BLUE_HEAVY, WHITE} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import DayItem from './DayItem';
const WeekBar = () => {
  const monDay = 12;
  const dayWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const [press, setPress] = useState(false);
  const [restPress, setRestPress] = useState(false);
  const state = [false, false, false, false, false, false, false];
  return (
    <View style={styles.container}>
      {dayWeek.map((day, i) => {
        return (
          <DayItem
            dayWeek={day}
            dayMonth={monDay + i}
            onPress={() => {
              if (state[i] === true) {
              } else {
                state[i] = true;
                state.map((val, index) => {
                  if (val === true && index !== i) {
                    val = false;
                  }
                });
              }
              console.log(i);
              console.log(state);
            }}
            backgroundStyle={[
              styles.dayStyle,
              state[i] ? styles.onTouch : styles.empty,
            ]}
            textStyle={[
              styles.textSize,
              state[i] ? styles.whiteText : styles.empty,
            ]}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: DeviceHeight * 0.025,
    height: DeviceHeight * 0.08,
    width: '100%',
    flexDirection: 'row',
  },
  dayStyle: {
    width: (DeviceWidth * 0.9) / 7,
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onTouch: {
    backgroundColor: BLUE_HEAVY,
  },
  textSize: {fontSize: DeviceHeight * 0.02},
  whiteText: {color: WHITE},
  empty: {},
});
export default WeekBar;
