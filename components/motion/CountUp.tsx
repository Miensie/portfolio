"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fait défiler un chiffre de 0 jusqu'à sa valeur quand il devient visible.
 * Accepte le format français (« 48,6 s », « 6,1 % ») : le nombre et l'unité sont conservés.
 * La valeur finale est toujours celle du texte d'origine (aucun arrondi inventé).
 */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+(?:,\d+)?)(.*)$/);
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, num = "0", suffix] = match;
    const target = parseFloat(num.replace(",", "."));
    const decimals = num.includes(",") ? (num.split(",")[1]?.length ?? 0) : 0;
    const el = ref.current;
    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = (target * eased).toFixed(decimals).replace(".", ",");
          setShown(t < 1 ? `${prefix}${current}${suffix}` : value);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setShown(`${prefix}${(0).toFixed(decimals).replace(".", ",")}${suffix}`);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // La valeur ne change pas pendant la vie du composant.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{shown}</span>
    </span>
  );
}
