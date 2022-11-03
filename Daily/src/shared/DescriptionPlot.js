import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NAME_TEXT} from '../utils/colors';
import {title} from '../utils/typo';

const DescriptionPlot = ({text, colorDot}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, {backgroundColor: colorDot}]} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginRight: 5},
  dot: {
    height: title.tiny,
    width: title.tiny,
    borderRadius: 5,
    marginRight: 2.5,
    marginTop: 2.5,
  },
  text: {color: NAME_TEXT, fontSize: title.small},
});
export default DescriptionPlot;
