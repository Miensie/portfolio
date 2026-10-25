/**
 * Schéma décoratif : les disciplines reliées comme les éléments d'un système.
 * Le socle (chimie et génie des procédés) est au centre ; les autres disciplines gravitent autour.
 * Purement visuel, masqué aux lecteurs d'écran.
 */
// Les nœuds sont placés sur le pourtour pour rester visibles autour du portrait.
const nodes = [
  { label: "CHIMIE", x: 250, y: 52 },
  { label: "PROCÉDÉS", x: 418, y: 118 },
  { label: "MATÉRIAUX", x: 452, y: 262 },
  { label: "LOGICIEL", x: 432, y: 408 },
  { label: "MÉCANIQUE", x: 68, y: 408 },
  { label: "PHYSIQUE", x: 48, y: 262 },
  { label: "DONNÉES · IA", x: 82, y: 118 },
];

export function SystemDiagram() {
  return (
    <svg aria-hidden="true" viewBox="0 0 500 500" className="absolute inset-0 size-full">
      <defs>
        <pattern id="grille" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V25" fill="none" stroke="#1E2A44" strokeWidth="0.6" />
        </pattern>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="500" height="500" fill="url(#grille)" opacity="0.7" />
      <circle cx="250" cy="250" r="190" fill="url(#halo)" />

      <g className="orbit">
        <circle cx="250" cy="250" r="200" fill="none" stroke="#1E3A6E" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="450" cy="250" r="4" fill="#60A5FA" />
      </g>
      <g className="orbit-reverse">
        <circle cx="250" cy="250" r="145" fill="none" stroke="#1E3A6E" strokeWidth="1" />
        <circle cx="105" cy="250" r="3" fill="#93C5FD" />
      </g>

      {/* Liaisons entre disciplines : le trait circule comme un flux. */}
      <g stroke="#60A5FA" strokeWidth="1" fill="none" opacity="0.55">
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length]!;
          return <path key={n.label} className="flow" d={`M${n.x} ${n.y} L${next.x} ${next.y}`} />;
        })}
        {nodes.map((n) => (
          <path key={`c-${n.label}`} d={`M250 250 L${n.x} ${n.y}`} strokeOpacity="0.35" />
        ))}
      </g>

      {nodes.map((n, i) => (
        <g key={`n-${n.label}`}>
          <circle
            className="pulse-node"
            style={{ ["--delay" as string]: `${i * 450}ms` }}
            cx={n.x}
            cy={n.y}
            r="11"
            fill="#2563EB"
            fillOpacity="0.25"
          />
          <circle cx={n.x} cy={n.y} r="4.5" fill="#60A5FA" />
          <text
            x={n.x}
            y={n.y - 18}
            textAnchor="middle"
            fill="#93C5FD"
            fontSize="12"
            letterSpacing="1.5"
            fontFamily="'IBM Plex Mono', monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
