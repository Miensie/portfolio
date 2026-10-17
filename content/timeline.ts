import type { TimelineItem } from "@/lib/types";

/** Parcours — source : CV. Du plus récent au plus ancien. */
export const timeline: TimelineItem[] = [
  {
    period: "Déc. 2026",
    title: "Soutenance du mémoire d'ingénieur",
    place: "INP-HB, Yamoussoukro",
    upcoming: true,
  },
  {
    period: "Avr. – sept. 2026",
    title: "Stage de fin d'études",
    place: "SCCI — Société pour le Compoundage en Côte d'Ivoire",
    text: "Caractérisation quantitative des mélanges-maîtres additifs par spectroscopie FTIR-ATR : modélisation, validation et automatisation.",
  },
  {
    period: "Juil. – sept. 2025",
    title: "Stage de deuxième année",
    place: "Laboratoire d'Analyse, de Nutrition et de Technologie Alimentaire",
    text: "Développement d'un programme de construction du profil d'exactitude pour la validation des méthodes analytiques.",
  },
  {
    period: "Juil. – août 2024",
    title: "Stage de première année",
    place: "FabLab Chimie de l'INP-HB",
    text: "Conception d'un système biochimico-électrique produisant de l'électricité à partir de plantes.",
  },
  {
    period: "Sept. 2023 – févr. 2026",
    title: "Cycle ingénieur",
    place: "INP-HB, Yamoussoukro",
    text: "Sciences et technologies de la chimie et du génie des procédés, option Chimie Analytique, Matériaux et Polymères.",
  },
  {
    period: "Sept. 2021 – avr. 2023",
    title: "Classe préparatoire BCPST",
    place: "INP-HB, Yamoussoukro",
    text: "Biologie, chimie, physique et sciences de la Terre.",
  },
];

export const certifications = [
  "Certificat de micro-apprentissage UNESCO — « Autonomiser les jeunes pour la transition écologique »",
];

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
];
