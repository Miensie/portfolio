import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Section, SectionHeader } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { certifications, languages, timeline } from "@/content/timeline";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours de Koffi Amani : classe préparatoire BCPST, cycle ingénieur en chimie analytique, matériaux et polymères à l'INP-HB, et stages tournés vers la mesure et l'automatisation.",
  alternates: { canonical: "/a-propos/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Chimiste de formation, développeur par nécessité"
        intro="Je me suis mis au code pour résoudre des problèmes de laboratoire. C'est devenu une manière de travailler."
      />

      <Section labelledBy="demarche-titre">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-lg text-ink-2">
            <h2 id="demarche-titre" className="text-3xl font-semibold tracking-tight text-ink">
              Ma démarche
            </h2>
            <p>
              Je suis élève-ingénieur à l&apos;Institut National Polytechnique Houphouët-Boigny (INP-HB) de
              Yamoussoukro, en chimie et génie des procédés, option Chimie Analytique, Matériaux et Polymères.
            </p>
            <p>
              Ce qui m&apos;intéresse en chimie analytique, c&apos;est la question de la confiance : une mesure ne vaut que si
              l&apos;on sait quelle erreur elle comporte. Étalonnage, validation, contrôle dans le temps — c&apos;est là que la
              statistique devient un outil de décision.
            </p>
            <p>
              Ces calculs sont souvent répétitifs et faits à la main. J&apos;ai donc appris à les automatiser : d&apos;abord en
              Excel VBA, puis avec des compléments Excel web, des API Python et des modèles d&apos;apprentissage automatique.
              Chacun de mes stages a abouti à un outil concret.
            </p>
            <p>
              Mon objectif : rejoindre une équipe où la mesure, les données et le logiciel se rencontrent, et y apporter
              des outils fiables, documentés et dont on connaît les limites.
            </p>
          </div>
          <div className="max-w-[300px]">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait de ${site.name}`}
              width={481}
              height={512}
              className="h-auto w-full rounded-xl bg-[#c9c9c5]"
            />
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="chrono-titre">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <SectionHeader eyebrow="Chronologie" id="chrono-titre" title="Parcours académique et stages" />
          <Timeline items={timeline} />
        </div>
      </Section>

      <Section labelledBy="extra-titre">
        <h2 id="extra-titre" className="sr-only">
          Certifications et langues
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-7">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-3">Certification</h3>
            <ul className="mt-3 space-y-2 text-ink-2">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-white p-7">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-3">Langues</h3>
            <dl className="mt-3 space-y-2">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between gap-4 border-b border-line pb-2 last:border-0">
                  <dt className="font-medium">{l.name}</dt>
                  <dd className="text-ink-3">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
    </>
  );
}
