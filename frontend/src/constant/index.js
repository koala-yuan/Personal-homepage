export const DEFAULT_PAGINATION = (total = -1) => ({
  total,
  offset: 0,
  limit: 10
})

export const UNLIMITED_PAGINATION = () => ({
  offset: 0,
  limit: -1
})

export const TIME_FREQ = () => ([
  { label: '每天', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' },
  { label: '每季度', value: 'quarterly' }
])

export const DATE_FORMAT = () => `YYYY-MM-DD`
export const TIME_FORMAT = () => `HH:mm:ss`
export const DATETIME_FORMAT = () => `YYYY-MM-DD HH:mm:ss`
