import { RoutesHandler } from './routes'

export default {
  fetch: (req, env, ctx) => {
    return RoutesHandler(req, env, ctx)
  },
} satisfies ExportedHandler<CloudflareBindings>
