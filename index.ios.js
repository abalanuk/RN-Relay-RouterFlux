import React, { Component } from 'react'
import Relay from 'react-relay'
import { AppRegistry, StyleSheet, Text} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import WelcomeScreen from './app/Green-welcome'
import LoginScreen from './app/Yellow-login'
import BlueScreen from './app/BlueScreen'
import GoldScreen from './app/GoldScreen'
import ModalScreen from './app/ModalScreen'
import RootRoute from './app/routes/RootRoute'


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql'))

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'white':'black', fontWeight: 'bold'}}>{title}</Text>
  )
}
const RootComponent = () => {
  return (
    <Relay.RootContainer
      styles={styles.instructions}
      Component={WelcomeScreen}
      route={new RootRoute({userID: "1111"})}
      renderFetched={(data) => <WelcomeScreen {...this.props} {...data} />}
    />
  )
}

class Barista extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene key="tabBar" tabs tabBarStyle = {{backgroundColor: 'orange'}}>
            {/* Tab and it's scenes */}
            <Scene key="entry" title="EP" icon={TabIcon}>
              <Scene key="login" component={LoginScreen} title="Login" />
              <Scene key="welcome" component={RootComponent} title="Welcome Screen" initial/>
            </Scene>

            <Scene key="content" title="CT" icon={TabIcon}>
              <Scene key="blue" component={BlueScreen} title="Blue Screen"/>
              <Scene key="gold" component={GoldScreen} title="Gold Screen" initial/>
            </Scene>
          </Scene>
          <Scene
            key="modal"
            component={ModalScreen}
            title="Modal Screen"
            direction="vertical"
            hideNavBar
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    padding: 10,
    textAlign: 'center',
    color: '#333333',
  },
})

AppRegistry.registerComponent('Barista', () => Barista)