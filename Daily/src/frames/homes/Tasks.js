/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {
  BLUE_HEAVY,
  BOLD_BLUE_TEXT,
  FADE_TEXT,
  PURPLE_HEAVY,
  TEXT,
  WHITE,
} from '../../utils/colors';
import {CalendarIcon} from '../../shared/svgs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchEngine from '../../shared/SearchEngine';
import WeekBar from '../../shared/WeekBar';

const Tasks = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchEngine />
      <View style={styles.taskCalendarHolder}>
        <Text style={styles.bigText}>Tasks</Text>
        <TouchableOpacity style={styles.calendarHolder}>
          <CalendarIcon />
          <Text style={styles.monthText}>August</Text>
        </TouchableOpacity>
      </View>
      <WeekBar />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: DeviceWidth * 0.05,
    paddingRight: DeviceWidth * 0.05,
    backgroundColor: WHITE,
  },
  bigText: {
    fontSize: DeviceHeight * 0.035,
    color: BOLD_BLUE_TEXT,
  },
  taskCalendarHolder: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: DeviceHeight * 0.025,
    // backgroundColor: 'green',
  },
  calendarHolder: {
    flexDirection: 'row',
    paddingRight: DeviceWidth * 0.05,
  },
  monthText: {
    paddingLeft: 5,
    color: FADE_TEXT,
    paddingRight: 5,
    fontSize: DeviceHeight * 0.015,
  },
});
export default Tasks;
