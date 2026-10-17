import type { SkillGroup, SkillLevel } from "@/lib/types";

/**
 * Compétences par catégorie.
 * Niveaux : « maitrise » (utilisé couramment, en autonomie), « pratique » (mis en œuvre
 * dans un projet présenté sur ce site), « apprentissage » (en cours d'acquisition).
 * ➜ À AJUSTER selon votre propre évaluation : ne jamais surestimer un niveau.
 */
export const levelLabels: Record<SkillLevel, string> = {
  maitrise: "Maîtrisé",
  pratique: "Pratiqué en projet",
  apprentissage: "En apprentissage",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Chimie analytique et caractérisation",
    skills: [
      { name: "Spectroscopie FTIR-ATR quantitative", level: "pratique", proof: ["controle-qualite-ftir-melanges-maitres"] },
      { name: "Validation de méthodes analytiques", level: "maitrise", proof: ["profil-exactitude", "controle-qualite-ftir-melanges-maitres"] },
      { name: "Étalonnage et contrôle qualité au laboratoire", level: "pratique", proof: ["controle-qualite-ftir-melanges-maitres"] },
      { name: "Chromatographie liquide (données de rétention)", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Matériaux et polymères (mélanges-maîtres)", level: "pratique", proof: ["controle-qualite-ftir-melanges-maitres"] },
    ],
  },
  {
    title: "Chimiométrie et statistiques",
    skills: [
      { name: "Régression simple et pondérée", level: "maitrise", proof: ["controle-qualite-ftir-melanges-maitres"] },
      { name: "Profil d'exactitude, ISO 5725-2", level: "maitrise", proof: ["profil-exactitude"] },
      { name: "Tests d'hypothèse, ANOVA", level: "pratique", proof: ["doe-ai-plans-experiences", "profil-exactitude"] },
      { name: "ACP, PLS, classification", level: "pratique", proof: ["chemai-chimiometrie-excel"] },
      { name: "Plans d'expériences", level: "pratique", proof: ["doe-ai-plans-experiences"] },
      { name: "Maîtrise statistique des procédés (SPC)", level: "pratique", proof: ["qhse-analyzer-pro"] },
    ],
  },
  {
    title: "Intelligence artificielle et machine learning",
    skills: [
      { name: "XGBoost, scikit-learn", level: "pratique", proof: ["prediction-temps-retention", "physioai-lab"] },
      { name: "Descripteurs moléculaires (RDKit)", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Optimisation d'hyperparamètres, validation croisée", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Réseaux de neurones (PyTorch)", level: "apprentissage", proof: ["physioai-lab"] },
      { name: "Intégration d'API de modèles de langage", level: "pratique", proof: ["chemai-chimiometrie-excel", "qhse-analyzer-pro"] },
    ],
  },
  {
    title: "Programmation et développement logiciel",
    skills: [
      { name: "Python", level: "pratique", proof: ["prediction-temps-retention", "physioai-lab"] },
      { name: "JavaScript", level: "pratique", proof: ["chemai-chimiometrie-excel", "doe-ai-plans-experiences"] },
      { name: "API REST avec FastAPI", level: "pratique", proof: ["profil-exactitude", "physioai-lab", "formulation-studio"] },
      { name: "React, Next.js, TypeScript", level: "apprentissage", proof: ["formulation-studio"] },
      { name: "Bases de données SQL (PostgreSQL, SQLite)", level: "apprentissage", proof: ["formulation-studio"] },
      { name: "Git et GitHub", level: "pratique" },
    ],
  },
  {
    title: "Automatisation et outils métiers",
    skills: [
      { name: "Excel avancé et VBA (UserForms, modules)", level: "maitrise", proof: ["controle-qualite-ftir-melanges-maitres", "profil-exactitude"] },
      { name: "Compléments Excel web (Office.js)", level: "pratique", proof: ["chemai-chimiometrie-excel", "esg-analyzer-pro"] },
      { name: "Applications de bureau Python (Flet)", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Génération de rapports automatisés", level: "pratique", proof: ["profil-exactitude", "esg-analyzer-pro"] },
    ],
  },
  {
    title: "Outils scientifiques et environnement numérique",
    skills: [
      { name: "TQ Analyst (Thermo Fisher Scientific)", level: "pratique", proof: ["controle-qualite-ftir-melanges-maitres"] },
      { name: "Matplotlib, pandas, NumPy", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Déploiement : GitHub Pages, Render, Docker", level: "pratique", proof: ["formulation-studio", "physioai-lab"] },
    ],
  },
];
