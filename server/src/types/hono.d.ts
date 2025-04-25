declare type Env = import('hono').Env
type Bindings = {
  __STATIC_CONTENT: KVNamespace<string> | undefined
  DB: D1Database
  R2: R2Bucket
}

declare interface HonoContext extends Env {
  Bindings: Bindings
  Variables: { auth: string }
}
