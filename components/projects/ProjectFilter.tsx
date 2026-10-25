"use client";

import { useMemo, useState } from "react";
import type { DomainId, ProblemId, Project, ProjectStatus } from "@/lib/types";
import { domains, problems, statusLabels } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

type Filter<T extends string> = T | "tous";

/** Galerie filtrable (le seul composant client de /projets). */
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [problem, setProblem] = useState<Filter<ProblemId>>("tous");
  const [domain, setDomain] = useState<Filter<DomainId>>("tous");
  const [status, setStatus] = useState<Filter<ProjectStatus>>("tous");

  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (problem === "tous" || p.problems.includes(problem)) &&
          (domain === "tous" || p.domains.includes(domain)) &&
          (status === "tous" || p.status === status),
      ),
    [projects, problem, domain, status],
  );

  const problemEntries = Object.entries(problems) as [ProblemId, string][];
  const domainEntries = (Object.entries(domains) as [DomainId, string][]).filter(([id]) =>
    projects.some((p) => p.domains.includes(id)),
  );
  // Seuls les statuts réellement utilisés sont proposés (jamais de filtre qui renvoie une liste vide).
  const statusEntries = (Object.entries(statusLabels) as [ProjectStatus, string][]).filter(([id]) =>
    projects.some((p) => p.status === id),
  );

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-8">
        <fieldset>
          <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">Problématique</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={problem === "tous"} onClick={() => setProblem("tous")}>
              Toutes
            </Chip>
            {problemEntries.map(([id, label]) => (
              <Chip key={id} active={problem === id} onClick={() => setProblem(id)}>
                {label}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">Domaine d&apos;application</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={domain === "tous"} onClick={() => setDomain("tous")}>
              Tous
            </Chip>
            {domainEntries.map(([id, label]) => (
              <Chip key={id} active={domain === id} onClick={() => setDomain(id)}>
                {label}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">Statut</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={status === "tous"} onClick={() => setStatus("tous")}>
              Tous
            </Chip>
            {statusEntries.map(([id, label]) => (
              <Chip key={id} active={status === id} onClick={() => setStatus(id)}>
                {label}
              </Chip>
            ))}
          </div>
        </fieldset>
      </div>

      <p className="mt-6 text-sm text-ink-3" role="status" aria-live="polite">
        {visible.length} projet{visible.length > 1 ? "s" : ""}
      </p>

      {visible.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            // Animation jouée à l'affichage : elle se rejoue quand on change de filtre.
            <div key={`${p.slug}-${problem}-${domain}-${status}`} className="rise" style={{ ["--delay" as string]: `${Math.min(i, 5) * 70}ms` }}>
              <ProjectCard project={p} headingLevel={2} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-lg border border-dashed border-line-strong p-8 text-center text-ink-3">
          Aucun projet ne correspond à ces filtres.
        </p>
      )}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 text-sm transition-colors ${
        active
          ? "border-night bg-night text-paper"
          : "border-line-strong bg-white text-ink-2 hover:border-electric hover:text-electric-ink"
      }`}
    >
      {children}
    </button>
  );
}
