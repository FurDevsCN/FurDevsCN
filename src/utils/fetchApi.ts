export async function fetchApi<T>(url: string): Promise<T> {
  return await fetch(url).then((response) => response.json());
}