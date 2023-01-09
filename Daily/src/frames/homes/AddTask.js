import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {BLUE_HEAVY, WHITE, BLACK} from '../../utils/colors';
import {BackButton} from '../../shared/svgs';

const AddTask = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: WHITE,
          borderRadius: 16,
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          shadowOpacity: 0.05,
          shadowRadius: 5,
          // position: 'absolute',
        }}>
        <BackButton />
      </TouchableOpacity>
      <View
        style={{
          // position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: BLACK, fontSize: 20}}>Add Task</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: WHITE,
    paddingTop: DeviceWidth * 0.01,
    paddingRight: DeviceWidth * 0.05,
    paddingLeft: DeviceWidth * 0.05,
  },
});
export default AddTask;
