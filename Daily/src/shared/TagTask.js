import React from 'react';
import {View, Text} from 'react-native';

const TagTask = ({tagContainer, textTagStyle, nameTag}) => {
  return (
    <View style={tagContainer}>
      <Text style={textTagStyle}>{nameTag}</Text>
    </View>
  );
};
export default TagTask;
