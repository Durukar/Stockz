import { Hono } from "hono";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { trpcRouter } from "../trpc";


export const Trpc = (r: Hono<HonoVariables>) => {
    
    r.all("/api/trpc/*", (ctx) => {
        return fetchRequestHandler({
            endpoint: '/api/trpc',
            req: ctx.req.raw,
            router: trpcRouter,
            createContext: (_trpcCtx) => ctx,
        });
    });
}
