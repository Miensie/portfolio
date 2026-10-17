import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light" | "text";

const styles: Record<Variant, string> = {
  primary: "bg-electric text-white hover:bg-electric-ink px-5",
  "outline-dark": "border border-ink-2/40 text-paper hover:border-electric-soft hover:text-electric-soft px-5",
  "outline-light": "border border-line-strong text-ink hover:border-electric hover:text-electric-ink px-5 bg-white",
  text: "text-electric-ink hover:underline underline-offset-4",
};

interface Props {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Lien externe (nouvel onglet) ou fichier à télécharger. */
  external?: boolean;
  download?: boolean;
}

/** Bouton-lien unique du site (navigation interne, liens externes, téléchargements). */
export function ButtonLink({ href, children, variant = "primary", external, download }: Props) {
  const className = `inline-flex min-h-12 items-center gap-2 rounded-md font-medium transition-colors ${styles[variant]}`;
  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
