const getKey = (prefix: string, ...ids: string[]) =>
  `${prefix}::${ids.join('::')}`

export const KV = (env: CloudflareBindings) => ({
  exampleKV: {
    get: () => {
      const key = getKey('example', 'id')
      return env.KV.get<{ data: string }>(key, 'json')
    },
    delete: () => {
      const key = getKey('example', 'id')
      return env.KV.delete(key)
    },
    put: (data: { data: string }) => {
      const key = getKey('example', 'id')
      return env.KV.put(key, JSON.stringify(data))
    },
  },
})
