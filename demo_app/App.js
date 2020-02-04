import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import { createStore, combineReducers } from 'redux';

import userReducer from './store/reducers/user';
import { Provider } from 'react-redux';

// Sets up reducer
const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.navigatorContainer}>
          <AppNavigator />
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    flex: 1,
  }
});
