/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {BLUE_HEAVY, WHITE} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import DayItem from './DayItem';
const moment = require('moment');
const WeekBar = () => {
  var now = moment().isoWeekday() - 1; // 5 - 1 = 4 ( according to pos )
  let dayWeek = [
    {title: 'MO', index: 0},
    {title: 'TU', index: 1},
    {title: 'WE', index: 2},
    {title: 'TH', index: 3},
    {title: 'FR', index: 4},
    {title: 'SA', index: 5},
    {title: 'SU', index: 6},
  ];
  const tempState = dayWeek.map(val => {
    return now === val.index;
  });
  const [state, setStates] = useState(tempState);
  return (
    <View style={styles.container}>
      {dayWeek.map((day, i) => {
        return (
          <DayItem
            key={`${i}`}
            dayWeek={day.title}
            dayMonth={moment()
              .day(i + 1)
              .format('DD')} // pos = 0 -> monday <> moment monday -> 1 => i+1
            onPress={() => {
              state.map((_val, pos) => {
                state[pos] = pos === day.index;
              });
              setStates([...state]);
            }}
            backgroundStyle={[
              styles.dayStyle,
              state[day.index] ? styles.onTouch : styles.empty,
            ]}
            textStyle={[
              styles.textSize,
              state[day.index] ? styles.whiteText : styles.empty,
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
