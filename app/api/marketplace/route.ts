import { NextResponse } from "next/server"

export async function GET() {
  const items = [
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
  return NextResponse.json(items)
}
