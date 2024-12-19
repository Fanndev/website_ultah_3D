import { birthdayConfig } from "../../config/birthday";

export function Header() {
  return (
    <div className="absolute flex flex-col items-center justify-center text-center text-center pointer-events-auto">
      <h1
        className="text-6xl font-bold text-white mb-4"
        style={{ textShadow: "0 0 10px rgba(255,215,0,0.5)" }}
      >
        Anda Diundang!
      </h1>
      <div className="space-y-4">
        <p className="text-3xl text-white/90">Bergabunglah untuk merayakan</p>
        <h2
          className="text-4xl font-bold"
          style={{ color: birthdayConfig.colors.primary }}
        >
          Ulang Tahun {birthdayConfig.celebrant.name}
        </h2>
        <p className="text-5xl font-bold text-white/90">
          yang ke-{birthdayConfig.celebrant.age}
        </p>
      </div>
    </div>
  );
}
