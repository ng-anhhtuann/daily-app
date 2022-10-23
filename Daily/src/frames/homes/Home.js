/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {DeviceWidth, DeviceHeight} from '../../utils/device';
import {WHITE, PURPLE_HEAVY, GREY_TEXT, GREY_WEAK} from '../../utils/colors';
import {imgs} from '../../assets/index';
import HeaderProfile from '../../shared/HeaderProfile';
import Compilation from '../../shared/Compilation';

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    userName: 'Steven',
    onPress: null,
  });

  const renderHeader = useMemo(() => {
    return (
      <HeaderProfile
        userName={userInfo.userName}
        onPress={() => {
          alert(
            'Touch avatar will let you to Settings \n But we will fix it soon :(',
          );
        }}
      />
    );
  }, [userInfo.userName]);
  const sendAlert = message => {
    alert(message);
  };
  return (
    <ScrollView style={styles.container}>
      {renderHeader}
      <View style={styles.compilation}>
        <Text style={styles.greeting}>Compilation</Text>
      </View>
      <Compilation
        onCompletePressed={() => {
          alert('Complete');
        }}
        onCancelPressed={() => {
          alert('Cancel');
        }}
        onPendingPressed={() => {
          alert('Pending');
        }}
        onGoingPressed={() => {
          alert('On going');
        }}
        numberOfCompletedTasks={0}
        numberOfCanceledTasks={0}
        numberOfPendingTasks={0}
        numberOfOnTasks={0}
      />
      <View style={styles.todayView}>
        <Text style={styles.todayText}>Today</Text>
        <TouchableOpacity>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoContainer}>{/* <View */}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    top: DeviceHeight * 0.015,
    width: '100%',
  },
  todayText: {
    fontSize: DeviceHeight * 0.035,
    color: PURPLE_HEAVY,
  },
  viewText: {
    fontSize: DeviceHeight * 0.015,
    color: PURPLE_HEAVY,
    marginRight: DeviceWidth * 0.03,
    textAlign: 'right',
  },
  todayView: {
    flexDirection: 'row',
    marginTop: DeviceHeight * 0.015,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
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
export default Home;
