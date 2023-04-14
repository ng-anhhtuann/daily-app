import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {NAME_TEXT} from '../utils/colors';
import {DeviceHeight} from '../utils/device';
import {title} from '../utils/typo';

const Gravatar = ({avatar, name, mail, customStyle}) => {
  return (
    <View style={[styles.container, customStyle]}>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 15,
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
  nameStyle: {color: NAME_TEXT, fontSize: title.medium, marginBottom: 15},
  mailStyle: {color: NAME_TEXT, fontSize: title.text},
});
export default Gravatar;
