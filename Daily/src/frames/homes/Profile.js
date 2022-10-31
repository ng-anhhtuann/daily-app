import React from 'react';
import {View, StyleSheet} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {WHITE} from '../../utils/colors';
import {imgs} from '../../assets';
import Category from '../../shared/Category';
import SettingButton from '../../shared/SettingButton';
import Gravatar from '../../shared/Gravatar';

const Profile = () => {
  return (
    <View style={styles.container}>
      <SettingButton
        buttonContainer={styles.buttonContainer}
        buttonHolder={styles.buttonHolder}
      />
      <Gravatar
        avatar={imgs.profileAvatar}
        name={'Steve Jobs'}
        mail={'SteveJob@gmail.com'}
      />
      <Category
        categoryContainer={styles.categoryContainer}
        sideCategory={styles.sideCategory}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {flex: 7, flexDirection: 'row'},
  sideCategory: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    paddingLeft: DeviceWidth * 0.05,
    paddingRight: DeviceWidth * 0.05,
    backgroundColor: WHITE,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonHolder: {
    backgroundColor: 'white',
    height: DeviceHeight * 0.06,
    width: DeviceHeight * 0.06,
    borderRadius: DeviceHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
export default Profile;
