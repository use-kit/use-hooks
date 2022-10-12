import { onMounted, ref } from 'vue'

export const useWindowClientRect = () => {
  const rect = ref<DOMRect | undefined>(document.firstElementChild?.getBoundingClientRect())

  onMounted(() => {
    window.addEventListener('resize', () => {
      rect.value = document.firstElementChild?.getBoundingClientRect()
    })
  })

  return rect
}
