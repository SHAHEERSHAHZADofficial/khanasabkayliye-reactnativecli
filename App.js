/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import 'react-native-gesture-handler';
// import GestureHandlerRootView from 'react-native-gesture-handler';
import { Routing }from "./src/config/Route"


function App() {
  return ( 
      <Routing/>

    );
}

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },

});

