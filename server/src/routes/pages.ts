import { Hono } from 'hono'

export const Pages = (r: Hono<HonoVariables>) => {
  r.get('*', (ctx) => {
    return ctx.env.ASSETS.fetch(ctx.req.raw)
  })
}
