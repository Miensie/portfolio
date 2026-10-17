/** Catégories de la galerie (filtres de /projets). */
export type CategoryId = "chimie" | "chimiometrie" | "ia" | "automatisation" | "web";

/** État réel d'un projet — à garder honnête. */
export type ProjectStatus = "termine" | "en-cours" | "prototype";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "code" | "demo" | "source";
}

export interface Metric {
  value: string;
  label: string;
}

export interface Figure {
  /** Chemin dans /public, ex. "/images/projets/mon-image.png" */
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface Step {
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Ex. « Stage de fin d'études · SCCI » */
  context: string;
  year: string;
  categories: CategoryId[];
  status: ProjectStatus;
  /** Affiché sur la page d'accueil (3 ou 4 projets maximum). */
  featured?: boolean;
  /** Une phrase pour les cartes et le SEO. */
  summary: string;
  problem: string;
  solution: string;
  stack: string[];

  // ——— Étude de cas ———
  objectives: string[];
  role: string;
  approach: Step[];
  architecture: string[];
  results: string[];
  metrics?: Metric[];
  figures?: Figure[];
  limits: string[];
  nextSteps: string[];
  links: ProjectLink[];
  /** Avertissement affiché en tête de page (confidentialité, données fictives…). */
  notice?: string;
}

export type SkillLevel = "maitrise" | "pratique" | "apprentissage";

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Slugs des projets qui démontrent cette compétence. */
  proof?: string[];
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  text?: string;
  /** Événement à venir ou en cours */
  upcoming?: boolean;
}

export interface Solution {
  title: string;
  text: string;
  /** Projet réel qui illustre la capacité ; absent = proposition. */
  example?: { slug: string; label: string };
}
