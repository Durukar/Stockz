import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { GraphQLScalarType, Kind, ValueNode } from 'graphql'
import { gql } from 'graphql-tag'

import product from './product'
import user from './user'

const baseTypeDefs = gql`
  scalar Object
  scalar Time
  scalar Date

  "An object with a Globally Unique ID"
  interface Node {
    "The ID of the object."
    id: ID!
  }

  type PageInfo {
    startCursor: String
    endCursor: String
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }
`

const ObjectScalarType = new GraphQLScalarType({
  description: 'Arbitrary object',
  name: 'Object',
  parseLiteral: (ast) => {
    const parseObj = (
      node: ValueNode,
    ):
      | Record<string, unknown>
      | string
      | boolean
      | number
      | null
      | (Record<string, unknown> | string | boolean | number | null)[] => {
      switch (node.kind) {
        case Kind.STRING:
        case Kind.BOOLEAN:
        case Kind.INT:
        case Kind.FLOAT:
          return node.value
        case Kind.LIST:
          return node.values.map(parseObj) as (
            | Record<string, unknown>
            | string
            | boolean
            | number
            | null
          )[]

        case Kind.OBJECT:
          return node.fields.reduce(
            (acc, field) => ({
              ...acc,
              [field.name.value]: parseObj(field.value),
            }),
            {} as Record<string, unknown>,
          )
        case Kind.NULL:
          return null
        default:
          console.error(
            `Not sure what to do with ${node.kind} for ObjectScalarType`,
          )
          return null
      }
    }

    return parseObj(ast)
  },
  parseValue: (value) =>
    typeof value === 'object'
      ? value
      : typeof value === 'string'
        ? JSON.parse(value)
        : value,
  serialize: (value) =>
    typeof value === 'object'
      ? value
      : typeof value === 'string'
        ? value
        : JSON.stringify(value),
})

const DateScalarType = new GraphQLScalarType<string | null, string>({
  description: 'Date field',
  name: 'Date',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)).toISOString() // Convert hard-coded AST string to integer and then to Date
    } else if (ast.kind === Kind.STRING) {
      return new Date(ast.value).toISOString()
    }
    return null // Invalid hard-coded value (not an integer)
  },
  parseValue(value) {
    const date = value as Date | string
    return new Date(date).toISOString() // Convert incoming string to Date
  },
  serialize(value) {
    const date = value as Date | string
    if (typeof date === 'string' || typeof date === 'number') {
      return new Date(date).toISOString()
    }

    return date.toISOString()
  },
})

const TimeScalartType = new GraphQLScalarType<string | null, string>({
  description: 'Time field with date removed',
  name: 'Time',
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value) // Convert incoming Time string to Date
      const time = date.toISOString().split('T')[1]?.split('.')[0] || ''
      return time
    }
    return null // Invalid hard-coded value (not an integer)
  },
  parseValue(value) {
    const date = new Date(value as Date | string) // Convert incoming string to Time
    const time = date.toISOString().split('T')[1]?.split('.')[0] || ''
    return time
  },
  serialize(value) {
    const date = new Date(value as Date | string) // Convert outgoing string to Time string
    const time = date.toISOString().split('T')[1]?.split('.')[0] || ''
    return time
  },
})

const base = {
  typeDefs: baseTypeDefs,
  resolvers: {
    Object: ObjectScalarType,
    Date: DateScalarType,
    Time: TimeScalartType,
  },
}

const schema = [base, user, product]

export const typeDefs = mergeTypeDefs(schema.map((s) => s.typeDefs))
export const resolvers = mergeResolvers(schema.map((s) => s.resolvers))
