import type { TimelineItem } from "@/lib/types";

/** Parcours, d'après le CV. Du plus récent au plus ancien. */
export const timeline: TimelineItem[] = [
  {
    period: "Décembre 2026",
    title: "Soutenance du mémoire d'ingénieur",
    place: "INP-HB, Yamoussoukro",
    upcoming: true,
  },
  {
    period: "Depuis octobre 2026",
    title: "Stagiaire assistant contrôle qualité",
    place: "SCCI, Société pour le Compoundage en Côte d'Ivoire",
    text: "Contrôle qualité des produits au sein du laboratoire.",
    current: true,
  },
  {
    period: "Avril à septembre 2026",
    title: "Stage de fin d'études",
    place: "SCCI, Société pour le Compoundage en Côte d'Ivoire",
    text: "Mise en place d'une méthode de contrôle qualité des mélanges-maîtres additifs et d'un outil pour l'appliquer au quotidien.",
  },
  {
    period: "Juillet à septembre 2025",
    title: "Stage de deuxième année",
    place: "Laboratoire d'Analyse, de Nutrition et de Technologie Alimentaire",
    text: "Développement d'un programme qui construit le profil d'exactitude pour la validation des méthodes d'analyse.",
  },
  {
    period: "Juillet et août 2024",
    title: "Stage de première année",
    place: "FabLab Chimie de l'INP-HB",
    text: "Conception d'un système biochimico-électrique qui produit de l'électricité à partir de plantes.",
  },
  {
    period: "Septembre 2023 à février 2026",
    title: "Cycle ingénieur",
    place: "INP-HB, Yamoussoukro",
    text: "Sciences et technologies de la chimie et du génie des procédés, option Chimie Analytique, Matériaux et Polymères.",
  },
  {
    period: "Septembre 2021 à avril 2023",
    title: "Classe préparatoire BCPST",
    place: "INP-HB, Yamoussoukro",
    text: "Biologie, chimie, physique et sciences de la Terre.",
  },
];

export const certifications = [
  "Certificat de micro-apprentissage UNESCO : « Autonomiser les jeunes pour la transition écologique »",
];

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
];
