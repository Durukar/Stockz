import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const productsTable = sqliteTable('products', {
  id: text().primaryKey(),
  title: text().notNull(),
})
