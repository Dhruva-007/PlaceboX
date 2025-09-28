"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export function NftViewer({ modelUrl = "/assets/3d/duck.glb" }: { modelUrl?: string }) {
  return (
    <div className="h-80 w-full rounded-lg border border-border bg-card">
      <Canvas camera={{ position: [2.5, 2, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enablePan enableZoom />
      </Canvas>
    </div>
  )
}
// drei preloading
useGLTF.preload("/assets/3d/duck.glb")
