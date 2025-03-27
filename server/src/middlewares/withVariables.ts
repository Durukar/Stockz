import { Next } from 'hono/types'

import { Drizzle } from '../repo/drizzle'

// import { DrizzleD1 } from '../repo/drizzleD1'

export const withVariables = async (c: HonoContext, next: Next) => {
  
  c.set('db', Drizzle(c.env))
  
  return next()
}
