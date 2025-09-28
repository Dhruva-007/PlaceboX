import { Card, CardContent } from "../../components/ui/card"

export default function GuidelinesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Trading Guidelines</h1>
      <Card>
        <CardContent className="prose prose-invert max-w-none p-6">
          <ol>
            <li>Only list Minecraft-compatible cosmetic mods and assets you own.</li>
            <li>All items are represented as NFTs for verifiable on-chain ownership.</li>
            <li>Peer-to-peer trades finalize on-chain; always review price and metadata.</li>
            <li>Never share private keys. If an account is compromised, on-chain ownership remains intact.</li>
            <li>Respect creators: follow license terms bundled with each item.</li>
          </ol>
          <p className="mt-4">
            This marketplace is community-first and game‑mod friendly. Keep trades fair, transparent, and fun.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
