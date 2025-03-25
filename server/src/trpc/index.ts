import { initTRPC } from '@trpc/server';
import { z } from 'zod';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;


export const trpcRouter = router({
  hello: publicProcedure
  .input(
    z.object({
      name: z.string(),
  }),
  )
  .query((opts) => {
    const name = opts.input.name;

    return {
      greeting: `Hello ${name}`,
    };
  }),
  helloMutation: publicProcedure
  .input(
    z.object({
      name: z.string(),
    }),
  )
  .mutation((opts) => {
    const name = opts.input.name;

    return {
      greeting: `Hello mut ${name}`,
    };
  }),
});