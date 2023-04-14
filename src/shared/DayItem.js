/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
const DayItem = ({dayWeek, dayMonth, backgroundStyle, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={backgroundStyle}
      onPress={onPress}
      delayPressIn={100}>
      <View style={styles.container}>
        <Text style={textStyle}>{dayWeek}</Text>
        <Text style={textStyle}>{dayMonth}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default DayItem;
