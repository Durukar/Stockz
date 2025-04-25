import { ObjectFetcher } from 'graphql-ts-client-api'
import { type RequestPolicy, useQuery as useQry } from 'urql'

import { fetcherToString } from '@/helpers/graphql'

import { urqlClient } from '.'

// export type { RequestPolicy }

export const useQuery = <T extends object, TVariables extends object>(
  fetcher: ObjectFetcher<'Query', T, TVariables>,
  params: {
    pause?: boolean
    requestPolicy?: RequestPolicy
    debounce?: number
    variables?: TVariables
  } = {},
) => {
  const [result, refetch] = useQry<gqlType<typeof fetcher>>({
    pause: params.pause,
    query: fetcherToString(fetcher),
    requestPolicy: params.requestPolicy,
    variables: params.variables,
  })

  return {
    data: result.data,
    error: result.error,
    loading: result.fetching,
    refetch,
    stale: result.stale,
  }
}

export const runQuery = async <T extends object, TVariables extends object>(
  fetcher: ObjectFetcher<'Query', T, TVariables>,
  variables?: TVariables,
  opt?: { requestPolicy?: RequestPolicy },
) => {
  const res = await urqlClient.query<gqlType<typeof fetcher>>(
    fetcherToString(fetcher),
    variables,
    {
      requestPolicy: opt?.requestPolicy,
    },
  )

  return res
}
