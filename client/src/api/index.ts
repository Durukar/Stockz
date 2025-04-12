import { cacheExchange, Client, fetchExchange } from 'urql'

export const urqlClient = new Client({
  url: 'http://localhost:8787/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
  // fetchOptions: () => {
  // const token = getToken();
  // return {
  //   headers: { authorization: token ? `Bearer ${token}` : '' },
  // };
  // },
})
