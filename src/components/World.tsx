import { CakeModel } from "./World/CakeModel";
import { Decorations } from "./World/Decoration";

export function World() {
  return (
    <group>
      <CakeModel />
      <Decorations />

      {/* Floor */}
      <mesh rotation-x={-Math.PI / 2} position-y={0} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight
        position={[5, 8, 5]}
        angle={0.4}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
    </group>
  );
}
