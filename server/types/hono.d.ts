declare type DrizzleD1Database<T = Record<string, never>> =
  import('drizzle-orm/d1').DrizzleD1Database<T>
declare type table = import('@server/repo/tables/products').productsTable

type HonoVariables = {
  Bindings: CloudflareBindings
  Variables: {
    db: DrizzleD1Database<table>
  }
}

type HonoContext = import('hono').Context<HonoVariables>
