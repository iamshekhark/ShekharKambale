/** Abstract CSS-3D orbit illustration — no WebGL, cheap to render. */
export function Orbit() {
  const chips = ["Flutter", "React", "Node", "AI"];
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[460px] [perspective:1000px]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(64deg)_rotateZ(-18deg)]">
        <div className="absolute inset-0 animate-orbit rounded-full border border-primary/40">
          <span className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-primary shadow-glow" />
        </div>
        <div className="absolute inset-[14%] animate-orbit-slow rounded-full border border-dashed border-violet/50">
          <span className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-violet" />
        </div>
        <div className="absolute inset-[30%] animate-orbit rounded-full border border-foreground/15" />
      </div>
      <div className="absolute inset-[32%] animate-float">
        <div className="size-full rounded-full bg-gradient-accent opacity-90 shadow-glow" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--foreground),transparent_45%)] opacity-40 mix-blend-overlay" />
        <span className="absolute inset-0 flex items-center justify-center font-serif text-6xl italic text-primary-foreground">
          sk
        </span>
      </div>
      {chips.map((c, i) => (
        <span
          key={c}
          className="absolute rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur animate-float"
          style={{
            top: ["8%", "22%", "74%", "84%"][i],
            left: ["12%", "80%", "4%", "68%"][i],
            animationDelay: `${i * 0.9}s`,
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}
