import { RoutesHandler } from './routes'
import { trpcRouter } from './trpc'

export default {
  fetch: (req, env, ctx) => {
    return RoutesHandler(req, env, ctx)
  },
} satisfies ExportedHandler<CloudflareBindings>

export type TrpcRouter = typeof trpcRouter
