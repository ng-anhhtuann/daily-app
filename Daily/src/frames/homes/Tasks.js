/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {
  BLACK,
  BLUE_HEAVY,
  BOLD_BLUE_TEXT,
  FADE_TEXT,
  GREY_LINE,
  GREY_WEAK,
  PURPLE,
  PURPLE_HEAVY,
  PURPLE_WEAK,
  RED_BG,
  RED_FADE,
  TEXT,
  TEXT_WEAK,
  WHITE,
} from '../../utils/colors';
import SearchEngine from '../../shared/SearchEngine';
import WeekBar from '../../shared/WeekBar';
import TaskTitle from '../../shared/TaskTitle';
import HourTitle from '../../shared/HourTitle';
import HorizontalTask from '../../shared/HorizontalTask';

const Tasks = () => {
  //testing UI
  const task7Array = [
    {
      title: 'Cleaning Clothes',
      timeStart: '07:00',
      timeEnd: '07:15',
      tagArray: ['Home', 'Urgent'],
    },
    {
      title: 'Doing chore',
      timeStart: '07:15',
      timeEnd: '07:30',
      tagArray: ['Home', 'Urgent'],
    },
  ];
  const task8Array = [
    {
      title: 'Cleaning Clothes',
      timeStart: '08:00',
      timeEnd: '08:35',
      tagArray: ['Home', 'Urgent'],
    },
    {
      title: 'Doing chore',
      timeStart: '08:35',
      timeEnd: '08:55',
      tagArray: ['Home', 'Urgent'],
    },
  ];
  const task9Array = [];
  const task10Array = [
    {
      title: 'Cleaning Clothes',
      timeStart: '10:00',
      timeEnd: '08:35',
      tagArray: ['Home', 'Urgent'],
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SearchEngine />
      <TaskTitle
        taskCalendarHolder={styles.taskCalendarHolder}
        bigText={styles.bigText}
        calendarHolder={styles.calendarHolder}
        month={styles.monthText}
      />
      <WeekBar />
      <HourTitle
        todayHour={styles.todayHour}
        todayText={styles.todayText}
        hourText={styles.hourText}
      />
      <HorizontalTask timePivot={'07:00'} taskArray={task7Array} />
      <HorizontalTask timePivot={'08:00'} taskArray={task8Array} />
      <HorizontalTask timePivot={'09:00'} taskArray={task9Array} />
      <HorizontalTask timePivot={'10:00'} taskArray={task10Array} />
      <View style={{height: DeviceHeight * 0.1}} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  titleMergeNotYet: {
    height: '40%',
    top: 5,
    width: 2.5,
    borderRadius: 3,
    backgroundColor: RED_FADE,
  },
  settingStyle: {
    height: '25%',
    width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTagStyle: {
    color: PURPLE,
    fontSize: DeviceHeight * 0.012,
    height: 15,
    textAlign: 'center',
  },
  tagContainer: {
    backgroundColor: PURPLE_WEAK,
    height: '50%',
    width: 'auto',
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
  },
  textTagStyleNotYet: {
    color: RED_FADE,
    fontSize: DeviceHeight * 0.012,
    height: 15,
    textAlign: 'center',
  },
  tagContainerNotYet: {
    backgroundColor: RED_BG,
    height: '50%',
    width: 'auto',
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
  },
  timeText: {color: TEXT_WEAK, fontSize: DeviceHeight * 0.02},
  titleText: {
    color: TEXT,
    fontSize: DeviceHeight * 0.02,
  },
  titleTextContainer: {
    left: 10,
    justifyContent: 'space-between',
    height: '100%',
    width: '95%',
  },
  titleMergeComing: {
    height: '40%',
    top: 5,
    width: 2.5,
    borderRadius: 3,
    backgroundColor: PURPLE,
  },
  todoItemStyle: {
    width: '55%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: GREY_WEAK,
    marginRight: DeviceWidth * 0.025,
    padding: 15,
    flexDirection: 'row',
    marginBottom: DeviceHeight * 0.015,
  },
  todayText: {
    fontSize: DeviceHeight * 0.035,
    color: PURPLE_HEAVY,
  },
  hourText: {
    fontSize: DeviceHeight * 0.02,
    color: BLACK,
    marginRight: DeviceWidth * 0.03,
    textAlign: 'right',
  },
  todayHour: {
    flexDirection: 'row',
    marginTop: DeviceHeight * 0.015,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
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
