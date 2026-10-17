"use client";

import { useMemo, useState } from "react";
import type { CategoryId, Project, ProjectStatus } from "@/lib/types";
import { categories, statusLabels } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

type Filter<T extends string> = T | "tous";

/** Galerie filtrable (le seul composant client de /projets). */
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<Filter<CategoryId>>("tous");
  const [status, setStatus] = useState<Filter<ProjectStatus>>("tous");

  const visible = useMemo(
    () =>
      projects.filter(
        (p) => (category === "tous" || p.categories.includes(category)) && (status === "tous" || p.status === status),
      ),
    [projects, category, status],
  );

  const categoryEntries = Object.entries(categories) as [CategoryId, string][];
  // Seuls les statuts réellement utilisés sont proposés (jamais de filtre qui renvoie une liste vide).
  const statusEntries = (Object.entries(statusLabels) as [ProjectStatus, string][]).filter(([id]) =>
    projects.some((p) => p.status === id),
  );

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-8">
        <fieldset>
          <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-3">Domaine</legend>
          <div className="flex flex-wrap gap-2">
            <Chip active={category === "tous"} onClick={() => setCategory("tous")}>
              Tous
            </Chip>
            {categoryEntries.map(([id, label]) => (
              <Chip key={id} active={category === id} onClick={() => setCategory(id)}>
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
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} headingLevel={2} />
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
