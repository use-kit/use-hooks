import { useRequest } from '@use-kit/react-hooks'

function fetchList(callback: Function) {
  return new Promise(resolve => setTimeout(() => {
    // const ret = [1, 2, 3].filter(callback())
    resolve([1, 2, 3])
  }, 1000))
}

export function useFetchList(params: any) {
  const { loading, result, error } = useRequest(fetchList, params)

  return {
    loading,
    list: result,
  }
}
