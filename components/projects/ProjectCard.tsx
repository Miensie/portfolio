import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { categories } from "@/content/projects";
import { ProjectCover } from "./ProjectCover";
import { StatusBadge, TechTag } from "@/components/ui/Tags";

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const mainCategory = project.categories[0] ?? "chimie";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(11,20,38,0.25)]">
      <ProjectCover category={mainCategory} />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-xs uppercase tracking-wide text-ink-3">{categories[mainCategory]}</span>
          <span className="ml-auto">
            <StatusBadge status={project.status} />
          </span>
        </div>
        <div>
          <Heading className="text-xl font-semibold leading-snug">
            {/* Le lien couvre toute la carte (pseudo-élément), un seul arrêt au clavier. */}
            <Link href={`/projets/${project.slug}/`} className="after:absolute after:inset-0 after:content-['']">
              {project.title}
            </Link>
          </Heading>
          <p className="mt-1 text-sm text-ink-3">
            {project.context} · {project.year}
          </p>
        </div>
        <dl className="space-y-3 text-[15px]">
          <div>
            <dt className="font-semibold">Problème</dt>
            <dd className="mt-0.5 text-ink-2">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold">Solution</dt>
            <dd className="mt-0.5 text-ink-2">{project.solution}</dd>
          </div>
        </dl>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Technologies">
          {project.stack.slice(0, 5).map((t) => (
            <li key={t}>
              <TechTag>{t}</TechTag>
            </li>
          ))}
        </ul>
        <p aria-hidden="true" className="inline-flex items-center gap-1.5 font-medium text-electric-ink">
          Lire l&apos;étude de cas
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </p>
      </div>
    </article>
  );
}
