import { monotonicFactory } from 'ulid'

const ulid = monotonicFactory()

export class Service {
  protected ctx: HonoContext
  protected db: DrizzleD1Database

  constructor(ctx: HonoContext) {
    this.ctx = ctx
    this.db = ctx.get('db')
  }

  protected newID() {
    return ulid()
  }
}
