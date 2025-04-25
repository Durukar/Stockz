import { ProductService } from '@server/services/product'
import { gql } from 'graphql-tag'

export default {
  typeDefs: gql`
    input ProductCreateContent {
      name: String!
    }

    input ProductUpdateContent {
      name: String

      quantity: Int

      price: Float

      type: String
    }

    type Product implements Node {
      id: ID!

      url: String

      name: String!

      quantity: Int!

      price: Float!

      type: String!

      status: String!
    }

    type ProductEdge {
      cursor: String!
      node: Product!
    }

    type ProductConnection {
      edges: [ProductEdge!]!
      pageInfo: PageInfo!
    }

    type Query {
      product(id: ID!): Product
      products: ProductConnection
    }

    type Mutation {
      productCreate(content: ProductCreateContent!): Product
      productUpdate(id: ID!, content: ProductUpdateContent!): Product
      productDelete(id: ID!): Product
    }
  `,
  resolvers: {
    Query: {
      product: async (p, a: gqlArgs<'product'>, ctx) =>
        new ProductService(ctx).get(a.id),
    },
    Mutation: {
      productCreate: async (p, a: gqlArgs<'productCreate'>, ctx) =>
        new ProductService(ctx).create(a.content),
      productUpdate: async (p, a: gqlArgs<'productUpdate'>) => {
        return {
          id: 'prod-001',
          name: a.content.name,
          quantity: a.content.quantity,
          price: a.content.price,
          type: a.content.type,
        }
        // new ProductService(ctx).update(a.content)
      },
    },
  } satisfies gqlResolver,
}
