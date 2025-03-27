import { productProcedures } from '@server/trpc/product'
import { userProcedures } from '@server/trpc/user'
import { initTRPC, TRPCBuilder } from '@trpc/server'

const t = (initTRPC as TRPCBuilder<HonoContext, object>).create()

export const router = t.router

export const publicProcedure = t.procedure
// TODO
export const privateProcedure = publicProcedure

export const trpcRouter = router({
  userProcedures,
  productProcedures,
})
