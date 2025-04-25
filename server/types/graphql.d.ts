declare type QueryArgs =
  import('../../types/graphql/fetchers/QueryFetcher').QueryArgs
declare type MutationArgs =
  import('../../types/graphql/fetchers/MutationFetcher').MutationArgs
declare type SubscriptionArgs =
  import('../../types/graphql/fetchers/MutationFetcher').MutationArgs
declare type ModelType<T> = import('graphql-ts-client-api').ModelType<T>

declare type gqlType<T> = ModelType<T>

declare type Writable<T> = { -readonly [P in keyof T]: T[P] }
declare type DeepWriteable<T> = {
  -readonly [P in keyof T]: DeepWriteable<T[P]>
}

declare type gqlArgs<
  T extends keyof QueryArgs | keyof MutationArgs | keyof SubscriptionArgs,
> = T extends keyof QueryArgs
  ? QueryArgs[T]
  : T extends keyof MutationArgs
    ? MutationArgs[T]
    : T extends keyof SubscriptionArgs
      ? SubscriptionArgs[T]
      : never

declare type gqlResolver<
  TSource = Record<string, unknown> | undefined,
  TArgs = Record<string, unknown>,
  TReturn = string,
> = import('@graphql-tools/utils').IResolvers<
  TSource,
  HonoContext,
  TArgs,
  TReturn
>
