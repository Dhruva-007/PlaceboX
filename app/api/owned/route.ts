import { type NextRequest, NextResponse } from "next/server"

const catalog = [
  {
    id: "duck-001",
    name: "Rubber Duck Pet",
    price: 0.035,
    image: "/rubber-duck-companion.jpg",
    modelUrl: "/assets/3d/duck.glb",
    description: "A cute duck companion that follows you around.",
  },
  {
    id: "cape-emerald",
    name: "Emerald Cape",
    price: 0.055,
    image: "/emerald-cape-minecraft-cosmetic.jpg",
    description: "Shimmering emerald cape for your character.",
  },
  {
    id: "pickaxe-gold",
    name: "Gilded Pickaxe Skin",
    price: 0.075,
    image: "/gold-pickaxe-skin-minecraft.jpg",
    description: "A dazzling golden pickaxe visual skin.",
  },
]

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const account = searchParams.get("account") || "anonymous"
  // Rotate items deterministically based on account and time to mimic "real-time" updates
  const now = Math.floor(Date.now() / 5000)
  const seed = (account.length + now) % catalog.length
  const items = [catalog[seed], catalog[(seed + 1) % catalog.length]]
  return NextResponse.json(items)
}
