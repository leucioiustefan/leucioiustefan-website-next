export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0d1117]">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 30% at 50% -10%, rgba(34,211,238,0.15), transparent),
            radial-gradient(ellipse 40% 60% at 90% 60%, rgba(34,211,238,0.08), transparent),
            radial-gradient(ellipse 0% 0% at 20% 80%, rgba(34,211,238,0.08), transparent)
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
