"use client"

import { useState } from "react"
import useSWR from "swr"
import { fetcher } from "../../lib/fetcher"
import { NftCard, type NftItem } from "../../components/nft-card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function OwnedPage() {
  const [account, setAccount] = useState<string>("steve.onchain")
  const { data, isLoading, error, mutate } = useSWR<NftItem[]>(
    account ? `/api/owned?account=${encodeURIComponent(account)}` : null,
    fetcher,
    { refreshInterval: 4000 },
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Owned Items</h1>
        <div className="flex w-full max-w-md items-center gap-2">
          <Input value={account} onChange={(e) => setAccount(e.target.value)} placeholder="Enter account / wallet" />
          <Button onClick={() => mutate()} className="bg-brand-gradient text-black hover:opacity-90">
            Refresh
          </Button>
        </div>
      </div>

      {error && <p className="text-red-500">Failed to load owned items.</p>}
      {isLoading ? (
        <p className="text-muted-foreground">Fetching on-chain items…</p>
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
