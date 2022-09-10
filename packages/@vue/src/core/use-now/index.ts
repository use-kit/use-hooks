import { ref } from 'vue'

export const useNow = () => {
  const now = ref(new Date())
  setInterval(() => now.value = new Date(), 1000)

  return now
}
