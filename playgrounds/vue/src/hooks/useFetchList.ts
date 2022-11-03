import { useRequest } from '@use-kit/vue-hooks'

function fetchList(callback?: Function) {
  return new Promise(resolve => setTimeout(() => {
    const ret = [1, 2, 3].filter((x: number) => callback ? callback(x) : x)
    resolve(ret)
  }, 1000))
}

export function useFetchList(params?: Function) {
  const { loading, result, error } = useRequest(fetchList, params)

  return {
    loading,
    error,
    list: result,
  }
}
