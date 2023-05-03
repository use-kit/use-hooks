import { onMounted, onUnmounted, ref } from 'vue'

export const useWindowClientRect = () => {
  const rect = ref<DOMRect | undefined>(
    document.firstElementChild?.getBoundingClientRect(),
  )

  const fn = () => {
    rect.value = document.firstElementChild?.getBoundingClientRect()
  }

  onMounted(() => window.addEventListener('resize', fn))

  onUnmounted(() => window.removeEventListener('resize', fn))

  return rect as unknown as DOMRect
}
