import React from 'react';
import {Text} from 'react-native';
const Header = ({title, titleStyle}) => {
  return <Text style={titleStyle}>{title}</Text>;
};
export default Header;
