import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Problèmes concrets auxquels je peux contribuer : calibration, validation de méthodes, automatisation, analyse de données expérimentales, plans d'expériences et modèles prédictifs.",
  alternates: { canonical: "/solutions/" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Valeur professionnelle"
        title="Des problèmes concrets auxquels je peux contribuer"
        intro="Chaque capacité est illustrée par un projet réel. Je ne promets pas de gain chiffré : je montre ce que j'ai déjà construit."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {solutions.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-white p-7">
              <span className="font-mono text-[13px] text-electric-ink">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 flex-1 text-ink-2">{s.text}</p>
              {s.example ? (
                <Link
                  href={`/projets/${s.example.slug}/`}
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-electric-ink hover:underline"
                >
                  Exemple réel : {s.example.label} <ArrowRight aria-hidden="true" size={15} />
                </Link>
              ) : (
                <p className="mt-4 font-mono text-xs uppercase text-ink-3">Proposition</p>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-xl bg-night p-8 text-paper">
          <p className="max-w-xl text-lg">Vous avez un besoin proche de l&apos;un de ces cas ? Parlons-en.</p>
          <ButtonLink href="/contact/">Me contacter</ButtonLink>
        </div>
      </div>
    </>
  );
}
