import day from 'dayjs'
import { computed, ref, unref } from 'vue'
import { useTime } from '../'

export const useFormatDate = (format = 'YYYY-MM-DD hh:mm:ss') => {
  // const date = ref(new Date())
  const date = useTime()
  return computed(() => day(unref(date)).format(format))
}
