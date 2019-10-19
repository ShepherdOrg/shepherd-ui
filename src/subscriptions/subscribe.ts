import { useState, useEffect } from 'react'
import apiClient from '../apiClient'
import {
  QueryOptions,
  SubscriptionOptions,
  ApolloQueryResult,
} from 'apollo-client'
interface SubscriptionProps<TQueryResult = any, TSubscriptionResult = any> {
  query: QueryOptions
  subscription: SubscriptionOptions
  onSubscriptionMsg(
    previous: TQueryResult,
    next: TSubscriptionResult
  ): TQueryResult
}

interface Loading {
  loading: true
}

interface Success<T> {
  loading: false
  data: T
}

interface Failure {
  loading: false
  error: Error
}

export type UseSubscriptionResult<T> = Loading | Failure | Success<T>

export const useSubscription = function<
  TQueryResult = any,
  TSubscriptionResult = any
>({
  query,
  subscription,
  onSubscriptionMsg,
}: SubscriptionProps<TQueryResult, TSubscriptionResult>) {
  const [value, setValue] = useState<UseSubscriptionResult<TQueryResult>>({
    loading: true,
  })

  useEffect(() => {
    let isSubscribed = true
    apiClient()
      .query<TQueryResult>(query)
      .then(x => {
        if (!isSubscribed) return
        if (x.errors) {
          setValue({ loading: false, error: new Error('' + x.errors) })
        }
        setValue({ data: (x.data as unknown) as TQueryResult, loading: false })
      })

    const gqlSubscription = apiClient()
      .subscribe<ApolloQueryResult<TSubscriptionResult>>(subscription)
      .subscribe({
        next(next) {
          setValue(value => {
            if (value.loading) return value
            if ('error' in value) return value
            return { ...value, data: onSubscriptionMsg(value.data, next.data) }
          })
        },
      })

    return () => {
      isSubscribed = false
      gqlSubscription.unsubscribe()
    }
  }, [query, subscription])

  return value
}
