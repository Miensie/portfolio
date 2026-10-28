import type { ExplorationArea, SkillGroup, SkillLevel } from "@/lib/types";

/**
 * Compétences.
 * Niveaux : « maitrise » (utilisé couramment et en autonomie), « pratique » (mis en œuvre
 * dans un projet présenté sur ce site), « apprentissage » (en cours d'acquisition).
 * À AJUSTER selon votre propre évaluation : ne jamais surestimer un niveau.
 */
export const levelLabels: Record<SkillLevel, string> = {
  maitrise: "Maîtrisé",
  pratique: "Pratiqué en projet",
  apprentissage: "En apprentissage",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Chimie, matériaux et analyse",
    skills: [
      { name: "Instrumentation analytique (spectroscopie IR)", level: "pratique", proof: ["controle-qualite-melanges-maitres"] },
      { name: "Validation de méthodes analytiques", level: "maitrise", proof: ["profil-exactitude", "controle-qualite-melanges-maitres"] },
      { name: "Étalonnage et contrôle qualité au laboratoire", level: "pratique", proof: ["controle-qualite-melanges-maitres"] },
      { name: "Chromatographie liquide (données de rétention)", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Matériaux polymères et mélanges-maîtres", level: "pratique", proof: ["controle-qualite-melanges-maitres"] },
    ],
  },
  {
    title: "Génie des procédés et modélisation",
    skills: [
      { name: "Cinétique et modèles de réacteurs", level: "pratique", proof: ["physioai-lab"] },
      { name: "Estimation de paramètres d'équations différentielles", level: "pratique", proof: ["physioai-lab"] },
      { name: "Plans d'expériences et surfaces de réponse", level: "pratique", proof: ["doe-ai-plans-experiences"] },
    ],
  },
  {
    title: "Statistique et chimiométrie",
    skills: [
      { name: "Régression simple et pondérée", level: "maitrise", proof: ["profil-exactitude"] },
      { name: "Profil d'exactitude, ISO 5725-2", level: "maitrise", proof: ["profil-exactitude"] },
      { name: "Tests d'hypothèse, ANOVA", level: "pratique", proof: ["doe-ai-plans-experiences", "profil-exactitude"] },
      { name: "ACP, PLS, classification", level: "pratique", proof: ["chemai-chimiometrie-excel"] },
      { name: "Maîtrise statistique des procédés", level: "pratique", proof: ["qhse-analyzer-pro"] },
    ],
  },
  {
    title: "Données et intelligence artificielle",
    skills: [
      { name: "XGBoost, scikit-learn", level: "pratique", proof: ["prediction-temps-retention", "physioai-lab"] },
      { name: "Descripteurs moléculaires (RDKit)", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Validation croisée, optimisation d'hyperparamètres", level: "pratique", proof: ["prediction-temps-retention"] },
      { name: "Réseaux de neurones (PyTorch)", level: "apprentissage", proof: ["physioai-lab"] },
      { name: "Intégration d'API de modèles de langage", level: "pratique", proof: ["chemai-chimiometrie-excel", "qhse-analyzer-pro"] },
    ],
  },
  {
    title: "Logiciel et automatisation",
    skills: [
      { name: "Excel avancé et VBA (UserForms, modules)", level: "maitrise", proof: ["controle-qualite-melanges-maitres", "profil-exactitude"] },
      { name: "Python", level: "pratique", proof: ["prediction-temps-retention", "physioai-lab"] },
      { name: "Compléments Excel web (Office.js, JavaScript)", level: "pratique", proof: ["chemai-chimiometrie-excel", "esg-analyzer-pro"] },
      { name: "API REST avec FastAPI", level: "pratique", proof: ["profil-exactitude", "physioai-lab", "formulation-studio"] },
      { name: "React, Next.js, TypeScript", level: "apprentissage", proof: ["formulation-studio"] },
      { name: "Bases de données SQL", level: "apprentissage", proof: ["formulation-studio"] },
      { name: "Git, Docker, déploiement", level: "pratique", proof: ["formulation-studio", "physioai-lab"] },
    ],
  },
];

/**
 * Domaines que je veux approfondir. Ce ne sont PAS des compétences revendiquées :
 * la page les présente comme des directions de travail.
 */
export const explorationAreas: ExplorationArea[] = [
  {
    title: "Sciences fondamentales et physique appliquée",
    text: "Revenir aux lois qui gouvernent les systèmes, pour ne pas dépendre d'un modèle que je ne comprends pas.",
  },
  {
    title: "Transferts thermiques et de matière",
    text: "Le cœur du génie des procédés. Je veux savoir les poser, les calculer et les simuler.",
  },
  {
    title: "Mécanique",
    text: "Comprendre les contraintes et le comportement des structures et des matériaux en service.",
  },
  {
    title: "Simulation numérique",
    text: "Passer des équations au calcul : méthodes numériques, simulation de procédés et de phénomènes physiques.",
  },
  {
    title: "Sciences des matériaux",
    text: "Aller au-delà des polymères : relier structure, propriétés et mise en œuvre.",
  },
  {
    title: "Électronique et automatisation",
    text: "Capteurs, acquisition de données et régulation, pour faire le lien entre le modèle et le système réel.",
  },
  {
    title: "Programmation et intelligence artificielle",
    text: "Les approfondir comme des outils au service de l'analyse, de la simulation et de l'optimisation.",
  },
];
