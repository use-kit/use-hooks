import { ref } from 'vue'

export const useRerender = () => {
  const renderKey = ref<number | string>(0)

  const rerender = () => {
    (renderKey.value as number) += 1
  }

  return {
    renderKey,
    rerender,
  }
}
