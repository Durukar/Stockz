import { ObjectFetcher } from 'graphql-ts-client-api'
import { useCallback, useRef } from 'react'
import { CombinedError, useMutation as useMT } from 'urql'

import { fetcherToString } from '@/helpers/graphql'

import { urqlClient } from '.'

export const useMutation = <T extends object, TVariables extends object>(
  fetcher: ObjectFetcher<'Mutation', T, TVariables>,
  options?: {
    hideToast?: boolean
    readonly onSuccess?: (data: gqlType<typeof fetcher>) => void
    readonly onError?: (error: CombinedError) => void
  },
) => {
  const opts = useRef(options)
  const [result, _mutate] = useMT<gqlType<typeof fetcher>, TVariables>(
    fetcherToString(fetcher),
  )

  const mutate = useCallback(
    async (variables?: TVariables) => {
      const res = await _mutate((variables || {}) as TVariables)
      if (res.error) {
        opts?.current?.onError?.(res.error)
      } else if (res.data) {
        opts?.current?.onSuccess?.(res.data)
      }

      return res.data
    },
    [_mutate],
  )

  return {
    data: result.data,
    error: result.error,
    loading: result.fetching,
    mutate,
    stale: result.stale,
  }
}

export const runMutation = async <T extends object, TVariables extends object>(
  fetcher: ObjectFetcher<'Mutation', T, TVariables>,
  variables?: TVariables,
) => {
  const res = await urqlClient.mutation<gqlType<typeof fetcher>>(
    fetcherToString(fetcher),
    variables,
  )

  return res
}
