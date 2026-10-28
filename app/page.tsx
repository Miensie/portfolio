import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { MethodFlow } from "@/components/home/MethodFlow";
import { Position } from "@/components/home/Position";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Timeline } from "@/components/ui/Timeline";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/motion/Reveal";
import { featuredProjects } from "@/content/projects";
import { solutions } from "@/content/solutions";
import { timeline } from "@/content/timeline";
import { site } from "@/content/site";
import { cvAvailable } from "@/lib/cv";

export default function HomePage() {
  const hasCv = cvAvailable();
  return (
    <>
      <Hero hasCv={hasCv} />

      <Section labelledBy="demarche-titre">
        <SectionHeader
          eyebrow="01 · Ma démarche"
          id="demarche-titre"
          title="La même méthode, quel que soit le domaine"
          intro="Une méthode de contrôle qualité, un modèle de réacteur ou un outil d'analyse de données : chaque projet suit ces cinq étapes. On les retrouve dans toutes mes études de cas."
        />
        <MethodFlow />
      </Section>

      <Section tone="white" labelledBy="position-titre">
        <SectionHeader
          eyebrow="02 · Où j'en suis"
          id="position-titre"
          title="Ce que je sais faire, ce que j'apprends, où je vais"
          intro="Je tiens à séparer ces trois choses. Un recruteur doit savoir ce qui est prouvé, ce qui est en cours et ce qui relève de l'ambition."
        />
        <Position />
      </Section>

      <Section labelledBy="projets-titre">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="03 · Projets"
            id="projets-titre"
            title="Des problèmes d'ingénierie, pas seulement de chimie"
          />
          <div className="mb-10">
            <ButtonLink href="/projets/" variant="text">
              Tous les projets <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 140}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" labelledBy="valeur-titre">
        <SectionHeader
          dark
          eyebrow="04 · Ce que j'apporte"
          id="valeur-titre"
          title="Des problèmes concrets auxquels je peux contribuer dès maintenant"
        />
        <div className="grid border-t border-night-line sm:grid-cols-2 lg:grid-cols-4">
          {solutions.slice(0, 4).map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="border-b border-night-line py-7 pr-6">
              <p className="font-mono text-[13px] text-electric-soft">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] text-mist-light">{s.text}</p>
              {s.example && (
                <Link href={`/projets/${s.example.slug}/`} className="mt-3 inline-block py-1 text-sm text-mist hover:text-paper">
                  Exemple : {s.example.label}
                </Link>
              )}
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/solutions/" className="inline-flex min-h-11 items-center gap-1.5 font-medium text-electric-soft hover:underline">
            Voir toutes les contributions possibles <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </Section>

      <Section labelledBy="parcours-titre">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeader
              eyebrow="05 · Parcours"
              id="parcours-titre"
              title="Une formation, trois stages, trois réalisations"
              intro="Chaque stage m'a demandé de passer de la théorie à quelque chose qui fonctionne : un système de production d'énergie, un logiciel de validation, une méthode de contrôle industrielle."
            />
            <ButtonLink href="/a-propos/" variant="text">
              Mon parcours en détail <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
          <Reveal>
            <Timeline items={timeline.slice(0, 5)} />
          </Reveal>
        </div>
      </Section>

      <section aria-labelledby="cta-titre" className="bg-night text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 id="cta-titre" className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Vous avez un problème qui ne rentre pas dans une seule discipline ?
            </h2>
            <p className="mt-4 text-lg text-mist-light">{site.opportunities}</p>
          </Reveal>
          <Reveal delay={150} className="flex flex-wrap gap-3">
            <ButtonLink href="/contact/">
              <Mail aria-hidden="true" size={18} /> Me contacter
            </ButtonLink>
            {hasCv && (
              <ButtonLink href={site.cvPath} variant="outline-dark" download>
                Télécharger mon CV
              </ButtonLink>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
