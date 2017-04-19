import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import WelcomeScreen from './app/Green-welcome'
import LoginScreen from './app/Yellow-login'
import BlueScreen from './app/BlueScreen'
import GoldScreen from './app/GoldScreen'


class Barista extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene 
            key="login"
            component={LoginScreen}
            title="Login Screen"
            initial
          />
          <Scene 
            key="welcome"
            component={WelcomeScreen}
            title="Welcome Screen"
          />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('Barista', () => Barista)