import { gql } from 'graphql-tag'

export default {
  typeDefs: gql`
    type User implements Node {
      id: ID!

      name: String
      lastName: String
      fullName: String

      email: String
    }

    type Query {
      userMe: User
      user: User
      users: [User!]!
    }

    type Mutation {
      userMeUpdate: User
    }
  `,
  resolvers: {
    Query: {
      //
    },
  } satisfies gqlResolver,
}
