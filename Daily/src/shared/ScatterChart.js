/* eslint-disable react-native/no-inline-styles */
/* In case you want to reuse this manual ScatterChart again, do following thing:
- resize Height of the chart tree with variable heightMeasure by the parent percent of height there */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {imgs} from '../assets';
import {NAME_TEXT, PERSONAL, PRIVATE, SECRET} from '../utils/colors';
import {DeviceHeight} from '../utils/device';
import {title} from '../utils/typo';
const ScatterChart = ({weekTitleDay, divideTask, highPivot, listOfTag}) => {
  return (
    <View style={styles.container}>
      <View style={styles.numTaskContainer}>
        {divideTask.map((val, i) => {
          return (
            <Text key={i} style={styles.num}>
              {val}
            </Text>
          );
        })}
      </View>
      {weekTitleDay.map((val, i) => {
        var heightMeasure = DeviceHeight * 0.35 * 0.75 * 0.85 * 0.85;
        return (
          <View style={styles.taskBar}>
            <Image source={imgs.stribeLine} style={{height: '85%'}} />
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: PERSONAL,
                  marginTop:
                    heightMeasure -
                    (heightMeasure / highPivot) * listOfTag.personal[i] -
                    2,
                },
              ]}
            />
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: SECRET,
                  marginTop:
                    heightMeasure -
                    (heightMeasure / highPivot) * listOfTag.secret[i] -
                    2,
                },
              ]}
            />
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: PRIVATE,
                  marginTop:
                    heightMeasure -
                    (heightMeasure / highPivot) * listOfTag.private[i] -
                    2,
                },
              ]}
            />
            <Text style={styles.dayWeek}>{val}</Text>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '75%',
    width: '100%',
    flexDirection: 'row',
  },
  numTaskContainer: {
    height: '85%',
    width: '9%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  num: {color: NAME_TEXT, fontSize: title.text},
  taskBar: {
    height: '100%',
    width: '13%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dot: {
    height: title.small,
    width: title.small,
    borderRadius: title.small,
    position: 'absolute',
  },
  dayWeek: {color: NAME_TEXT, fontSize: title.text},
});
export default ScatterChart;
