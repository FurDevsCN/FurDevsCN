export function setLocalStorage<T>(key: string, value: any): T | string | void{
    const cache = localStorage.getItem(key)
    return cache ? cache : localStorage.setItem(key, value)
}

export default function getLocalStorage(key: string): string | null{
    return localStorage.getItem(key)
}

export function clearLocalStorage(key: string | null): void{
    return key? localStorage.removeItem(key) : localStorage.clear()
}