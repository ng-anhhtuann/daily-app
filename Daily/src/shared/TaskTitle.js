import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CalendarIcon} from './svgs';

const TaskTitle = ({
  taskCalendarHolder,
  bigText,
  calendarHolder,
  monthText,
}) => {
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
  return (
    <View style={taskCalendarHolder}>
      <Text style={bigText}>Tasks</Text>
      <TouchableOpacity style={calendarHolder}>
        <CalendarIcon />
        <Text style={monthText}>{month}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TaskTitle;
