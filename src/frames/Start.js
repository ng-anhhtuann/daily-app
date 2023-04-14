import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {imgs} from '../assets';
import {BLUE_HEAVY, WHITE} from '../utils/colors';
import {DeviceWidth, DeviceHeight} from '../utils/device';
const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={imgs.splash} style={styles.img} resizeMode="contain" />
      </View>
      <View style={styles.header}>
        <Image source={imgs.logo} style={styles.logo} resizeMode="contain" />
        <Text numberOfLines={2} center styles={styles.motto}>
          {
            'Plan what you will do to be more organized for today, tomorrow and beyond'
          }
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            navigation.navigate('TabBar');
          }}>
          <Text style={styles.login}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  login: {
    color: WHITE,
  },
  buttonLogin: {
    backgroundColor: BLUE_HEAVY,
    width: DeviceWidth * 0.8,
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignup: {
    width: DeviceWidth * 0.8,
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: DeviceHeight * 0.3,
    width: DeviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  motto: {
    textAlign: 'center',
  },
  buttons: {
    height: DeviceHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  img: {
    width: DeviceWidth * 0.8,
    height: DeviceWidth * 0.8,
  },
  logo: {
    width: DeviceWidth * 0.5,
    height: DeviceWidth * 0.1,
    marginBottom: 16,
  },
  imgContainer: {
    height: DeviceHeight * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default Start;
