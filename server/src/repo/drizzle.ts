import { drizzle } from 'drizzle-orm/d1'

export const Drizzle = (env: CloudflareBindings) => {
  const db = drizzle(env.D1)
  return db
}
