import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Start from './src/frames/Start';
import TabBar from './src/frames/homes/TabBar';
import {WHITE} from './src/utils/colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/config/stores';

const Stack = createNativeStackNavigator();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});
export default App;
