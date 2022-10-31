/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Graphic from './Graphic';
import Home from './Home';
import Tasks from './Tasks';
import Profile from './Profile';
import AddTask from './AddTask';

import {StyleSheet} from 'react-native';
import {imgs} from '../../assets/index';
import {DeviceHeight, DeviceWidth} from '../../utils/device';
import {WHITE} from '../../utils/colors';
import TabIcon from '../../shared/TabIcon';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName={'Graphic'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              imgOn={imgs.thome}
              imgOff={imgs.fhome}
              width={DeviceHeight * 0.025}
              height={DeviceHeight * 0.025}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              imgOn={imgs.ttask}
              imgOff={imgs.ftask}
              width={DeviceHeight * 0.025}
              height={DeviceHeight * 0.025}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddTask"
        component={AddTask}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              imgOn={imgs.add_task}
              imgOff={imgs.add_task}
              width={DeviceHeight * 0.065}
              height={DeviceHeight * 0.065}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Graphic"
        component={Graphic}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              imgOn={imgs.tgraphic}
              imgOff={imgs.fgraphic}
              width={DeviceHeight * 0.025}
              height={DeviceHeight * 0.025}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              imgOn={imgs.tprofile}
              imgOff={imgs.fprofile}
              width={DeviceHeight * 0.025}
              height={DeviceHeight * 0.025}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 20,
    width: '85%',
    height: DeviceHeight * 0.09,
    left: DeviceWidth * 0.075,
    bottom: 0,
    borderBottomColor: WHITE,
    borderTopColor: WHITE,
    position: 'absolute',
    shadowOpacity: 0.01,
    shadowRadius: 1,
  },
});
export default TabBar;
