import { useMemo, useState } from 'react'

export function useRequest(api: Function, params?: unknown) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const fetchResource = () => {
    setLoading(true)

    return api(params)
      .then((data: Extract<unknown, null>) => setResult(data))
      .catch((e: Extract<Error, null>) => setError(e))
      .finally(() => setLoading(false))
  }

  useMemo(() => fetchResource(), [])

  return {
    loading,
    result,
    error,
  }
}
