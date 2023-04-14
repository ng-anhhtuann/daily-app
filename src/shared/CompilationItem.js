/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {imgs} from '../assets';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import {Forward} from './svgs';

const CompilationItem = ({
  buttonStyle,
  onPress,
  background,
  textStyle,
  title,
  number,
  backgroundStyle,
  iconHolderStyle,
  textHolder,
  imageSrc,
  forwardColor,
  hasImg,
}) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <ImageBackground source={background} style={backgroundStyle}>
        <View style={iconHolderStyle}>
          {imageSrc}
          <View style={{height: '100%'}}>
            <Forward color={forwardColor} />
          </View>
        </View>
        <View
          style={[
            textHolder,
            hasImg
              ? {marginTop: DeviceHeight * 0.04}
              : {marginTop: DeviceHeight * -0.03},
          ]}>
          <Text style={textStyle}>{title}</Text>
          <Text style={textStyle}>{number}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CompilationItem;
