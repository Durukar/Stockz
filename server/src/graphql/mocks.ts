const url = 'https://picsum.photos/800'

export const graphqlMocks = {
  Query: {
    products: () => Array.from({ length: 40 }),
  },
  Product: {
    url: () => url,
  },
}
