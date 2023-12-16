interface FormattedTime {
  total: {
    seconds: number
    minutes: number
    hours: number
    days: number
  }
  remaining: {
    seconds: number
    minutes: number
    hours: number
  }
}

export const formatTime = (seconds: number): FormattedTime => {
  const remainingSeconds: number = seconds % 60
  const totalMinutes = Math.floor(seconds / 60)
  const remainingMinutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const remainingHours = totalHours % 24
  const totalDays = Math.floor(totalHours / 24)

  return {
    total: {
      seconds,
      minutes: totalMinutes,
      hours: totalHours,
      days: totalDays
    },
    remaining: {
      seconds: remainingSeconds,
      minutes: remainingMinutes,
      hours: remainingHours
    }
  }
}

export const stringifyTime = (seconds: number): string => {
  const time = formatTime(seconds)
  const hours = time.remaining.hours > 0 ? `${time.remaining.hours}h ` : ''
  const minutes = time.remaining.minutes > 0 ? `${time.remaining.minutes}m ` : ''
  const secondsString = time.remaining.seconds > 0 ? `${time.remaining.seconds}s` : ''
  return `${hours}${minutes}${secondsString}`
}

export const parseTimeFromString = (timeString: string): number => {
  // Define regular expressions for each time unit
  const regex = {
    days: /(\d+)d/,
    hours: /(\d+)h/,
    minutes: /(\d+)m/,
    seconds: /(\d+)s/
  }

  // Function to extract the value of each time unit
  const extractValue = (pattern: any): number => {
    const match = timeString.match(pattern)
    return match ? parseInt(match[1]) : 0
  }

  // Extracting values for each unit
  const days = extractValue(regex.days)
  const hours = extractValue(regex.hours)
  const minutes = extractValue(regex.minutes)
  const seconds = extractValue(regex.seconds)

  // Calculating total seconds
  return days * 86400 + hours * 3600 + minutes * 60 + seconds
}
