const {gql} = require('apollo-server')
const typeDefs = gql`

  type Message {
    id: ID!
    text: String
  }
  type Query {
    messages: [Message!]!
    getMessage(id: ID!): Message!
  }
  type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Message
  }
`
module.exports = {
  typeDefs
}

