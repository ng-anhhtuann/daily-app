import React, {useState} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {imgs} from '../assets';
import {GREY_TEXT, PURPLE_HEAVY, WHITE} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import CompilationItem from './CompilationItem';
import CompilationItems from './CompilationItem';

const Compilation = ({
  onCompletePressed,
  onCancelPressed,
  onPendingPressed,
  onGoingPressed,
}) => {
  return (
    <View style={styles.compilationWrap}>
      <View style={styles.sideCompilation}>
        <CompilationItem
          imgStyle={styles.squareImg}
          onPress={onCompletePressed}
          source={imgs.complete}
          containerStyle={styles.marginVertical}
        />
        <CompilationItem
          imgStyle={styles.rectangleImg}
          onPress={onCancelPressed}
          source={imgs.cancel}
          containerStyle={styles.emptyStyle}
        />
      </View>
      <View style={styles.sideCompilation}>
        <CompilationItem
          imgStyle={styles.rectangleImg}
          onPress={onPendingPressed}
          source={imgs.pending}
          containerStyle={styles.marginVertical}
        />
        <CompilationItem
          imgStyle={styles.squareImg}
          onPress={onGoingPressed}
          source={imgs.ongoing}
          containerStyle={styles.emptyStyle}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  emptyStyle: {},
  squareImg: {
    width: '100%',
    height: DeviceWidth * 0.42,
  },
  rectangleImg: {
    width: '100%',
    height: DeviceWidth * 0.325,
  },
  marginVertical: {
    marginBottom: DeviceHeight * 0.015,
  },
  sideCompilation: {
    width: '48%',
  },
  compilationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DeviceHeight * 0.015,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingLeft: DeviceWidth * 0.05,
    paddingRight: DeviceWidth * 0.05,
  },
  greeting: {
    fontSize: DeviceHeight * 0.035,
    color: PURPLE_HEAVY,
  },
  slogan: {
    fontSize: DeviceHeight * 0.0175,
    color: GREY_TEXT,
    marginTop: DeviceHeight * 0.01,
  },
  avatar: {
    flex: 2,
    height: DeviceHeight * 0.075,
  },
  sloganContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  compilation: {
    marginTop: DeviceHeight * 0.04,
    flex: 1,
  },
});
export default Compilation;
