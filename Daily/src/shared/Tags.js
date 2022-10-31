import React from 'react';
import {View, Text} from 'react-native';

const Tags = ({tagContainer, textTagStyle, nameTag}) => {
  for (var i = 0; i < nameTag.length; i++) {
    return (
      <View style={tagContainer}>
        <Text style={textTagStyle}>{nameTag[i]}</Text>
      </View>
    );
  }
};
export default Tags;
