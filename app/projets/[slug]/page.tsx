import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Info, BookOpen } from "lucide-react";
import { categories, getProject, projects } from "@/content/projects";
import { StatusBadge, TechTag } from "@/components/ui/Tags";
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

  return (
    <article>
      {/* ——— En-tête ——— */}
      <header className="bg-night text-paper">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Link href="/projets/" className="inline-flex min-h-11 items-center gap-1.5 text-sm text-mist hover:text-paper">
            <ArrowLeft aria-hidden="true" size={16} /> Tous les projets
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs uppercase tracking-wide text-mist">
              {project.categories.map((c) => categories[c]).join(" · ")}
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-3 font-mono text-sm text-electric-soft">
            {project.context} · {project.year}
          </p>
          <p className="mt-6 max-w-3xl text-lg text-mist-light">{project.summary}</p>
          {project.links.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-3">
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
            {project.notice}
          </p>
        )}

        {/* ——— Problème / solution ——— */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-7">
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink-3">Contexte et problématique</h2>
            <p className="mt-3 text-lg">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-night bg-night p-7 text-paper">
            <h2 className="font-mono text-xs uppercase tracking-widest text-electric-soft">Solution</h2>
            <p className="mt-3 text-lg">{project.solution}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0 space-y-14">
            <CaseBlock title="Objectifs">
              <BulletList items={project.objectives} />
            </CaseBlock>

            <CaseBlock title="Mon rôle">
              <p className="text-ink-2">{project.role}</p>
            </CaseBlock>

            <CaseBlock title="Démarche">
              <ol className="space-y-5">
                {project.approach.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-3">
                    <span className="font-mono text-sm text-electric-ink">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-ink-2">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CaseBlock>

            <CaseBlock title="Architecture de la solution">
              <BulletList items={project.architecture} />
            </CaseBlock>

            <CaseBlock title="Résultats">
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
              <BulletList items={project.results} />
              {project.figures?.map((f) => (
                <figure key={f.src} className="mt-8">
                  <div className="overflow-x-auto rounded-xl border border-line bg-white p-2">
                    <Image src={f.src} alt={f.alt} width={f.width} height={f.height} className="h-auto w-full min-w-[560px]" />
                  </div>
                  <figcaption className="mt-3 text-sm text-ink-3">{f.caption}</figcaption>
                </figure>
              ))}
            </CaseBlock>

            <CaseBlock title="Limites identifiées">
              <BulletList items={project.limits} />
            </CaseBlock>

            <CaseBlock title="Améliorations envisagées">
              <BulletList items={project.nextSteps} />
            </CaseBlock>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
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
                  ? "Les figures présentées sont issues des résultats réels du projet."
                  : "Captures à venir (avec des données de démonstration)."}
              </p>
            </div>
          </aside>
        </div>

        {next && next.slug !== project.slug && (
          <nav aria-label="Projet suivant" className="mt-20 border-t border-line pt-8">
            <Link href={`/projets/${next.slug}/`} className="group inline-flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-3">Projet suivant</span>
              <span className="inline-flex items-center gap-2 text-xl font-semibold group-hover:text-electric-ink">
                {next.title} <ArrowRight aria-hidden="true" size={18} />
              </span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}

function CaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-ink-2">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-electric" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
