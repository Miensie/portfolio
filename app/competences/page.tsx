import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/Section";
import { levelLabels, skillGroups } from "@/content/skills";
import { getProject } from "@/content/projects";
import type { SkillLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Compétences en chimie analytique, chimiométrie, machine learning, programmation et automatisation — chacune reliée aux projets qui la démontrent.",
  alternates: { canonical: "/competences/" },
};

const levelStyles: Record<SkillLevel, string> = {
  maitrise: "bg-night text-paper",
  pratique: "bg-blue-50 text-blue-900 ring-1 ring-blue-200",
  apprentissage: "bg-white text-ink-3 ring-1 ring-line-strong",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Compétences"
        title="Ce que je sais faire, et où je l'ai prouvé"
        intro="Pas de pourcentages : trois niveaux explicites, et pour chaque compétence pratiquée, le projet qui la démontre."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <dl className="mb-12 grid gap-4 rounded-xl border border-line bg-white p-6 sm:grid-cols-3">
          {(Object.keys(levelLabels) as SkillLevel[]).map((level) => (
            <div key={level}>
              <dt>
                <span className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-xs ${levelStyles[level]}`}>
                  {levelLabels[level]}
                </span>
              </dt>
              <dd className="mt-2 text-sm text-ink-3">
                {level === "maitrise" && "Utilisé couramment et en autonomie."}
                {level === "pratique" && "Mis en œuvre dans au moins un projet présenté sur ce site."}
                {level === "apprentissage" && "En cours d'acquisition, utilisé ponctuellement."}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <section key={group.title} className="rounded-xl border border-line bg-white p-7" aria-labelledby={`g-${group.title}`}>
              <h2 id={`g-${group.title}`} className="text-xl font-semibold">
                {group.title}
              </h2>
              <ul className="mt-5 divide-y divide-line">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="py-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-xs ${levelStyles[skill.level]}`}>
                        {levelLabels[skill.level]}
                      </span>
                    </div>
                    {skill.proof && skill.proof.length > 0 && (
                      <p className="mt-1 text-sm text-ink-3">
                        Démontré dans :{" "}
                        {skill.proof.map((slug, i) => {
                          const p = getProject(slug);
                          if (!p) return null;
                          return (
                            <span key={slug}>
                              {i > 0 && ", "}
                              <Link href={`/projets/${slug}/`} className="text-electric-ink underline-offset-2 hover:underline">
                                {p.title.split(" — ")[0]}
                              </Link>
                            </span>
                          );
                        })}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
