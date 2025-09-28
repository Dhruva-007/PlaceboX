"use client"

import useSWR from "swr"
import { fetcher } from "../../lib/fetcher"
import { NftCard, type NftItem } from "../../components/nft-card"

export default function MarketplacePage() {
  const { data, error, isLoading } = useSWR<NftItem[]>("/api/marketplace", fetcher, {
    refreshInterval: 4000,
  })

  if (error) return <p className="p-6 text-red-500">Failed to load marketplace.</p>

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Marketplace</h1>
      {isLoading ? (
        <p className="text-muted-foreground">Loading items…</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => (
            <NftCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
