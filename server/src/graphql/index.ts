import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'

import { graphqlMocks } from './mocks'
import { resolvers, typeDefs } from './schema'

// Create the base executable schema
let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Create a new schema with mocks
schema = addMocksToSchema({
  mocks: graphqlMocks,
  preserveResolvers: true,
  schema,
})

// Create a Yoga instance with a GraphQL schema.
export const gqlYoga = createYoga({ schema })
