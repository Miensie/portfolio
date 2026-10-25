/**
 * Démarche d'ingénieur et vision à long terme.
 * Texte écrit à la première personne, à partir de ce que Koffi a formulé.
 */

/** Les cinq étapes que suit chaque projet. Elles structurent aussi les études de cas. */
export const method = [
  {
    title: "Comprendre le problème",
    text: "D'où vient le besoin, qui va utiliser la solution, et ce qui compte vraiment.",
  },
  {
    title: "Mobiliser les connaissances",
    text: "Chercher la physique, la chimie ou la statistique qui décrit le phénomène.",
  },
  {
    title: "Modéliser ou expérimenter",
    text: "Mettre le problème en équations, ou le confronter à des mesures.",
  },
  {
    title: "Développer la solution",
    text: "Construire l'outil, la méthode ou le prototype, puis le rendre utilisable.",
  },
  {
    title: "Évaluer",
    text: "Mesurer ce que la solution apporte, et dire clairement où elle s'arrête.",
  },
] as const;

/** Où j'en suis : trois niveaux, à ne jamais confondre. */
export const position = [
  {
    label: "Acquis",
    title: "Ce que j'ai déjà démontré",
    text: "La chimie et le génie des procédés comme socle. La mesure, la validation de méthodes, la statistique et le développement d'outils, prouvés dans des projets réels.",
    href: "/projets/",
    cta: "Voir les projets",
  },
  {
    label: "En exploration",
    title: "Ce que j'apprends",
    text: "Physique appliquée, transferts, mécanique, simulation numérique, électronique et automatisation. Je les approfondis un à un, souvent à travers un projet.",
    href: "/competences/#exploration",
    cta: "Voir mes axes d'apprentissage",
  },
  {
    label: "Vision",
    title: "Où je veux aller",
    text: "Une culture scientifique assez large pour relier les disciplines et concevoir des technologies utiles, en énergie, matériaux, environnement et durabilité.",
    href: "/vision/",
    cta: "Lire ma vision",
  },
] as const;

/** Domaines d'application visés à long terme : des orientations, pas des réalisations. */
export const applicationFields = [
  {
    title: "Énergie",
    text: "Produire, convertir et stocker l'énergie plus efficacement. Mon stage au FabLab, sur un système qui tire de l'électricité des plantes, a été un premier contact.",
  },
  {
    title: "Matériaux",
    text: "Concevoir et contrôler des matériaux dont on maîtrise les propriétés. C'est le domaine de mon stage chez SCCI.",
  },
  {
    title: "Environnement",
    text: "Mesurer l'impact d'une activité pour pouvoir le réduire. Mon outil de bilan carbone en est une première application.",
  },
  {
    title: "Durabilité",
    text: "Faire durer les ressources, ce qui inclut la valorisation des déchets, une piste parmi d'autres.",
  },
] as const;
