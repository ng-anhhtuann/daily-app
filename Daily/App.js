import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet} from 'react-native';

import Start from './src/frames/Start';
const Stack = createNativeStackNavigator();
class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: undefined,
              headerTitle: null,
              headerShown: false,
            }}>
            <Stack.Screen name="Start" component={Start} />
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
