import type { ObjectFetcher } from 'graphql-ts-client-api'

export const fetcherToString = <
  T extends 'Query' | 'Mutation' | 'Subscription',
>(
  fetcher: ObjectFetcher<T, object, object>,
) => {
  const varArr: string[] = []
  for (const [name, type] of fetcher.variableTypeMap) {
    varArr.push(`$${name}: ${type}`)
  }

  const map = fetcher?.fieldMap?.keys() || new Map<string, string>().keys()
  const keys: string[] = []
  for (const key of map) {
    keys.push(key)
  }

  const queryName = keys.join('_')

  const query = `${fetcher.fetchableType?.name?.toLowerCase()} ${queryName}${
    varArr.length > 0 ? `(${varArr.join(', ')})` : ''
  }${fetcher.toString()}`

  return query
}
