import { ref, onMounted } from 'vue'

export const useRequest = (api: any, params?: any) => {
  const loading = ref(false)
  const result = ref(null)
  const error = ref(null)

  const fetchResource = () => {
    loading.value = true

    return api(params)
      .then((data: any) => result.value = data)
      .catch((e: any) => error.value = e)
      .finally(() => loading.value = false)
  }

  onMounted(() => fetchResource())

  return {
    loading,
    result,
    error,
  }
}
