import { usersTable } from '@server/repo/schema/users'
import { z } from 'zod'

import { publicProcedure, router } from '.'

export const userProcedures = router({
  users: publicProcedure.query(async ({ ctx }) => {
    const users = ctx.var.db.select().from(usersTable)
    return users
  }),
  user: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx }) => {
      const users = ctx.var.db.select().from(usersTable)
      return users
    }),
})
