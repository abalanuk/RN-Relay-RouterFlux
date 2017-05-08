import Relay from 'react-relay'

class RootRoute extends Relay.Route {
  static queries = {
    user: () => Relay.QL`
      query { 
        viewer(key: $userID)
      }
    `
  }
  static paramDefinitions = {
    userID: {required: true}
  }
  static routeName = 'RootRoute'
}

export default RootRoute