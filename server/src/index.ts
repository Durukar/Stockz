import { Hono } from "hono";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Context } from "hono/jsx";
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

type Vars = { Bindings: CloudflareBindings }
const app = new Hono<Vars>();

export const appRouter = t.router({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query((opts) => {
      const name = opts.input.name;

      return {
        greeting: `Hello ${opts.input.name}`,
      };
    }),
});

app.all("/trpc", (c) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: c.req.raw,
    router: appRouter,
    createContext: () => {
      return c
    },
  });
});

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});


app.get("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;


export const AppRouter = typeof appRouter