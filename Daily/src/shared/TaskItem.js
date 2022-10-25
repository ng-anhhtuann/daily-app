/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {DeviceHeight} from '../utils/device';
import {SettingDots} from './svgs';
import TagTask from './TagTask';

const TaskItem = ({
  todoItemStyle,
  titleMerge,
  titleTextContainer,
  titleText,
  timeText,
  tagContainer,
  textTagStyle,
  settingStyle,
  titleTodo,
  startTime,
  endTime,
  nameTag,
  upComing,
}) => {
  return (
    <View style={todoItemStyle}>
      <View style={titleMerge} />
      <View style={titleTextContainer}>
        <Text numberOfLines={1} style={titleText}>
          {titleTodo}
        </Text>
        <Text style={timeText}>{`${startTime} - ${endTime}`}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            top: DeviceHeight * 0.0175,
          }}>
          <TagTask
            tagContainer={tagContainer}
            textTagStyle={textTagStyle}
            nameTag={nameTag}
          />
        </View>
      </View>
      <TouchableOpacity style={settingStyle}>
        <SettingDots />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
