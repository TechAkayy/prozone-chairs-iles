export const useOpeningHours = () => {
  const weekDays = [
    'Sunday 9 am–10 pm',
    'Monday Closed',
    'Tuesday 12–10 pm',
    'Wednesday 12–10 pm',
    'Thursday 12–10 pm',
    'Friday 12–10 pm',
    'Saturday 9 am–10 pm',
  ]

  const todaysOpeningHours = computed(() => {
    return weekDays[new Date().getDay()]
  })

  return {
    weekDays,
    todaysOpeningHours,
  }
}
