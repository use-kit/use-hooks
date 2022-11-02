import { onMounted, ref } from 'vue'

export const useRequest = (api: Function, params?: unknown) => {
  const loading = ref(false)
  const result = ref(null)
  const error = ref(null)

  const fetchResource = () => {
    loading.value = true

    return api(params)
      .then((data: Extract<unknown, null>) => result.value = data)
      .catch((e: Extract<Error, null>) => error.value = e)
      .finally(() => loading.value = false)
  }

  onMounted(() => fetchResource())

  return {
    loading,
    result,
    error,
  }
}
