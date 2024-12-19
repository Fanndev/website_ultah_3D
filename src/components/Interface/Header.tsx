import { birthdayConfig } from "../../config/birthday";

export function Header() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto">
      <h1
        className="text-6xl font-bold text-white mb-4"
        style={{ textShadow: "0 0 10px rgba(255,215,0,0.5)" }}
      >
        You're Invited!
      </h1>
      <div className="space-y-4">
        <p className="text-3xl text-white/90">Join us in celebrating</p>
        <h2
          className="text-4xl font-bold"
          style={{ color: birthdayConfig.colors.primary }}
        >
          {birthdayConfig.celebrant.name}'s
        </h2>
        <p className="text-5xl font-bold text-white/90">
          {birthdayConfig.celebrant.age}th Birthday
        </p>
      </div>
    </div>
  );
}
