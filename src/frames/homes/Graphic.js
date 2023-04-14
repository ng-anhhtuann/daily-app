import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import Activity from '../../shared/Activity';
import Header from '../../shared/Header';
import Priority from '../../shared/Priority';

import {NAME_TEXT, WHITE} from '../../utils/colors';
import {DeviceHeight, DeviceWidth} from '../../utils/device';
import {title} from '../../utils/typo';

const Graphic = () => {
  return (
    <ScrollView style={styles.container}>
      <Header
        title={'Graphic'}
        titleStyle={[styles.title, styles.marginBottom]}
      />
      <Priority />
      <Header
        title={'Your Activity'}
        titleStyle={[styles.activity, styles.marginTop]}
      />
      <Activity />
      <View style={styles.addingScroll} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  addingScroll: {height: DeviceHeight * 0.1},
  container: {
    backgroundColor: WHITE,
    paddingRight: DeviceWidth * 0.05,
    paddingLeft: DeviceWidth * 0.05,
  },
  marginTop: {marginTop: title.big, marginBottom: title.big},
  marginBottom: {
    marginBottom: title.medium,
  },
  activity: {
    color: NAME_TEXT,
    fontSize: title.medium,
  },
  title: {
    color: NAME_TEXT,
    fontSize: title.medium,
    textAlign: 'center',
  },
});
export default Graphic;
