/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  GREY_WEAK,
  PURPLE,
  PURPLE_WEAK,
  RED_BG,
  RED_FADE,
  TEXT,
  TEXT_WEAK,
} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import DivideLine from './DivideLine';
import NonTask from './NonTask';
import TaskItem from './TaskItem';

const HorizontalTask = ({timePivot, taskArray}) => {
  return (
    <View>
      <DivideLine />
      <View
        style={
          taskArray.length > 0 ? styles.viewHolder : styles.viewHolderText
        }>
        <Text style={styles.text}>{timePivot}</Text>
        {taskArray.length > 0 ? (
          taskArray.map((val, i) => {
            return (
              <TaskItem
                key={i}
                todoItemStyle={styles.todoItemStyle}
                titleMerge={
                  i === 0 ? styles.titleMergeComing : styles.titleMergeNotYet
                }
                titleTextContainer={styles.titleTextContainer}
                titleText={styles.titleText}
                timeText={styles.timeText}
                tagContainer={
                  i === 0 ? styles.tagContainer : styles.tagContainerNotYet
                }
                textTagStyle={
                  i === 0 ? styles.textTagStyle : styles.textTagStyleNotYet
                }
                settingStyle={styles.settingStyle}
                titleTodo={val.title}
                startTime={val.timeStart}
                endTime={val.timeEnd}
                nameTag={val.tagArray}
              />
            );
          })
        ) : (
          <NonTask />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  schedule: {color: TEXT_WEAK, marginRight: 5, marginTop: DeviceHeight * 0.015},
  add: {color: TEXT, marginTop: DeviceHeight * 0.015},
  viewHolder: {
    flex: 1,
    width: '100%',
    height: DeviceHeight * 0.14,
    flexDirection: 'row',
  },
  viewHolderText: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    marginRight: DeviceWidth * 0.025,
    color: TEXT,
  },
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
});
export default HorizontalTask;
