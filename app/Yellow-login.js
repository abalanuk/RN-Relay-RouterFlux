import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Actions } from 'react-native-router-flux'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text 
        style={styles.login}
        onPress={() => Actions.welcome({username: 'Andrew'})}
      >
        Please enter your credentials
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default LoginScreen