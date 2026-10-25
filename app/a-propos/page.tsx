import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Section, SectionHeader } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { certifications, languages, timeline } from "@/content/timeline";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Qui je suis : ingénieur en formation en chimie et génie des procédés à l'INP-HB, avec une démarche interdisciplinaire qui relie mesure, modélisation, données et logiciel.",
  alternates: { canonical: "/a-propos/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une base en chimie, une démarche d'ingénieur"
        intro="Je ne me vois ni comme un pur chimiste, ni comme un développeur. Je me forme pour comprendre des systèmes et construire des solutions."
      />

      <Section labelledBy="qui-titre">
        <div className="grid items-start gap-12 md:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-5 text-lg text-ink-2">
            <h2 id="qui-titre" className="text-3xl font-semibold tracking-tight text-ink">
              Qui je suis
            </h2>
            <p>
              Je suis élève-ingénieur à l&apos;Institut National Polytechnique Houphouët-Boigny (INP-HB) de Yamoussoukro, en
              chimie et génie des procédés, option Chimie Analytique, Matériaux et Polymères.
            </p>
            <p>
              Mes stages m&apos;ont appris une chose : un problème réel ne demande presque jamais une seule compétence. Pour
              doser un additif dans un plastique, il m&apos;a fallu de la spectroscopie, de la statistique, de la métrologie
              et de la programmation. Pour valider une méthode d&apos;analyse, il m&apos;a fallu écrire un logiciel.
            </p>
            <p>
              C&apos;est pour cela que je construis une approche interdisciplinaire. Mon socle reste la chimie et le génie
              des procédés. Autour, j&apos;ajoute peu à peu ce qui me manque pour aller plus loin : physique appliquée,
              transferts, simulation numérique, électronique, automatisation, et le logiciel comme outil transversal.
            </p>
            <p>
              Ce que je cherche, c&apos;est une équipe où l&apos;on attend d&apos;un ingénieur qu&apos;il comprenne le problème
              avant de proposer une solution, et qu&apos;il sache dire honnêtement où cette solution s&apos;arrête.
            </p>
          </Reveal>
          <Reveal delay={150} className="relative mx-auto w-full max-w-[300px]">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[18%] rounded-2xl bg-night" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[18%] overflow-hidden rounded-2xl">
              <svg viewBox="0 0 300 330" className="size-full" preserveAspectRatio="xMidYMid slice">
                <circle className="orbit" cx="150" cy="150" r="120" fill="none" stroke="#1E3A6E" strokeDasharray="2 6" />
                <circle className="orbit-reverse" cx="150" cy="150" r="80" fill="none" stroke="#1E3A6E" />
              </svg>
            </div>
            <Image
              src="/images/portrait.webp"
              alt={`Portrait de ${site.name}`}
              width={695}
              height={988}
              className="relative h-auto w-full drop-shadow-[0_16px_30px_rgba(11,20,38,0.35)]"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="white" labelledBy="chrono-titre">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <SectionHeader eyebrow="Chronologie" id="chrono-titre" title="Parcours académique et stages" />
          <Reveal>
            <Timeline items={timeline} />
          </Reveal>
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
