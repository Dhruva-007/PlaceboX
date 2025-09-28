import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-20" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
                <span className="text-gradient">Own, trade, and showcase</span> your Minecraft cosmetics.
              </h1>
              <p className="text-pretty text-base text-muted-foreground md:text-lg">
                BlockCraft Market is a decentralized marketplace designed for Minecraft. Trade peer‑to‑peer, keep true
                ownership on-chain, and see your owned items update in real time.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/marketplace">
                  <Button className="bg-brand-gradient text-black hover:opacity-90">Explore Marketplace</Button>
                </Link>
                <Link href="/guidelines">
                  <Button variant="secondary">Trading Guidelines</Button>
                </Link>
              </div>
              <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                <li>• Peer‑to‑peer trading</li>
                <li>• On‑chain NFT ownership</li>
                <li>• Real‑time owned items</li>
                <li>• Easy mod integration</li>
              </ul>
            </div>

            <Card className="md:translate-y-4">
              <CardContent className="p-0">
                <img
                  src="/minecraft-market-grid-dark-ui.jpg"
                  alt="Marketplace preview"
                  className="h-full w-full rounded-md object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Decentralized", d: "Ownership lives on-chain as NFTs you control." },
            { t: "For Minecraft", d: "Purpose-built for the Minecraft modding ecosystem." },
            { t: "Real-time Sync", d: "Owned items update from the chain automatically." },
          ].map((f) => (
            <Card key={f.t}>
              <CardContent className="space-y-2 p-6">
                <h3 className="font-semibold">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
