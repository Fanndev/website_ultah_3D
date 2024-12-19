import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { birthdayConfig } from "../config/birthday";

export function LoadingScreen() {
  const { progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <h2
          className="text-2xl mb-4"
          style={{ color: birthdayConfig.colors.primary }}
        >
          Preparing your invitation...
        </h2>
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: birthdayConfig.colors.accent,
            }}
          />
        </div>
        <p className="text-white/60 mt-2">{progress.toFixed(0)}%</p>
      </div>
    </div>
  );
}
