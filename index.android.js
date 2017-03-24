/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SettingsView from 'SettingsView';

export default class SettingsModule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Settings Module Demo!
        </Text>
        <Text style={styles.instructions}>This demo shows:</Text>
        <Text style={styles.bullet}>• three stored keys of various types.</Text>
        <Text style={styles.bullet}>• One editable pref value stored as a string.</Text>
        <Text style={styles.bullet}>• A monitoried pref value that is updated every three seconds
               by the main activity.
        </Text>
        <SettingsView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  //  alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginLeft: 15,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  bullet: {
    textAlign: 'left',

    marginLeft: 50,
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SettingsModule', () => SettingsModule);
