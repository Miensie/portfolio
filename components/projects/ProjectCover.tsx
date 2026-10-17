import type { CategoryId } from "@/lib/types";

/**
 * Visuel DÉCORATIF des cartes (motif par catégorie).
 * Ce n'est pas une capture d'écran : il est masqué aux lecteurs d'écran.
 * Quand vous disposerez de vraies captures, ajoutez-les dans `figures` du projet.
 */
export function ProjectCover({ category }: { category: CategoryId }) {
  return (
    <div aria-hidden="true" className="relative aspect-[16/7] overflow-hidden border-b border-line bg-[#EEF2F7]">
      <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <g stroke="#CBD5E1" strokeWidth="0.6">
          {[20, 50, 80, 110].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} />
          ))}
        </g>
        {category === "chimie" && (
          <path
            d="M0 118 C40 117 60 115 80 116 S100 70 108 114 S140 118 160 116 S175 30 184 112 S220 117 240 115 S256 84 264 113 S300 118 320 117"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.6"
          />
        )}
        {category === "chimiometrie" && (
          <g fill="#2563EB">
            {Array.from({ length: 34 }, (_, i) => {
              const x = 30 + i * 8;
              const y = 118 - i * 2.6 + ((i * 37) % 17) - 8;
              return <circle key={i} cx={x} cy={y} r={2.2} opacity={0.35 + ((i * 13) % 6) / 10} />;
            })}
            <line x1="22" y1="124" x2="304" y2="34" stroke="#0B1426" strokeWidth="1" strokeDasharray="4 3" />
          </g>
        )}
        {category === "ia" && (
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
        {category === "automatisation" && (
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
        {category === "web" && (
          <g fill="none" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="70" y="22" width="180" height="100" rx="6" stroke="#94A3B8" />
            <line x1="70" y1="40" x2="250" y2="40" stroke="#94A3B8" />
            <path d="m136 66-14 14 14 14" />
            <path d="m184 66 14 14-14 14" />
            <path d="m168 60-16 40" />
          </g>
        )}
      </svg>
    </div>
  );
}
