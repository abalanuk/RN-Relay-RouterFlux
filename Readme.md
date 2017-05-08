- index.ios.js contains main component wrapped by Router v.4 with 2 tabs
and one modal scene
- Welcome screen wrapped into Relay.RootContainer and passed as RootComponent
into one of the Router scene
- RootRoute contains the main data route or entry point into data tree of
GraphQL
- .babelrc has inside preset which is the babel relay plugin for transformatin
queries/fragments inside components into appropriate format for requesting
data from GraphQL
- babelRelayPlugin gets schema by request to graphql endpoint(where GraphQL server is running)
Note: we can get it from correct schema.json file by updateSchema script
and pass result into getBabelRelayPlugin function
- Welcome screen gets data from graphQL via fragment and was wrapped by
Relay.createContainer call


To check:
- If we can make RootContainer with another component(which not request
any data from graphQL) and wrap another one by Relay.createContainer with
data fragment inside?
