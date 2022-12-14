/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {GREY_TEXT, NAME_TEXT} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';

const CategoryItem = ({
  colorBackground,
  colorIcon,
  icon,
  title,
  numberOfTasks,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colorBackground}]}>
      <View style={[styles.iconHolder, {backgroundColor: colorIcon}]}>
        {icon}
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.taskText}>{numberOfTasks} Tasks</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: DeviceWidth * 0.4,
    height: DeviceWidth * 0.4,
    overflow: 'hidden',
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconHolder: {
    width: DeviceWidth * 0.15,
    height: DeviceWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    color: NAME_TEXT,
    fontSize: DeviceHeight * 0.02,
  },
  taskText: {color: GREY_TEXT, fontSize: DeviceHeight * 0.018},
});
export default CategoryItem;
