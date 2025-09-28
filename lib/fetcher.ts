export async function fetcher<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, { ...init, cache: "no-store" })
  if (!res.ok) throw new Error("Network response was not ok")
  return res.json()
}
