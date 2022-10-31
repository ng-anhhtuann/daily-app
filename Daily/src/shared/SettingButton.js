import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ProfileSettingIcon} from './svgs';

const SettingButton = ({buttonContainer, buttonHolder}) => {
  return (
    <View style={buttonContainer}>
      <TouchableOpacity style={buttonHolder}>
        <ProfileSettingIcon />
      </TouchableOpacity>
    </View>
  );
};
export default SettingButton;
