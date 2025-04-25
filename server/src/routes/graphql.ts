import { gqlYoga } from '@server/graphql'
import { Hono } from 'hono'

export const Graphql = (r: Hono<HonoVariables>) => {
  r.all('/api/graphql', (ctx) => {
    return gqlYoga.fetch(ctx.req.raw, ctx)
  })
}
