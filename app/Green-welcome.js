import React from 'react'
import Relay from 'react-relay'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Actions } from 'react-native-router-flux'

// {
//   "data": {
//     "me": {
//       "firstName": "Samer",
//       "lastName": "Buna",
//       "email": "samer@agilelabs.com"
//     }
//   }
class WelcomeScreen extends React.PureComponent {
  render() {
    const user = this.props.user
    return (
      <View style={styles.container}>
        <Text onPress={Actions.login} style={styles.welcome}>
          {user.fullName}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default Relay.createContainer(WelcomeScreen, {
  // Specify the initial value of the `$key` variable.
  initialVariables: {
    value: "4242"
  },
  // For each of the props that depend on server data, we define a corresponding
  // key in `fragments`. Here, the component expects server data to populate the
  // `user` prop, so we'll specify the fragment from above as `fragments.user`.
  fragments: {
    user: () => Relay.QL`
      fragment on viewerNode {
         fullName
      }
    `
  }
})
