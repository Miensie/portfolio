import type { ProblemId } from "@/lib/types";

/**
 * Visuel DÉCORATIF des cartes (un motif par problématique).
 * Ce n'est pas une capture d'écran : il est masqué aux lecteurs d'écran.
 * Quand vous disposerez de vraies captures, ajoutez-les dans `figures` du projet.
 */
export function ProjectCover({ problem }: { problem: ProblemId }) {
  return (
    <div aria-hidden="true" className="relative aspect-[16/7] overflow-hidden border-b border-line bg-[#EEF2F7]">
      <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <g stroke="#CBD5E1" strokeWidth="0.6">
          {[20, 50, 80, 110].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} />
          ))}
        </g>
        {problem === "mesurer" && (
          <path
            d="M0 118 C40 117 60 115 80 116 S100 70 108 114 S140 118 160 116 S175 30 184 112 S220 117 240 115 S256 84 264 113 S300 118 320 117"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.6"
          />
        )}
        {problem === "fiabiliser" && (
          <g fill="#2563EB">
            {Array.from({ length: 34 }, (_, i) => {
              const x = 30 + i * 8;
              const y = 118 - i * 2.6 + ((i * 37) % 17) - 8;
              return <circle key={i} cx={x} cy={y} r={2.2} opacity={0.35 + ((i * 13) % 6) / 10} />;
            })}
            <line x1="22" y1="124" x2="304" y2="34" stroke="#0B1426" strokeWidth="1" strokeDasharray="4 3" />
          </g>
        )}
        {problem === "modeliser" && (
          <g stroke="#2563EB" strokeWidth="0.8" fill="#F8FAFC">
            {[40, 70, 100].map((y1) =>
              [30, 60, 90, 120].map((y2) => <line key={`${y1}-${y2}`} x1="110" y1={y1} x2="170" y2={y2} opacity="0.5" />),
            )}
            {[30, 60, 90, 120].map((y1) => <line key={`b${y1}`} x1="170" y1={y1} x2="230" y2="75" opacity="0.5" />)}
            {[40, 70, 100].map((y) => (
              <circle key={`a${y}`} cx="110" cy={y} r="6" />
            ))}
            {[30, 60, 90, 120].map((y) => (
              <circle key={`h${y}`} cx="170" cy={y} r="6" />
            ))}
            <circle cx="230" cy="75" r="7" fill="#2563EB" />
          </g>
        )}
        {problem === "outiller" && (
          <g>
            {Array.from({ length: 6 }, (_, r) =>
              Array.from({ length: 9 }, (_, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={34 + c * 28}
                  y={14 + r * 19}
                  width="26"
                  height="17"
                  fill={(r * 9 + c) % 7 === 0 ? "#2563EB" : (r + c) % 5 === 0 ? "#BFDBFE" : "#FFFFFF"}
                  stroke="#CBD5E1"
                  strokeWidth="0.6"
                />
              )),
            )}
          </g>
        )}
        {problem === "optimiser" && (
          <g fill="none" stroke="#2563EB">
            {/* Courbes de niveau d'une surface de réponse et son optimum. */}
            {[14, 28, 42, 56, 70, 84].map((r, i) => (
              <ellipse
                key={r}
                cx="190"
                cy="70"
                rx={r * 1.5}
                ry={r * 0.8}
                transform="rotate(-18 190 70)"
                strokeWidth="1"
                opacity={1 - i * 0.13}
              />
            ))}
            <circle cx="190" cy="70" r="4" fill="#0B1426" stroke="none" />
          </g>
        )}
      </svg>
    </div>
  );
}
