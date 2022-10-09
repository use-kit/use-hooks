import { useState, useMemo } from 'react';

export function useRequest(api: any, params?: any) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const fetchResource = () => {
    setLoading(true)

    return api(params)
      .then((data: any) => setResult(data))
      .catch((e: any) => setError(e))
      .finally(() => setLoading(false))
  }

  useMemo(() => fetchResource(), [])

  return {
    loading,
    result,
    error,
  }
}
