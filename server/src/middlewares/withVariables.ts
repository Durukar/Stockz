import { Next } from 'hono/types'

import { Drizzle } from '../repo/drizzle'

export const withVariables = async (c: HonoContext, next: Next) => {
  const drizzle = Drizzle(c.env)
  c.set('db', drizzle)

  return next()
}
