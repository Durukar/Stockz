declare type DrizzleD1Database = import('drizzle-orm/d1').DrizzleD1Database

type HonoVariables = {
  Bindings: CloudflareBindings
  Variables: {
    db: DrizzleD1Database
  }
}

type HonoContext = import('hono').Context<HonoVariables>
