import { ProductService } from '@server/services/product'
import { gql } from 'graphql-tag'

export default {
  typeDefs: gql`
    input ProductCreateContent {
      title: String!
    }

    input ProductUpdateContent {
      title: String
    }

    type Product implements Node {
      id: ID!

      title: String!
      url: String
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
      productUpdate(content: ProductUpdateContent!): Product
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
      productUpdate: async (p, a: gqlArgs<'productUpdate'>, ctx) =>
        new ProductService(ctx).update(a.content),
    },
  } satisfies gqlResolver,
}
