const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type User {
    id: ID!
    email: String!
    name: String
    avatarUrl: String
  }

  type rootQuery {
    users: [User!]!
  }

  type rootMutation {
    createUser(email:String!,name:String!):User
  }

  schema {
    query: rootQuery
    mutation: rootMutation
  }
`);
