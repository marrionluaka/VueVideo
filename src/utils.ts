export function getStorageItem(key: string): Array<any> {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : []
}
