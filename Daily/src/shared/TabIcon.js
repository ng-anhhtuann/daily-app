/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
const TabIcon = ({focused, imgOn, imgOff, width, height}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={focused ? imgOn : imgOff}
        resizeMode={'contain'}
        style={{
          width: width,
          height: height,
        }}
      />
    </View>
  );
};
export default TabIcon;
