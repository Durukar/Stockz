import { productsTable } from '@server/repo/schema/products'
import { z } from 'zod'

import { publicProcedure, router } from '.'

export const productProcedures = router({
  // Products list
  products: publicProcedure.query(async ({ ctx }) => {
    const products = ctx.var.db.select().from(productsTable)
    return products
  }),
  //

  // Product get
  product: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx }) => {
      const users = ctx.var.db.select().from(productsTable)
      return users
    }),
  //

  // Product create
  productCreate: publicProcedure
    .input(
      z.object({
        title: z.string().min(3).max(255),
      }),
    )
    .query(async ({ ctx, input }) => {
      const users = ctx.var.db.insert(productsTable).values({
        title: input.title,
      })
      return users
    }),
  //
})
