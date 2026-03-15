import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import { Isla } from "../components/ui/Isla"

const CanvasComponent = () => {
  return (
    <Canvas camera={{ position: [0, 5, 28], fov: 50 }}>
      <Suspense fallback={null}>
        <Environment files="/citrus_orchard_road_puresky_1k.exr" background />
        <Isla />
      </Suspense>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={true}
      />
    </Canvas>
  )
}

export default CanvasComponent
