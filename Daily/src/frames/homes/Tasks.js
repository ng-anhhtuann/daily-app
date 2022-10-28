/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {BOLD_BLUE_TEXT, FADE_TEXT, WHITE} from '../../utils/colors';
import SearchEngine from '../../shared/SearchEngine';
import WeekBar from '../../shared/WeekBar';
import TaskTitle from '../../shared/TaskTitle';

const Tasks = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchEngine />
      <TaskTitle
        taskCalendarHolder={styles.taskCalendarHolder}
        bigText={styles.bigText}
        calendarHolder={styles.calendarHolder}
        monthText={styles.monthText}
      />
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
