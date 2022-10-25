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
import {
  WHITE,
  PURPLE_HEAVY,
  GREY_TEXT,
  GREY_WEAK,
  PURPLE,
  TEXT,
  TEXT_WEAK,
  PURPLE_WEAK,
  GREY,
  RED_FADE,
  RED_BG,
} from '../../utils/colors';
import {imgs} from '../../assets/index';
import HeaderProfile from '../../shared/HeaderProfile';
import Compilation from '../../shared/Compilation';
import {SettingDots} from '../../shared/svgs';
import TaskItem from '../../shared/TaskItem';

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    userName: 'Steven',
    onPress: null,
  });
  const [isComing, setIsComing] = useState(false);
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
      <View>
        <TaskItem
          todoItemStyle={styles.todoItemStyle}
          titleMerge={styles.titleMergeComing}
          titleTextContainer={styles.titleTextContainer}
          titleText={styles.titleText}
          timeText={styles.timeText}
          tagContainer={styles.tagContainer}
          textTagStyle={styles.textTagStyle}
          settingStyle={styles.settingStyle}
          titleTodo={'Cleaning Clothes'}
          startTime={'07:00'}
          endTime={'07:15'}
          nameTag={'Home'}
          upComing={true}
        />
        <TaskItem
          todoItemStyle={styles.todoItemStyle}
          titleMerge={styles.titleMergeNotYet}
          titleTextContainer={styles.titleTextContainer}
          titleText={styles.titleText}
          timeText={styles.timeText}
          tagContainer={styles.tagContainerNotYet}
          textTagStyle={styles.textTagStyleNotYet}
          settingStyle={styles.settingStyle}
          titleTodo={'Cleaning Clothes'}
          startTime={'07:00'}
          endTime={'07:15'}
          nameTag={'Urgent'}
          upComing={true}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  settingStyle: {
    height: '25%',
    width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTagStyle: {
    color: PURPLE,
    fontSize: DeviceHeight * 0.012,
    height: 15,
    textAlign: 'center',
  },
  tagContainer: {
    backgroundColor: PURPLE_WEAK,
    height: '50%',
    width: 'auto',
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
  },
  textTagStyleNotYet: {
    color: RED_FADE,
    fontSize: DeviceHeight * 0.012,
    height: 15,
    textAlign: 'center',
  },
  tagContainerNotYet: {
    backgroundColor: RED_BG,
    height: '50%',
    width: 'auto',
    marginRight: 5,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
  },
  timeText: {color: TEXT_WEAK, fontSize: DeviceHeight * 0.02},
  titleText: {
    color: TEXT,
    fontSize: DeviceHeight * 0.02,
  },
  titleTextContainer: {
    left: 10,
    justifyContent: 'space-between',
    height: '100%',
    width: '95%',
  },
  titleMergeComing: {
    height: '40%',
    top: 5,
    width: 2.5,
    borderRadius: 3,
    backgroundColor: PURPLE,
  },
  titleMergeNotYet: {
    height: '40%',
    top: 5,
    width: 2.5,
    borderRadius: 3,
    backgroundColor: RED_FADE,
  },
  todoItemStyle: {
    top: DeviceHeight * 0.015,
    width: '100%',
    height: DeviceHeight * 0.15,
    borderRadius: 15,
    backgroundColor: GREY_WEAK,
    padding: 15,
    flexDirection: 'row',
    marginBottom: DeviceHeight * 0.015,
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
