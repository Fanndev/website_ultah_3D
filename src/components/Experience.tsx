import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { World } from "./World";

export function Experience() {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <Environment preset="night" />
      <Stars radius={50} depth={50} count={5000} factor={4} fade />
      <World />
    </>
  );
}
