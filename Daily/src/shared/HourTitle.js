import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
const moment = require('moment');

const HourTitle = ({todayHour, todayText, hourText}) => {
  const now = moment();

  const [hm, setHm] = useState(now);
  useEffect(() => {
    var timer = setInterval(() => setHm(moment()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return (
    <View style={todayHour}>
      <Text style={todayText}>Today</Text>
      <Text style={hourText}>{`${hm.format('HH')} h ${hm.format('mm')}`}</Text>
    </View>
  );
};
export default HourTitle;
