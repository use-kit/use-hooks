import { onMounted, onUnmounted, ref } from 'vue'

export const useTime = () => {
  const now = ref(new Date())
  const intervalId = ref()

  onMounted(() => {
    intervalId.value = setInterval(() => now.value = new Date(), 1000)
  })

  onUnmounted(() => {
    clearInterval(intervalId.value)
  })

  // setInterval(() => now.value = new Date(), 1000)

  return now
}
