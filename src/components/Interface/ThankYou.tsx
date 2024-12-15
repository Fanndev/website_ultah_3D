import { useState, useEffect } from "react";
import { birthdayConfig } from "../../config/birthday";

export function ThankYou() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none">
      <div
        className="bg-black/50 backdrop-blur-md rounded-lg p-6 animate-fade-in"
        style={{ border: `1px solid ${birthdayConfig.colors.primary}` }}
      >
        <h3
          className="text-2xl font-bold mb-2"
          style={{ color: birthdayConfig.colors.primary }}
        >
          Thank You for Celebrating With Me!
        </h3>
        <p className="text-white/90">
          Your presence makes this day even more special.
        </p>
      </div>
    </div>
  );
}
