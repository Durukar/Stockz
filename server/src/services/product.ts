import { productsTable } from '@server/repo/tables/products'
import { eq } from 'drizzle-orm'

import {
  ProductCreateContent,
  ProductUpdateContent,
} from '../../../types/graphql/inputs'
import { Service } from '.'

export class ProductService extends Service {
  async get(id: string) {
    const product = await this.db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id))
      .get()
    return product
  }

  async create(content: ProductCreateContent) {
    const product = await this.db
      .insert(productsTable)
      .values({ id: this.newID(), title: content?.title })
      .returning()
      .get()

    return product
  }

  async update(content: ProductUpdateContent) {
    const product = await this.db
      .update(productsTable)
      .set({ title: content?.title })
      .returning()
      .get()

    return product
  }
}
