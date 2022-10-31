/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {BLUE_HEAVY, NAME_TEXT, WHITE} from '../../utils/colors';
import {DeviceHeight, DeviceWidth} from '../../utils/device';
import {title} from '../../utils/typo';

const Graphic = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          color: NAME_TEXT,
          fontSize: title.medium,
          textAlign: 'center',
          marginBottom: title.medium,
        }}>
        Graphic
      </Text>
      <View
        style={{height: DeviceHeight * 0.5, width: DeviceWidth * 0.5}}></View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    paddingRight: DeviceWidth * 0.05,
    paddingLeft: DeviceWidth * 0.05,
  },
});
export default Graphic;
