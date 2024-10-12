export async function fetchApi<T>(url: string): Promise<T> {
  return await fetch(url, {
    // headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    //   authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, //Readonly<ImportMetaEnv>
    // },
  }).then((response) => response.json());
}
