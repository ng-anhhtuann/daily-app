import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {NAME_TEXT} from '../utils/colors';
import {DeviceHeight} from '../utils/device';

const Gravatar = ({avatar, name, mail}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.imgStyle} />
      </View>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.mailStyle}>{mail}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: DeviceHeight * 0.015,
  },
  avatarContainer: {
    backgroundColor: 'white',
    height: DeviceHeight * 0.1,
    width: DeviceHeight * 0.1,
    borderRadius: DeviceHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  imgStyle: {width: '50%', height: '61.6%'},
  nameStyle: {color: NAME_TEXT, fontSize: DeviceHeight * 0.025},
  mailStyle: {color: NAME_TEXT, fontSize: DeviceHeight * 0.015},
});
export default Gravatar;
