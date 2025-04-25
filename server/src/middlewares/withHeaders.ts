import { Next } from 'hono/types'

export const withHeaders = async (_c: HonoContext, next: Next) => {
  await next()

  // Setup response headers

  //
}
