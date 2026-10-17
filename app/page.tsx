import Link from "next/link";
import { ArrowRight, Code2, FlaskConical, Mail, ScatterChart } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Timeline } from "@/components/ui/Timeline";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { featuredProjects, getProject } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { timeline } from "@/content/timeline";
import { site } from "@/content/site";
import { cvAvailable } from "@/lib/cv";

const axes = [
  {
    icon: FlaskConical,
    title: "Science analytique",
    text: "Caractérisation FTIR-ATR, validation de méthodes par profil d'exactitude, contrôle qualité des matériaux.",
    slug: "controle-qualite-ftir-melanges-maitres",
  },
  {
    icon: ScatterChart,
    title: "Données et IA",
    text: "Régression pondérée, chimiométrie multivariée, apprentissage automatique sur descripteurs moléculaires.",
    slug: "prediction-temps-retention",
  },
  {
    icon: Code2,
    title: "Développement logiciel",
    text: "Excel VBA, compléments Excel web (Office.js), API Python et applications pour les besoins opérationnels.",
    slug: "chemai-chimiometrie-excel",
  },
];

export default function HomePage() {
  const hasCv = cvAvailable();
  return (
    <>
      <Hero hasCv={hasCv} />

      <Section labelledBy="axes-titre">
        <SectionHeader eyebrow="01 — Domaines" id="axes-titre" title="Trois domaines, une même démarche : mesurer juste, puis outiller." />
        <div className="grid gap-5 md:grid-cols-3">
          {axes.map(({ icon: Icon, title, text, slug }) => {
            const project = getProject(slug);
            return (
              <article key={title} className="rounded-xl border border-line bg-white p-7">
                <Icon aria-hidden="true" className="text-electric" size={28} strokeWidth={1.6} />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-ink-3">{text}</p>
                {project && (
                  <Link
                    href={`/projets/${project.slug}/`}
                    className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px] text-electric-ink hover:underline"
                  >
                    → {project.title.split(" — ")[0]}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="white" labelledBy="projets-titre">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow="02 — Projets phares" id="projets-titre" title="Du problème à la solution" />
          <div className="mb-10">
            <ButtonLink href="/projets/" variant="text">
              Tous les projets <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section tone="dark" labelledBy="valeur-titre">
        <SectionHeader dark eyebrow="03 — Ce que j'apporte" id="valeur-titre" title="Des problèmes concrets auxquels je peux contribuer" />
        <div className="grid border-t border-night-line sm:grid-cols-2 lg:grid-cols-4">
          {solutions.slice(0, 4).map((s, i) => (
            <div key={s.title} className="border-b border-night-line py-7 pr-6">
              <p className="font-mono text-[13px] text-electric-soft">{String.fromCharCode(65 + i)}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] text-mist-light">{s.text}</p>
              {s.example && (
                <Link href={`/projets/${s.example.slug}/`} className="mt-3 inline-block py-1 text-sm text-mist hover:text-paper">
                  Exemple : {s.example.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/solutions/" className="inline-flex min-h-11 items-center gap-1.5 font-medium text-electric-soft hover:underline">
            Voir toutes les solutions <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Section>

      <Section labelledBy="parcours-titre">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeader
              eyebrow="04 — Parcours"
              id="parcours-titre"
              title="De la paillasse au code"
              intro="Une formation de chimiste analyste, et trois stages qui ont chacun abouti à un outil ou à un dispositif concret."
            />
            <ButtonLink href="/a-propos/" variant="text">
              Mon parcours en détail <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          <Timeline items={timeline.slice(0, 5)} />
        </div>
      </Section>

      <section aria-labelledby="cta-titre" className="bg-night text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <h2 id="cta-titre" className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Un problème de mesure, de données ou d&apos;automatisation ?
            </h2>
            <p className="mt-4 text-lg text-mist-light">{site.opportunities}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact/">
              <Mail aria-hidden="true" size={18} /> Me contacter
            </ButtonLink>
            {hasCv && (
              <ButtonLink href={site.cvPath} variant="outline-dark" download>
                Télécharger mon CV
              </ButtonLink>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
