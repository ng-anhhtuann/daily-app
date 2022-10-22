import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {imgs} from '../assets';
import {GREY_TEXT, PURPLE_HEAVY} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';

const HeaderProfile = ({userName, onPress}) => {
  // console.log({userName});
  return (
    <View style={styles.sloganContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.greeting}>{`Hi, ${userName}`}</Text>
        <Text style={styles.slogan}>Let's make this day productive</Text>
      </View>
      <TouchableOpacity style={styles.imgContainer} onPress={onPress}>
        <Image source={imgs.avatar} style={styles.avatar} resizeMode="center" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    flex: 2,
  },
  imgContainer: {
    flex: 1,
    alignContent: 'flex-end',
  },
  greeting: {
    fontSize: DeviceHeight * 0.035,
    color: PURPLE_HEAVY,
  },
  slogan: {
    fontSize: DeviceHeight * 0.0175,
    color: GREY_TEXT,
    marginTop: DeviceHeight * 0.01,
  },
  avatar: {
    alignSelf: 'flex-end',
    height: DeviceHeight * 0.075,
    width: DeviceHeight * 0.075,
  },
  sloganContainer: {
    width: DeviceWidth * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default HeaderProfile;
