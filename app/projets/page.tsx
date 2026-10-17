import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/Section";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Études de cas : contrôle qualité FTIR-ATR, profil d'exactitude, prédiction du temps de rétention par machine learning, compléments Excel pour l'ingénierie.",
  alternates: { canonical: "/projets/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title="Du problème à la solution"
        intro="Chaque projet est présenté tel qu'il est réellement : son contexte, la démarche suivie, les résultats obtenus et ses limites."
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ProjectFilter projects={projects} />
      </div>
    </>
  );
}
