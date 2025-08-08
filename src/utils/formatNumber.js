export function formatNumber(num) {
  if (num === undefined || num === null) return '—'
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
