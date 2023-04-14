import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CalendarIcon} from './svgs';
import {monthText} from './Date';
const TaskTitle = ({taskCalendarHolder, bigText, calendarHolder, month}) => {
  return (
    <View style={taskCalendarHolder}>
      <Text style={bigText}>Tasks</Text>
      <TouchableOpacity style={calendarHolder}>
        <CalendarIcon />
        <Text style={month}>{monthText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TaskTitle;
