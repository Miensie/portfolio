/**
 * Informations générales du site.
 * ➜ C'est le premier fichier à modifier pour mettre à jour vos coordonnées.
 */
export const site = {
  name: "Koffi Miensie Ezéchiel Amani",
  shortName: "Koffi Amani",
  initials: "KA",
  title: "Élève-ingénieur en chimie analytique et chimiométrie",
  description:
    "Portfolio de Koffi Amani, élève-ingénieur en chimie analytique, matériaux et polymères (INP-HB) : validation de méthodes, chimiométrie, machine learning et outils Excel / web pour le laboratoire et l'industrie.",
  location: "Abidjan, Côte d'Ivoire",
  email: "koffimiensie@gmail.com",
  github: "https://github.com/Miensie",
  /** Laisser une chaîne vide tant que le profil n'existe pas : le lien est alors masqué. */
  linkedin: "",
  /** Fichier placé dans /public. S'il est absent, les boutons CV sont masqués automatiquement. */
  cvPath: "/cv/CV_Koffi_Amani.pdf",
  /** À ADAPTER : type de poste ou de mission recherché. */
  opportunities:
    "Premier poste d'ingénieur en chimie analytique, contrôle qualité ou R&D, en particulier là où la mesure, les données et l'automatisation se rencontrent.",
  /** URL publique — définie par la variable d'environnement NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/competences/", label: "Compétences" },
  { href: "/projets/", label: "Projets" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/contact/", label: "Contact" },
] as const;
