import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Décalage en millisecondes, pour faire apparaître une série d'éléments l'un après l'autre. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/** Conteneur qui apparaît au défilement (voir RevealObserver et globals.css). */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: RevealProps) {
  return (
    <Tag className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
