import { Hono } from 'hono'

import { withHeaders } from '../middlewares/withHeaders'
import { withVariables } from '../middlewares/withVariables'
import { Pages } from './pages'
import { Trpc } from './trpc'

export const RoutesHandler = (
  req: Request,
  env: CloudflareBindings,
  ctx: ExecutionContext,
) => {
  const r = new Hono<HonoVariables>()

  //
  // Middlewares

  r.use(withVariables, withHeaders)

  //
  //

  //
  // API

  Trpc(r)

  r.all('/api/*', (ctx) => {
    return ctx.notFound()
  })
  //
  //

  Pages(r)

  return r.fetch(req, env, ctx)
}
