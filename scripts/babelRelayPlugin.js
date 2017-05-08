//let schema = require('../data/schema.json')
//module.exports = getbabelRelayPlugin(schema.data)

const getBabelRelayPlugin = require('babel-relay-plugin')
const introspectionQuery = require('graphql/utilities').introspectionQuery
const request = require('sync-request')

const url = 'http://localhost:3000/graphql'

const response = request('POST', url, {
  json: {
    query: introspectionQuery
  }
})
const schema = JSON.parse(response.body.toString('utf-8'))
//console.log(schema)

module.exports = { plugins: [getBabelRelayPlugin(schema.data, { abortOnError: true })] }