export function Ticker() {
  const items = [
    "MALA JUNTA",
    "PASION",
    "AMISTAD",
    "COMPETENCIA",
    "TUCUMAN",
    "2026",
    "LAS CAÑAS",
    "GARRA",
    "DISCIPLINA",
    "COMUNIDAD",
  ]

  const repeated = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-neon/20 bg-card/50 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 font-display text-sm tracking-[0.3em] text-neon/60 md:text-base">
            {item}
            <span className="ml-6 text-yellow/40">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
