import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { LoadingScreen } from "./components/LoadingScreen";
import { Sections } from "./components/Sections";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gsap.to(canvasRef.current, {
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0.3,
    });

    // Memutar lagu ulang tahun saat aplikasi dimuat
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio Error:", err));
    }
  }, []);

  return (
    <div className="relative">
      <LoadingScreen />
      {/* Audio Player */}
      <audio ref={audioRef} src="/public/happy-birthday.mp3" loop />
      <div
        ref={canvasRef}
        className="h-screen fixed inset-0 pointer-events-none"
      >
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
      </div>
      <Sections />
    </div>
  );
}
