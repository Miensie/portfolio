import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Info, BookOpen } from "lucide-react";
import { domains, getProject, problems, projects } from "@/content/projects";
import { method } from "@/content/vision";
import { StatusBadge, TechTag } from "@/components/ui/Tags";
import { Reveal } from "@/components/motion/Reveal";
import type { ProjectLink } from "@/lib/types";

interface Params {
  params: Promise<{ slug: string }>;
}

/** Une page statique générée par projet au moment de la compilation. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projets/${project.slug}/` },
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

const linkIcons: Record<ProjectLink["kind"], typeof Github> = {
  code: Github,
  demo: ExternalLink,
  source: BookOpen,
};

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const stepTitle = (i: number) => method[i]?.title ?? "";

  return (
    <article>
      {/* En-tête */}
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Link href="/projets/" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-mist hover:text-paper">
            <ArrowLeft aria-hidden="true" size={16} /> Tous les projets
          </Link>
          <div className="rise mt-6 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs uppercase tracking-wide text-electric-soft">
              {project.problems.map((p) => problems[p]).join(" · ")}
            </span>
          </div>
          <h1
            className="rise mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            style={{ ["--delay" as string]: "100ms" }}
          >
            {project.title}
          </h1>
          <p className="rise mt-3 text-sm text-mist" style={{ ["--delay" as string]: "160ms" }}>
            {project.context}, {project.year}. Domaine : {project.domains.map((d) => domains[d]).join(", ")}.
          </p>
          <p className="rise mt-6 max-w-3xl text-lg text-mist-light" style={{ ["--delay" as string]: "220ms" }}>
            {project.summary}
          </p>
          {project.links.length > 0 && (
            <ul className="rise mt-8 flex flex-wrap gap-3" style={{ ["--delay" as string]: "300ms" }}>
              {project.links.map((l) => {
                const Icon = linkIcons[l.kind];
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-ink-2/60 px-4 text-sm font-medium hover:border-electric-soft hover:text-electric-soft"
                    >
                      <Icon aria-hidden="true" size={16} /> {l.label}
                      <span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {project.notice && (
          <p className="mb-12 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-[15px] text-amber-950">
            <Info aria-hidden="true" size={20} className="mt-0.5 shrink-0" />
            <span>{project.notice}</span>
          </p>
        )}

        <div className="grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            {/* 1. Comprendre */}
            <Phase n={1} title={stepTitle(0)}>
              <p className="text-lg text-ink">{project.problem}</p>
              <h3 className="mt-6 font-semibold">Objectifs</h3>
              <BulletList items={project.objectives} />
              <h3 className="mt-6 font-semibold">Mon rôle</h3>
              <p className="mt-2 text-ink-2">{project.role}</p>
            </Phase>

            {/* 2. Mobiliser */}
            <Phase n={2} title={stepTitle(1)}>
              <BulletList items={project.knowledge} />
            </Phase>

            {/* 3. Modéliser ou expérimenter */}
            <Phase n={3} title={stepTitle(2)}>
              <ol className="space-y-5">
                {project.approach.map((step) => (
                  <li key={step.title}>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-ink-2">{step.text}</p>
                  </li>
                ))}
              </ol>
            </Phase>

            {/* 4. Développer */}
            <Phase n={4} title={stepTitle(3)}>
              <p className="text-ink">{project.solution}</p>
              <h3 className="mt-6 font-semibold">Architecture</h3>
              <BulletList items={project.architecture} />
            </Phase>

            {/* 5. Évaluer */}
            <Phase n={5} title={stepTitle(4)} last>
              {project.metrics && (
                <dl className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-white p-5">
                      <dt className="text-sm text-ink-3">{m.label}</dt>
                      <dd className="mt-1 font-mono text-2xl font-medium">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <h3 className="font-semibold">Résultats</h3>
              <BulletList items={project.results} />
              {project.figures?.map((f) => (
                <figure key={f.src} className="mt-8">
                  <div className="overflow-x-auto rounded-xl border border-line bg-white p-2">
                    <Image src={f.src} alt={f.alt} width={f.width} height={f.height} className="h-auto w-full min-w-[560px]" />
                  </div>
                  <figcaption className="mt-3 text-sm text-ink-3">{f.caption}</figcaption>
                </figure>
              ))}
              <h3 className="mt-8 font-semibold">Limites</h3>
              <BulletList items={project.limits} />
              <h3 className="mt-8 font-semibold">Ce que je ferais ensuite</h3>
              <BulletList items={project.nextSteps} />
            </Phase>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="Étapes de l'étude de cas" className="hidden lg:block">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-3">Démarche</p>
              <ol className="mt-3 space-y-1 border-l border-line">
                {method.map((m, i) => (
                  <li key={m.title}>
                    <a href={`#etape-${i + 1}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-ink-2 hover:border-electric hover:text-electric-ink">
                      {i + 1}. {m.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-3">Technologies</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t}>
                    <TechTag>{t}</TechTag>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-ink-3">Captures d&apos;écran</h2>
              <p className="mt-3 text-sm text-ink-3">
                {project.figures?.length
                  ? "Les figures présentées viennent des résultats réels du projet."
                  : "Captures à venir, avec des données de démonstration."}
              </p>
            </div>
          </aside>
        </div>

        {next && next.slug !== project.slug && (
          <nav aria-label="Projet suivant" className="mt-20 border-t border-line pt-8">
            <Link href={`/projets/${next.slug}/`} className="group inline-flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-3">Projet suivant</span>
              <span className="inline-flex items-center gap-2 text-xl font-semibold group-hover:text-electric-ink">
                {next.title} <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}

/** Une étape de la démarche, numérotée et reliée à la suivante par un rail vertical. */
function Phase({ n, title, last, children }: { n: number; title: string; last?: boolean; children: React.ReactNode }) {
  return (
    <Reveal as="section" className={`relative grid grid-cols-[2.75rem_1fr] gap-x-4 ${last ? "" : "pb-14"}`}>
      <div aria-hidden="true" className="relative flex justify-center">
        <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-electric bg-paper font-mono text-sm text-electric-ink">
          {n}
        </span>
        {!last && <span className="absolute bottom-0 top-11 w-px bg-line-strong" />}
      </div>
      <div id={`etape-${n}`} className="min-w-0 scroll-mt-24 pt-1.5">
        <p className="font-mono text-xs uppercase tracking-widest text-electric-ink">Étape {n}</p>
        <h2 className="mb-4 mt-1 text-2xl font-semibold tracking-tight">{title}</h2>
        {children}
      </div>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ink-2">
          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-electric" />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}
