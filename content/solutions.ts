import type { Solution } from "@/lib/types";

/**
 * Ce que je peux apporter à une entreprise.
 * Chaque capacité est illustrée par un projet réel ; aucune promesse de gain chiffré.
 */
export const solutions: Solution[] = [
  {
    title: "Mettre en place un contrôle qualité",
    text: "Mettre au point une méthode d'analyse, vérifier qu'elle est fiable, puis l'outiller pour qu'elle soit appliquée au quotidien.",
    example: { slug: "controle-qualite-melanges-maitres", label: "Contrôle qualité des mélanges-maîtres" },
  },
  {
    title: "Valider une méthode selon un référentiel",
    text: "Biais, fidélité et intervalles de tolérance : décider si une méthode est apte à son usage, sur des critères fixés à l'avance.",
    example: { slug: "profil-exactitude", label: "Profil d'exactitude" },
  },
  {
    title: "Automatiser des tâches répétitives",
    text: "Transformer une suite de calculs manuels en outil guidé, dans Excel (VBA ou complément web) ou en application Python.",
    example: { slug: "qhse-analyzer-pro", label: "QHSE Analyzer Pro" },
  },
  {
    title: "Exploiter des données expérimentales",
    text: "Nettoyer, explorer et résumer des jeux de mesures ; repérer les échantillons atypiques ; rendre les résultats lisibles.",
    example: { slug: "chemai-chimiometrie-excel", label: "ChemAI" },
  },
  {
    title: "Analyse statistique et plans d'expériences",
    text: "Planifier des essais, analyser les effets des facteurs et identifier les conditions qui atteignent un objectif.",
    example: { slug: "doe-ai-plans-experiences", label: "DOE·AI" },
  },
  {
    title: "Étudier la faisabilité d'un modèle prédictif",
    text: "Tester si une grandeur peut être prédite à partir de données disponibles, mesurer l'erreur sur des données jamais vues et en exposer clairement les limites.",
    example: { slug: "prediction-temps-retention", label: "Temps de rétention" },
  },
  {
    title: "Développer des applications pour les besoins opérationnels",
    text: "Prototyper un outil web ou de bureau autour d'un besoin précis, avec une architecture qui permet de le faire évoluer.",
    example: { slug: "formulation-studio", label: "FormulationStudio" },
  },
];
