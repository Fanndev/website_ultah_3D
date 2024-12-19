import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { birthdayConfig } from "../../config/birthday";

export function CakeModel() {
  const cakeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (cakeRef.current) {
      cakeRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group ref={cakeRef} position={[0, 0, 0]}>
      {/* Base layer */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[1, 1, 0.6, 32]} />
        <meshStandardMaterial color={birthdayConfig.colors.primary} />
      </mesh>

      {/* Middle layer */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.7, 0.6, 32]} />
        <meshStandardMaterial color={birthdayConfig.colors.accent} />
      </mesh>

      {/* Top layer */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 32]} />
        <meshStandardMaterial color={birthdayConfig.colors.primary} />
      </mesh>

      {/* Candle */}
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Flame */}
      <pointLight position={[0, 2.2, 0]} intensity={1} color="#FFA500" />
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#FFA500"
          emissive="#FFA500"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}