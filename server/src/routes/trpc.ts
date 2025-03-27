import { trpcRouter } from '@server/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { Hono } from 'hono'

export const Trpc = (r: Hono<HonoVariables>) => {
  r.all('/api/trpc/*', (ctx) => {
    return fetchRequestHandler({
      endpoint: '/api/trpc',
      req: ctx.req.raw,
      router: trpcRouter,
      createContext: () => ctx,
    })
  })
}
