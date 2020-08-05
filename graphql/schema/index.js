const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type User {
    id: ID!
    email: String!
    name: String
    avatarUrl: String
    messages:[Message!]!
  }

  type Message {
    id: ID!
    body: String!
    createdAt: String!
    user: User!
  }

  input MessageInput {
    body: String!
    userId: ID!
  }

  type rootQuery {
    users: [User!]!
    user(id:ID!):User
    messages: [Message!]!
  }

  type rootMutation {
    createUser(email:String!,name:String!):User
    createMessage(messageInput:MessageInput):Message
  }

  schema {
    query: rootQuery
    mutation: rootMutation
  }
`);
