import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { explorationAreas, levelLabels, skillGroups } from "@/content/skills";
import { getProject } from "@/content/projects";
import type { Skill, SkillLevel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Ce que je sais faire et où je l'ai démontré, ce que j'apprends, et les disciplines que je veux explorer : chimie, procédés, statistique, données, logiciel.",
  alternates: { canonical: "/competences/" },
};

const levelStyles: Record<SkillLevel, string> = {
  maitrise: "bg-night text-paper",
  pratique: "bg-blue-50 text-blue-900 ring-1 ring-blue-200",
  apprentissage: "bg-white text-ink-3 ring-1 ring-line-strong",
};

function ProofLinks({ skill }: { skill: Skill }) {
  if (!skill.proof?.length) return null;
  return (
    <p className="mt-1 text-sm text-ink-3">
      Démontré dans :{" "}
      {skill.proof.map((slug, i) => {
        const p = getProject(slug);
        if (!p) return null;
        return (
          <span key={slug}>
            {i > 0 && ", "}
            <Link href={`/projets/${slug}/`} className="text-electric-ink underline-offset-2 hover:underline">
              {p.shortTitle}
            </Link>
          </span>
        );
      })}
    </p>
  );
}

export default function SkillsPage() {
  const learning = skillGroups.flatMap((g) => g.skills.filter((s) => s.level === "apprentissage"));

  return (
    <>
      <PageHeader
        eyebrow="Compétences"
        title="Ce que je sais faire, ce que j'apprends, ce que je veux explorer"
        intro="Pas de pourcentages. Chaque compétence acquise renvoie au projet qui la prouve, et ce qui est encore en cours est présenté comme tel."
      />

      <Section labelledBy="acquis-titre">
        <SectionHeader
          eyebrow="1 · Acquis"
          id="acquis-titre"
          title="Compétences démontrées"
          intro="Maîtrisé : je l'utilise couramment et en autonomie. Pratiqué en projet : je l'ai mis en œuvre dans au moins un projet présenté ici."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const acquired = group.skills.filter((s) => s.level !== "apprentissage");
            if (acquired.length === 0) return null;
            return (
              <Reveal key={group.title} delay={(gi % 2) * 120} className="rounded-xl border border-line bg-white p-7">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <ul className="mt-5 divide-y divide-line">
                  {acquired.map((skill) => (
                    <li key={skill.name} className="py-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-xs ${levelStyles[skill.level]}`}>
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <ProofLinks skill={skill} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="white" labelledBy="apprentissage-titre">
        <SectionHeader
          eyebrow="2 · En apprentissage"
          id="apprentissage-titre"
          title="Ce que je suis en train d'apprendre"
          intro="Je m'en suis déjà servi, mais pas encore assez pour dire que je le maîtrise."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {learning.map((skill, i) => (
            <Reveal as="li" key={skill.name} delay={(i % 2) * 120} className="rounded-xl border border-dashed border-line-strong bg-paper p-5">
              <span className="font-medium">{skill.name}</span>
              <ProofLinks skill={skill} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section labelledBy="exploration">
        <SectionHeader
          eyebrow="3 · À explorer"
          id="exploration"
          title="Les disciplines que je veux ajouter à mon socle"
          intro="Ce ne sont pas des compétences que je revendique. Ce sont les directions dans lesquelles je travaille pour devenir un ingénieur plus complet."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {explorationAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 110} className="lift rounded-xl border border-line bg-white p-6">
              <p className="font-mono text-xs text-electric-ink">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-semibold">{area.title}</h3>
              <p className="mt-2 text-[15px] text-ink-2">{area.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/vision/" className="inline-flex min-h-11 items-center gap-1.5 font-medium text-electric-ink hover:underline">
            Pourquoi ces disciplines : le Projet Nexus <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
