import { QueryClient } from '@tanstack/react-query'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { createTRPCContext } from '@trpc/tanstack-react-query'

import type { TrpcRouter } from '../../../server/src'

export { QueryClientProvider } from '@tanstack/react-query'

export const { TRPCProvider, useTRPC } = createTRPCContext<TrpcRouter>()

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
    },
  },
})

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpcClient = createTRPCClient<TrpcRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8787/api/trpc',
    }),
  ],
})
