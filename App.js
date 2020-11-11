/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar,View} from 'react-native';
import ImageList from './src/Screens/ImageList';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import combineReducer from './src/Redux';

let store = createStore(combineReducer, applyMiddleware(promise, logger));

export default class App extends React.Component {
  render() {
    return (
     
      <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
        />
        <ImageList /> 
      </View>
    </Provider>
    );
  }
}
