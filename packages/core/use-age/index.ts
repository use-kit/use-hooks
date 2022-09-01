import dayjs from 'dayjs'

export const useAge = (str: string) => {
  return dayjs().diff(str, 'year')
}
