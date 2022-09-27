import { ref } from 'vue'

export const useApi = (api: any) => {
  const loading = ref(false)
  const result = ref(null)
  const error = ref(null)

  const fetchResource = (params: Promise<any>) => {
    loading.value = true

    return api(params)
      .then((data: any) => result.value = data)
      .catch((e: any) => error.value = e)
      .finally(() => loading.value = false)
  }

  return {
    loading,
    result,
    error,
    fetchResource,
  }
}
