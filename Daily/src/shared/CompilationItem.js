import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {imgs} from '../assets';

const CompilationItem = ({imgStyle, onPress, source, containerStyle}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image source={source} resizeMode="contain" style={imgStyle} />
    </TouchableOpacity>
  );
};

export default CompilationItem;
