export const isNumber = (value = '') => {
  return !!(value && typeof value === 'number' && !isNaN(value))
}
