export function setLocalStorage(key: string, items: string | any): void {
  return localStorage.setItem(key, items as string);
}

export function getLocalStorage(key: string): any | null {
  return localStorage.getItem(key);
}

export function clearLocalStorage(key: string | null): void {
  return key ? localStorage.removeItem(key) : localStorage.clear();
}
