import React, { Component } from 'react'
import Relay, {
  DefaultNetworkLayer,
} from 'react-relay'

import WelcomeScreen from './Green-welcome'
import RootRoute from './routes/RootRoute'

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://localhost:3000/graphql')
)

export default class Barista extends Component {
  render() {
    return (
      <RootContainer
        Component={WelcomeScreen}
        route={new RootRoute({key: '1111'})}
      />
    )
  }
}