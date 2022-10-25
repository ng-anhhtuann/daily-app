import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Start from './src/frames/Start';
import TabBar from './src/frames/homes/TabBar';

const Stack = createNativeStackNavigator();
class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TabBar"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="TabBar" component={TabBar} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
