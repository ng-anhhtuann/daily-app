import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {WHITE} from '../../utils/colors';
import {imgs} from '../../assets';
import Category from '../../shared/Category';
import SettingButton from '../../shared/SettingButton';
import Gravatar from '../../shared/Gravatar';
import {useSelector} from 'react-redux';

const Profile = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SettingButton
        buttonContainer={styles.buttonContainer}
        buttonHolder={styles.buttonHolder}
      />
      <Gravatar
        avatar={imgs.profileAvatar}
        name={'Steve Jobs'}
        mail={'SteveJob@gmail.com'}
        customStyle={undefined}
      />
      <Category
        categoryContainer={styles.categoryContainer}
        sideCategory={styles.sideCategory}
      />
      <View style={{height: DeviceHeight * 0.1}} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {flexDirection: 'row'},
  sideCategory: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
  },
  container: {
    paddingLeft: DeviceWidth * 0.05,
    paddingRight: DeviceWidth * 0.05,
    backgroundColor: WHITE,
  },
  buttonContainer: {
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
