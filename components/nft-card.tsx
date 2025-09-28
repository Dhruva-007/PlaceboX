"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import { NftViewer } from "./nft-viewer"

export type NftItem = {
  id: string
  name: string
  price: number
  image?: string
  modelUrl?: string
  description?: string
}

export function NftCard({ item }: { item: NftItem }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-pretty">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
          <img
            src={item.image || "/placeholder.svg?height=240&width=428&query=blocky%20minecraft%20cosmetic%20preview"}
            alt={`${item.name} preview`}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gold">{`Ξ ${item.price.toFixed(3)}`}</span>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">3D View</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{item.name}</DialogTitle>
                </DialogHeader>
                <NftViewer modelUrl={item.modelUrl} />
              </DialogContent>
            </Dialog>
            <Button className="bg-brand-gradient text-black hover:opacity-90">Buy</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
