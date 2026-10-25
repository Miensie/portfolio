import type { CSSProperties } from "react";
import type { ProblemId } from "@/lib/types";

/**
 * Visuel DÉCORATIF des cartes (un motif animé par problématique).
 * Ce n'est pas une capture d'écran : il est masqué aux lecteurs d'écran.
 * Le motif se dessine quand la carte apparaît, puis réagit au survol.
 */
const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function ProjectCover({ problem }: { problem: ProblemId }) {
  return (
    <div aria-hidden="true" className="relative aspect-[16/7] overflow-hidden border-b border-line bg-[#EEF2F7]">
      <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <g stroke="#CBD5E1" strokeWidth="0.6">
          {[20, 50, 80, 110].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} />
          ))}
        </g>
        <g className="cover-zoom">
          {problem === "mesurer" && (
            // Spectre qui se trace
            <path
              className="cover-draw"
              pathLength={1}
              d="M0 118 C40 117 60 115 80 116 S100 70 108 114 S140 118 160 116 S175 30 184 112 S220 117 240 115 S256 84 264 113 S300 118 320 117"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1.6"
            />
          )}
          {problem === "fiabiliser" && (
            // Points de mesure qui apparaissent, droite d'étalonnage qui se trace
            <g fill="#2563EB">
              {Array.from({ length: 34 }, (_, i) => {
                const x = 30 + i * 8;
                const y = 118 - i * 2.6 + ((i * 37) % 17) - 8;
                return (
                  <circle
                    key={i}
                    className="cover-pop"
                    style={d(i * 35)}
                    cx={x}
                    cy={y}
                    r={2.2}
                    opacity={0.35 + ((i * 13) % 6) / 10}
                  />
                );
              })}
              <line
                className="cover-draw"
                pathLength={1}
                x1="22"
                y1="124"
                x2="304"
                y2="34"
                stroke="#0B1426"
                strokeWidth="1"
              />
            </g>
          )}
          {problem === "modeliser" && (
            // Réseau dont les nœuds s'allument l'un après l'autre
            <g stroke="#2563EB" strokeWidth="0.8" fill="#F8FAFC">
              {[40, 70, 100].map((y1) =>
                [30, 60, 90, 120].map((y2) => (
                  <line key={`${y1}-${y2}`} className="flow" x1="110" y1={y1} x2="170" y2={y2} opacity="0.5" />
                )),
              )}
              {[30, 60, 90, 120].map((y1) => (
                <line key={`b${y1}`} className="flow" x1="170" y1={y1} x2="230" y2="75" opacity="0.5" />
              ))}
              {[40, 70, 100].map((y, i) => (
                <circle key={`a${y}`} className="cover-pop" style={d(i * 120)} cx="110" cy={y} r="6" />
              ))}
              {[30, 60, 90, 120].map((y, i) => (
                <circle key={`h${y}`} className="cover-pop" style={d(400 + i * 120)} cx="170" cy={y} r="6" />
              ))}
              <circle className="cover-pop pulse-node" style={d(950)} cx="230" cy="75" r="7" fill="#2563EB" />
            </g>
          )}
          {problem === "outiller" && (
            // Cellules de tableur qui se remplissent
            <g>
              {Array.from({ length: 6 }, (_, r) =>
                Array.from({ length: 9 }, (_, c) => {
                  const filled = (r * 9 + c) % 7 === 0;
                  return (
                    <rect
                      key={`${r}-${c}`}
                      className={filled ? "cover-pop" : undefined}
                      style={filled ? d((r * 9 + c) * 18) : undefined}
                      x={34 + c * 28}
                      y={14 + r * 19}
                      width="26"
                      height="17"
                      fill={filled ? "#2563EB" : (r + c) % 5 === 0 ? "#BFDBFE" : "#FFFFFF"}
                      stroke="#CBD5E1"
                      strokeWidth="0.6"
                    />
                  );
                }),
              )}
            </g>
          )}
          {problem === "optimiser" && (
            // Courbes de niveau qui « respirent » autour de l'optimum
            <g fill="none" stroke="#2563EB">
              {/* La rotation est portée par le groupe : l'animation CSS ne l'écrase pas. */}
              <g transform="rotate(-18 190 70)">
              {[14, 28, 42, 56, 70, 84].map((r, i) => (
                <ellipse
                  key={r}
                  className="cover-breathe"
                  style={d(i * 250)}
                  cx="190"
                  cy="70"
                  rx={r * 1.5}
                  ry={r * 0.8}
                  strokeWidth="1"
                  opacity={1 - i * 0.13}
                />
              ))}
              </g>
              <circle className="pulse-node" cx="190" cy="70" r="4" fill="#0B1426" stroke="none" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
