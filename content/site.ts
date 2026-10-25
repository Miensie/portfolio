/**
 * Informations générales du site.
 * C'est le premier fichier à modifier pour mettre à jour vos coordonnées.
 */
export const site = {
  name: "Koffi Miensie Ezéchiel Amani",
  shortName: "Koffi Amani",
  initials: "KA",
  title: "Ingénieur en formation, chimie et génie des procédés",
  description:
    "Portfolio de Koffi Amani, ingénieur en formation à l'INP-HB. Une base en chimie et génie des procédés, des projets qui mêlent mesure, modélisation, données et logiciel, et une démarche tournée vers l'ingénierie interdisciplinaire.",
  location: "Abidjan, Côte d'Ivoire",
  email: "koffimiensie@gmail.com",
  github: "https://github.com/Miensie",
  /** Laisser vide tant que le profil n'existe pas : le lien est alors masqué. */
  linkedin: "",
  /** Fichier placé dans /public. S'il est absent, les boutons CV sont masqués automatiquement. */
  cvPath: "/cv/CV_Koffi_Amani.pdf",
  /** À ADAPTER : type de poste ou de mission recherché. */
  opportunities:
    "Je cherche un premier poste d'ingénieur où il faut comprendre un procédé, un matériau ou une mesure, le modéliser, puis construire la solution qui manque.",
  /** URL publique, définie par la variable d'environnement NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
} as const;

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/competences/", label: "Compétences" },
  { href: "/projets/", label: "Projets" },
  { href: "/vision/", label: "Vision" },
  { href: "/contact/", label: "Contact" },
] as const;

/** Pages présentes dans le pied de page et le sitemap, en plus de la navigation. */
export const secondaryPages = [{ href: "/solutions/", label: "Ce que j'apporte" }] as const;
