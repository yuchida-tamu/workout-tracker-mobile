import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { HelloWorld } from './src/helloworld';
import { UserScreen } from './src/screens/UserScreen';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <UserScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
