import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { birthdayConfig } from "../../config/birthday";

export function Decorations() {
  const balloonsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (balloonsRef.current) {
      balloonsRef.current.children.forEach((balloon, i) => {
        balloon.position.y += Math.sin(time + i) * 0.002;
      });
    }
  });

  return (
    <group ref={balloonsRef}>
      {/* Balloons */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin((i * Math.PI * 2) / 10) * 3,
            2 + Math.random(),
            Math.cos((i * Math.PI * 2) / 10) * 3,
          ]}
          castShadow
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color={
              i % 2 === 0
                ? birthdayConfig.colors.primary
                : birthdayConfig.colors.accent
            }
            metalness={0.1}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Gift Boxes */}
      {Array.from({ length: 5 }).map((_, i) => (
        <group
          key={`gift-${i}`}
          position={[-2 + i, 0.5, -2]}
          rotation={[0, Math.random() * Math.PI, 0]}
        >
          <mesh castShadow>
            <boxGeometry args={[0.6, 0.6, 0.6]} />
            <meshStandardMaterial color={birthdayConfig.colors.secondary} />
          </mesh>
          <mesh position={[0, 0.31, 0]}>
            <boxGeometry args={[0.65, 0.02, 0.65]} />
            <meshStandardMaterial color={birthdayConfig.colors.primary} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
