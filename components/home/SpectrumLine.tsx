/**
 * Courbe décorative évoquant un spectre : ce n'est PAS une mesure réelle.
 * Tracée une seule fois au chargement ; animation désactivée si l'utilisateur
 * a demandé à réduire les animations.
 */
export function SpectrumLine() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 140" preserveAspectRatio="none" className="block h-[70px] w-full sm:h-[110px]">
      <g stroke="#1E2A44" strokeWidth="1">
        <line x1="0" y1="130" x2="1200" y2="130" />
        {[200, 400, 600, 800, 1000].map((x) => (
          <line key={x} x1={x} y1="124" x2={x} y2="136" />
        ))}
      </g>
      <path
        className="spectrum-path"
        pathLength={1}
        d="M0 120 C60 119 110 117 160 118 S230 110 250 116 S272 40 288 114 S330 120 380 117 S430 104 452 112 S470 72 482 110 S520 118 560 116 S610 96 628 112 S650 20 664 108 S700 118 740 114 S790 88 806 110 S826 60 840 108 S880 116 930 112 S980 50 996 110 S1040 118 1080 116 S1140 98 1160 114 S1190 119 1200 119"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
