export function setLocalStorage(key: string, items: string): void {
  const cache = localStorage.getItem(key);
  if (!cache) {
    return localStorage.setItem(key, items);
  }
}

export function getLocalStorage(key: string): any | null {
  return localStorage.getItem(key);
}

export function clearLocalStorage(key: string | null): void {
  return key ? localStorage.removeItem(key) : localStorage.clear();
}
