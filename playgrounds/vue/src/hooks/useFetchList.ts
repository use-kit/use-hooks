import { useRequest } from '@use-kit/vue-hooks'

function fetchList(callback: Function) {
  return new Promise(resolve => setTimeout(() => {
    const ret = [1, 2, 3].filter(callback())
    resolve(ret)
  }, 1000))
}

export function useFetchList(params: any) {
  const { loading, result, error } = useRequest(fetchList, params)

  return {
    loading,
    list: result,
  }
}
