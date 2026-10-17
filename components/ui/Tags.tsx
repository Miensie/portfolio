import type { ProjectStatus } from "@/lib/types";
import { statusLabels } from "@/content/projects";

export function TechTag({ children }: { children: string }) {
  return (
    <span className="rounded border border-line-strong px-2 py-0.5 font-mono text-xs text-ink-2">{children}</span>
  );
}

const statusStyles: Record<ProjectStatus, string> = {
  termine: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  "en-cours": "bg-blue-50 text-blue-800 ring-blue-200",
  prototype: "bg-amber-50 text-amber-900 ring-amber-200",
};

const statusDots: Record<ProjectStatus, string> = {
  termine: "bg-emerald-600",
  "en-cours": "bg-blue-600",
  prototype: "bg-amber-600",
};

/** Statut affiché avec un point ET un libellé : jamais la couleur seule. */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-xs ring-1 ${statusStyles[status]}`}>
      <span aria-hidden="true" className={`size-1.5 rounded-full ${statusDots[status]}`} />
      {statusLabels[status]}
    </span>
  );
}
