import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  BOOST_BG,
  GREY,
  GREY_LINE,
  GREY_WEAK,
  NAME_TEXT,
  PERSONAL,
  PRIVATE,
  SECRET,
  TEXT_FADE,
  WHITE,
} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import {space, title} from '../utils/typo';
import {BackButton, NextButton} from './svgs';
import {monthNames, monthText, year} from './Date';
import Booster from './Booster';
import moment from 'moment';
const Activity = () => {
  const typeArr = [SECRET, PERSONAL];
  const firstBoosterDayIndex = -9;
  const listBooster = [];
  for (var i = 0; i < 10; i++) {
    listBooster.push({
      type: typeArr[Math.floor(Math.random() * typeArr.length)],
      percent: Math.floor(Math.random() * 100),
    });
  }
  var now = moment().isoWeekday();
  // @ts-ignore
  var monthIndex = moment().day(now).format('MM') - 1;
  return (
    <View style={styles.activity}>
      <View style={styles.forwardMonth}>
        <TouchableOpacity>
          <BackButton />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: title.medium,
            color: NAME_TEXT,
          }}>
          {monthNames[monthIndex]} {moment().day(now).format('yyyy')}
        </Text>
        <TouchableOpacity>
          <NextButton />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '80%',
          width: '100%',
          flexDirection: 'row',
        }}>
        {listBooster.map((val, i) => {
          return (
            <Booster
              key={i}
              day={moment()
                .day(firstBoosterDayIndex + i)
                .format('DD')}
              percent={val.percent}
              type={val.type}
            />
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  activity: {
    height: DeviceHeight * 0.35,
    width: DeviceWidth * 0.9,
    backgroundColor: GREY_WEAK,
    borderRadius: 20,
    padding: space.aBit,
  },
  forwardMonth: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: space.aBit,
  },
});
export default Activity;
