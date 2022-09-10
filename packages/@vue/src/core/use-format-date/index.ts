import day from 'dayjs'
import { computed, unref, ref, Ref } from 'vue'

// type dateProps = string | number | Date | Ref<Date>

export const useFormatDate = (format: string = 'YYYY-MM-DD hh:mm:ss') => {
  const date = ref(new Date())
  return computed(() => day(unref(date)).format(format))
}
