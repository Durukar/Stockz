import { Hono } from "hono";

import { Trpc } from "./trpc";
import { Pages } from "./pages";


export const RoutesHandler = (req: Request, env: CloudflareBindings, ctx: ExecutionContext)=>{
  const r = new Hono<HonoVariables>();

  //
  // Middlewares

  r.use((_ctx, next) => {
    //
    return next()
  })

  //
  //

  //
  // API
  
  Trpc(r)
  
  r.all('/api/*', ctx=>{
    return ctx.notFound()
  })
  //
  //

  Pages(r)

  

  return r.fetch(req, env, ctx)
} 