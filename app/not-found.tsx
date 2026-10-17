import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <div className="bg-night text-paper">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <p className="font-mono text-[13px] tracking-[0.08em] text-electric-soft">ERREUR 404 · SIGNAL NON DÉTECTÉ</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Cette page n&apos;existe pas, ou plus.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-mist-light">
          Le lien est peut-être erroné. Vous pouvez revenir à l&apos;accueil ou parcourir les projets.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
          <ButtonLink href="/projets/" variant="outline-dark">
            Voir les projets
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
