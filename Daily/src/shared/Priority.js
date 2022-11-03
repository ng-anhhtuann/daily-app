import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GREY_WEAK, NAME_TEXT, TEXT_FADE, WHITE} from '../utils/colors';
import {DeviceHeight, DeviceWidth} from '../utils/device';
import {space, title} from '../utils/typo';
import DescriptionContainer from './DescriptionContainer';
import Header from './Header';
import ScatterChart from './ScatterChart';
function ceilUp(n) {
  var r = n % 10;
  if (r >= 0) {
    return Math.ceil(n / 10) * 10;
  }
}
const Priority = () => {
  const task = {
    personal: [2, 5, 3, 1, 4, 7, 0],
    private: [1, 3, 5, 8, 9, 10, 0],
    secret: [0, 1, 2, 3, 0, 1, 0],
  };
  const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const highPivot = ceilUp(
    Math.max(
      Math.max(...task.personal),
      Math.max(...task.private),
      Math.max(...task.secret),
    ),
  );
  const num = [];
  for (var i = 0; i < 6; i++) {
    var temp = highPivot - (highPivot / 5) * i;
    num.push(temp);
  }
  return (
    <View style={styles.priority}>
      <View style={styles.titleDesc}>
        <Header title={'Priority'} titleStyle={styles.title} />
        <DescriptionContainer />
      </View>
      <Header title={'Task PerDay'} titleStyle={styles.textFade} />
      <ScatterChart
        weekTitleDay={week}
        divideTask={num}
        highPivot={highPivot}
        listOfTag={task}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textFade: {
    color: TEXT_FADE,
    fontSize: title.sText,
    marginTop: space.baby,
    marginBottom: space.medium,
  },
  priority: {
    height: DeviceHeight * 0.35,
    width: DeviceWidth * 0.9,
    backgroundColor: GREY_WEAK,
    borderRadius: 20,
    padding: space.aBit,
  },
  titleDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  container: {
    backgroundColor: WHITE,
    paddingRight: DeviceWidth * 0.05,
    paddingLeft: DeviceWidth * 0.05,
  },
  marginBottom: {
    marginBottom: title.medium,
  },
  title: {
    color: NAME_TEXT,
    fontSize: title.medium,
    textAlign: 'center',
  },
});
export default Priority;
