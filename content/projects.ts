import type { CategoryId, Project, ProjectStatus } from "@/lib/types";

/**
 * Tous les projets du portfolio.
 * ➜ Pour ajouter une réalisation : copier un objet existant, changer le `slug`
 *   (il devient l'URL /projets/<slug>/), et remplir les champs. Rien d'autre à modifier.
 *
 * Règle : ne décrire que ce qui est réellement implémenté et vérifiable.
 */

export const categories: Record<CategoryId, string> = {
  chimie: "Chimie et matériaux",
  chimiometrie: "Chimiométrie et données",
  ia: "IA et machine learning",
  automatisation: "Automatisation et Excel Add-ins",
  web: "Développement web",
};

export const statusLabels: Record<ProjectStatus, string> = {
  termine: "Terminé",
  "en-cours": "En cours",
  prototype: "Prototype",
};

const GH = "https://github.com/Miensie";

export const projects: Project[] = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "controle-qualite-ftir-melanges-maitres",
    title: "Contrôle qualité des mélanges-maîtres par FTIR-ATR",
    context: "Stage de fin d'études · SCCI",
    year: "2026",
    categories: ["chimie", "chimiometrie", "automatisation"],
    status: "termine",
    featured: true,
    summary:
      "Une méthode de quantification FTIR-ATR et un outil Excel VBA pour contrôler en routine la teneur en additifs des mélanges-maîtres.",
    problem:
      "Vérifier rapidement, et de façon traçable, la teneur en principes actifs des mélanges-maîtres additifs produits par l'entreprise.",
    solution:
      "Une méthode de quantification par spectroscopie FTIR-ATR pour chaque additif, et un outil Excel VBA qui choisit le modèle d'étalonnage, contrôle sa validité dans le temps et trace chaque résultat.",
    stack: ["FTIR-ATR", "Excel VBA", "UserForms", "Régression pondérée", "Profil d'exactitude"],
    notice:
      "Projet industriel : aucune formulation, donnée brute ni information interne de l'entreprise n'est publiée ici. Les éléments présentés décrivent la démarche et l'outil.",
    objectives: [
      "Quantifier chaque additif à partir de son spectre infrarouge.",
      "Valider la méthode selon une approche reconnue (profil d'exactitude).",
      "Donner au laboratoire un outil de contrôle en routine utilisable sans programmation.",
      "Assurer la traçabilité des étalonnages et des contrôles.",
    ],
    role:
      "Projet de fin d'études mené de bout en bout : préparation des échantillons d'étalonnage, acquisition des spectres, choix des bandes et des modèles, validation statistique, puis conception et développement de l'outil de contrôle.",
    approach: [
      {
        title: "Étalonnage",
        text: "Préparation d'échantillons de concentration connue et acquisition de plusieurs spectres par niveau, afin d'estimer la dispersion de la mesure à chaque concentration.",
      },
      {
        title: "Mesure spectrale",
        text: "Quantification univariée sur une bande caractéristique de chaque additif, par hauteur ou aire de pic.",
      },
      {
        title: "Modélisation",
        text: "Régression d'étalonnage pondérée (poids égal à l'inverse de la variance de chaque niveau) et comparaison de plusieurs formes de modèles.",
      },
      {
        title: "Validation",
        text: "Profil d'exactitude : biais, fidélité et intervalles de tolérance, comparés à des limites d'acceptation fixées à l'avance.",
      },
      {
        title: "Outillage",
        text: "Développement de l'outil de contrôle en routine en Excel VBA, pour que le laboratoire applique la méthode sans recalcul manuel.",
      },
    ],
    architecture: [
      "Classeur Excel organisé en feuilles spécialisées : données, étalonnage, contrôle, historique.",
      "Sélection automatique du modèle d'étalonnage (linéaire, logarithmique, exponentiel, puissance) d'après le R² et le RMSE.",
      "Contrôle périodique du modèle sur un matériau de référence.",
      "Journal de traçabilité des étalonnages et des résultats.",
      "Interface par formulaires VBA (UserForms) et modules spécialisés.",
    ],
    results: [
      "Une méthode de quantification par additif, documentée dans le mémoire de fin d'études.",
      "Un outil de contrôle en routine qui remplace des calculs manuels par une procédure guidée et traçable.",
    ],
    limits: [
      "Les modèles sont propres à l'instrument, à l'accessoire ATR et aux produits étudiés.",
      "L'approche univariée suppose une bande sans interférence notable pour chaque additif.",
      "La soutenance du mémoire est prévue en décembre 2026 : les conclusions détaillées ne sont pas encore publiques.",
    ],
    nextSteps: [
      "Étendre le suivi dans le temps avec des cartes de contrôle sur le matériau de référence.",
      "Évaluer des modèles multivariés (PLS) pour les additifs dont les bandes se recouvrent.",
    ],
    links: [],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "profil-exactitude",
    title: "Validation de méthodes par profil d'exactitude",
    context: "Stage de 2ᵉ année (à distance), puis projet personnel",
    year: "2025 – 2026",
    categories: ["chimiometrie", "automatisation"],
    status: "termine",
    featured: true,
    summary:
      "Des macros Excel VBA, puis un complément Excel web, qui construisent le profil d'exactitude d'une méthode analytique.",
    problem:
      "Construire à la main le profil d'exactitude d'une méthode analytique est long, répétitif et expose à des erreurs de calcul.",
    solution:
      "Des macros Excel VBA qui calculent biais, fidélité intermédiaire et intervalles de tolérance, et tracent le profil. L'outil a ensuite été repris sous forme de complément Excel web avec un moteur de calcul Python.",
    stack: ["Excel VBA", "ISO 5725-2", "Office.js", "Python", "FastAPI"],
    objectives: [
      "Automatiser le calcul complet du profil d'exactitude à partir d'un plan de validation.",
      "Produire un graphique et des conclusions directement exploitables.",
      "Réduire le risque d'erreur par rapport à un calcul manuel.",
    ],
    role:
      "Projet demandé par un enseignant comme mise en pratique d'un cours de validation de méthodes. J'ai développé l'outil et ajouté, au-delà du cahier des charges, le RMSE, le test d'inadéquation du modèle (lack of fit) et trois modèles d'étalonnage supplémentaires. J'ai ensuite conçu seul la version complément web.",
    approach: [
      {
        title: "Plan de validation",
        text: "Lecture des séries (jours), répétitions et niveaux de concentration saisis dans Excel.",
      },
      {
        title: "Étalonnage",
        text: "Ajustement des modèles d'étalonnage par série et calcul des concentrations retrouvées.",
      },
      {
        title: "Statistiques",
        text: "Décomposition de la variance selon ISO 5725-2 (répétabilité, fidélité intermédiaire), biais et intervalles de tolérance β-expectation selon Mee (1984).",
      },
      {
        title: "Décision",
        text: "Comparaison des intervalles de tolérance aux limites d'acceptation et tracé du profil d'exactitude.",
      },
    ],
    architecture: [
      "Version VBA : macros et feuilles de calcul structurées, sortie graphique dans Excel.",
      "Version web : complément Excel (Office.js) relié à une API Python FastAPI.",
      "API : profil complet, test de Grubbs, modèles d'étalonnage seuls, contrôle de conformité (ISO, ICH Q2, SFSTP), génération de rapport PDF.",
      "Interprétation des résultats par un moteur de règles, avec option d'assistance par un modèle de langage.",
    ],
    results: [
      "Un profil d'exactitude complet obtenu en quelques clics à partir d'un plan de validation saisi dans Excel.",
      "Des ajouts personnels (RMSE, lack of fit, modèles supplémentaires) qui aident à choisir le modèle d'étalonnage.",
    ],
    limits: [
      "La version web dépend d'un serveur Python : sans lui, le complément ne peut pas calculer.",
      "Les résultats doivent être confrontés à un calcul de référence avant tout usage réglementaire.",
    ],
    nextSteps: [
      "Publier un jeu de données de démonstration et des captures annotées.",
      "Ajouter une comparaison automatique avec un logiciel de référence sur des cas publiés.",
    ],
    links: [{ label: "Code du complément web", href: `${GH}/accuracy`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "prediction-temps-retention",
    title: "Prédiction du temps de rétention chromatographique",
    context: "Projet personnel",
    year: "2025",
    categories: ["ia", "chimiometrie"],
    status: "termine",
    featured: true,
    summary:
      "Un modèle XGBoost entraîné sur ~80 000 molécules du jeu METLIN SMRT prédit le temps de rétention à partir de la structure (SMILES).",
    problem:
      "En chromatographie liquide couplée à la spectrométrie de masse, connaître le temps de rétention attendu d'une molécule aide à confirmer ou écarter une identification.",
    solution:
      "Des descripteurs moléculaires calculés avec RDKit à partir du SMILES, un modèle XGBoost optimisé par validation croisée, et une application de bureau Flet pour prédire une molécule en quelques secondes.",
    stack: ["Python", "RDKit", "XGBoost", "Optuna", "scikit-learn", "Flet"],
    objectives: [
      "Prédire le temps de rétention d'une petite molécule à partir de sa seule structure.",
      "Mesurer honnêtement l'erreur sur des molécules jamais vues par le modèle.",
      "Rendre la prédiction accessible sans écrire de code.",
    ],
    role: "Projet personnel réalisé seul : préparation des données, modélisation, évaluation et application.",
    approach: [
      {
        title: "Données",
        text: "Jeu public METLIN SMRT (Domingo-Almenara et al., Nature Communications, 2019) : environ 80 000 molécules mesurées sur un même système chromatographique en phase inverse.",
      },
      {
        title: "Descripteurs",
        text: "Calcul de descripteurs RDKit (masse, logP, surfaces polaires, indices topologiques…), suppression des descripteurs quasi constants, puis sélection des 50 plus liés au temps de rétention.",
      },
      {
        title: "Modèle",
        text: "XGBoost, hyperparamètres recherchés avec Optuna en validation croisée à 5 plis et arrêt précoce ; données standardisées par un RobustScaler.",
      },
      {
        title: "Évaluation",
        text: "Découpage aléatoire 80 / 20 : le modèle est évalué sur 15 516 molécules mises de côté avant l'entraînement.",
      },
    ],
    architecture: [
      "Pipeline Python : SMILES → descripteurs RDKit → sélection → standardisation → XGBoost.",
      "Modèle, standardisation et liste des descripteurs sauvegardés pour être rechargés par l'application.",
      "Application Flet : saisie d'un SMILES, exemples de molécules, import d'un fichier CSV, graphiques d'évaluation.",
    ],
    results: [
      "Sur le jeu de test, la moitié des prédictions sont à moins de 32 s du temps mesuré, et 74 % à moins d'une minute.",
      "Les métriques ci-dessus ont été recalculées à partir des prédictions enregistrées dans le dépôt.",
    ],
    metrics: [
      { value: "0,81", label: "R² (jeu de test)" },
      { value: "48,6 s", label: "Erreur absolue moyenne" },
      { value: "74,0 s", label: "RMSE" },
      { value: "6,1 %", label: "Erreur relative moyenne" },
    ],
    figures: [
      {
        src: "/images/projets/retention-predit-vs-observe.png",
        alt: "À gauche, nuage de densité des temps prédits en fonction des temps observés, regroupés autour de la diagonale entre 9 et 22 minutes. À droite, histogramme des erreurs centré sur zéro, la plupart comprises entre moins 100 et plus 100 secondes.",
        caption:
          "Résultats réels sur les 15 516 molécules de test : prédit vs observé (gauche) et distribution des erreurs (droite).",
        width: 1800,
        height: 780,
      },
    ],
    limits: [
      "Valable pour le système chromatographique du jeu METLIN uniquement : un autre laboratoire, une autre colonne ou un autre gradient donnent d'autres temps.",
      "Les molécules aux temps extrêmes (|z| ≥ 3), dont les composés non retenus, ont été retirées avant l'entraînement : le modèle n'est pas évalué sur elles (temps testés de 7 à 22 min).",
      "La sélection des descripteurs a été faite avant le découpage entraînement / test, ce qui peut rendre l'évaluation légèrement optimiste.",
      "Un découpage aléatoire place des molécules très proches dans l'entraînement et le test ; un découpage par familles structurales serait plus exigeant.",
    ],
    nextSteps: [
      "Refaire la sélection des descripteurs à l'intérieur de la validation croisée.",
      "Évaluer sur un découpage par squelette moléculaire.",
      "Adapter le modèle au système d'un laboratoire par apprentissage par transfert sur quelques dizaines de standards.",
    ],
    links: [
      { label: "Code du projet", href: `${GH}/Prediction_TR_HPLC`, kind: "code" },
      {
        label: "Article METLIN SMRT (Nature Communications, 2019)",
        href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6925099/",
        kind: "source",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "chemai-chimiometrie-excel",
    title: "ChemAI — chimiométrie multivariée dans Excel",
    context: "Projet personnel · complément Excel",
    year: "2026",
    categories: ["chimiometrie", "automatisation"],
    status: "termine",
    featured: true,
    summary:
      "Un complément Excel qui apporte ACP, PLS, classification et détection d'anomalies directement dans le classeur, sans serveur.",
    problem:
      "Les analyses multivariées (ACP, PLS, détection d'échantillons atypiques) demandent souvent un logiciel spécialisé, alors que les données de laboratoire sont déjà dans Excel.",
    solution:
      "Un complément Excel dont les algorithmes tournent dans le navigateur, avec un mode serveur Python facultatif pour les méthodes plus lourdes.",
    stack: ["JavaScript", "Office.js", "Algèbre linéaire", "Python (optionnel)"],
    objectives: [
      "Analyser un tableau de données Excel sans le copier dans un autre logiciel.",
      "Implémenter les méthodes de base de la chimiométrie de façon transparente.",
      "Repérer les échantillons atypiques avec des critères statistiques explicites.",
    ],
    role: "Conception et développement complets.",
    approach: [
      {
        title: "Prétraitement",
        text: "Centrage et réduction des variables, statistiques descriptives.",
      },
      {
        title: "Analyses",
        text: "ACP par décomposition en valeurs singulières, régression PLS-1 (algorithme NIPALS), K-Means++ et classification hiérarchique (Ward, lien complet, lien moyen).",
      },
      {
        title: "Anomalies",
        text: "Distance de Mahalanobis, T² de Hotelling et résidus Q (Jackson-Mudholkar).",
      },
      {
        title: "Restitution",
        text: "Graphiques, écriture des résultats dans le classeur et rapport.",
      },
    ],
    architecture: [
      "Volet latéral Office.js : interface, graphiques, échanges avec le classeur.",
      "Bibliothèque mathématique écrite en JavaScript (matrices, SVD, inverse) : aucun serveur requis.",
      "Serveur Python facultatif pour Isolation Forest, LOF, SVM et forêts aléatoires.",
      "Assistant d'interprétation optionnel par l'API Gemini (clé fournie par l'utilisateur).",
    ],
    results: [
      "Toutes les analyses principales fonctionnent hors ligne, dans Excel.",
      "Une page de présentation est en ligne sur GitHub Pages.",
    ],
    limits: [
      "Les résultats n'ont pas encore été comparés systématiquement à un logiciel de référence.",
      "Les calculs dans le navigateur conviennent à des tableaux de taille modeste.",
    ],
    nextSteps: [
      "Valider les sorties ACP/PLS sur des jeux de données publiés.",
      "Ajouter les prétraitements spectraux (SNV, dérivées de Savitzky-Golay).",
    ],
    links: [
      { label: "Page de présentation", href: "https://miensie.github.io/ChemIA/", kind: "demo" },
      { label: "Code", href: `${GH}/ChemIA`, kind: "code" },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "doe-ai-plans-experiences",
    title: "DOE·AI — plans d'expériences dans Excel",
    context: "Projet personnel · complément Excel",
    year: "2026",
    categories: ["chimiometrie", "automatisation"],
    status: "termine",
    summary:
      "Un complément Excel pour générer des plans d'expériences, analyser les résultats et chercher les conditions optimales.",
    problem:
      "Planifier et analyser des essais (optimisation d'un procédé, d'une formulation) nécessite généralement un logiciel statistique dédié et payant.",
    solution:
      "Un complément Excel qui génère le plan, ajuste le modèle, présente l'ANOVA, les effets et la surface de réponse, puis propose les conditions optimales.",
    stack: ["JavaScript", "Office.js", "Statistiques", "Python", "FastAPI"],
    objectives: [
      "Générer les plans d'expériences classiques à partir des facteurs et de leurs niveaux.",
      "Analyser les réponses mesurées dans le même classeur.",
      "Identifier les conditions qui atteignent un objectif.",
    ],
    role: "Conception et développement complets.",
    approach: [
      {
        title: "Plans",
        text: "Factoriels complets et fractionnaires, plans composites centrés, Box-Behnken, points au centre, facteurs qualitatifs.",
      },
      {
        title: "Modèle",
        text: "Régression par moindres carrés avec interactions et termes quadratiques, ANOVA avec valeurs p.",
      },
      {
        title: "Lecture",
        text: "Effets principaux, courbes d'effet et surface de réponse pour chaque paire de facteurs.",
      },
      {
        title: "Optimisation",
        text: "Recherche des conditions qui maximisent, minimisent ou atteignent une valeur cible.",
      },
    ],
    architecture: [
      "Moteur de calcul en JavaScript (génération, régression, ANOVA, optimisation).",
      "Module d'écriture dans Excel, graphiques et rapport.",
      "Petit serveur Python FastAPI pour l'analyse côté serveur.",
      "Assistant d'interprétation optionnel par l'API Gemini.",
    ],
    results: ["Un cycle complet « planifier → analyser → optimiser » dans un seul classeur Excel."],
    limits: [
      "Les résultats doivent être confrontés à un logiciel de référence avant usage critique.",
      "Les plans de mélange et les plans optimaux (D-optimaux) ne sont pas encore couverts.",
    ],
    nextSteps: ["Ajouter les plans de mélange, utiles en formulation.", "Valider sur des exemples de la littérature."],
    links: [{ label: "Code", href: `${GH}/doe`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "qhse-analyzer-pro",
    title: "QHSE Analyzer Pro — outils qualité dans Excel",
    context: "Projet personnel · complément Excel",
    year: "2026",
    categories: ["automatisation"],
    status: "termine",
    summary:
      "Un complément Excel qui regroupe Pareto, Ishikawa, AMDEC, cartes de contrôle et indices de capabilité.",
    problem:
      "Les outils de la qualité sont souvent refaits à la main dans des feuilles Excel différentes, avec des formules à recopier à chaque analyse.",
    solution:
      "Un complément unique qui lit les données du classeur et produit les analyses qualité standard, avec un rapport dans Excel.",
    stack: ["JavaScript", "Office.js", "Webpack", "SPC"],
    objectives: [
      "Rassembler les outils qualité courants dans une interface unique.",
      "Appliquer automatiquement les règles de détection des cartes de contrôle.",
    ],
    role: "Conception et développement complets.",
    approach: [
      { title: "Pareto", text: "Analyse 80/20 et classement ABC des causes." },
      { title: "Ishikawa", text: "Diagramme causes-effets selon les 6M, avec suggestions optionnelles par IA." },
      { title: "AMDEC", text: "Calcul de l'indice de priorité de risque et hiérarchisation." },
      {
        title: "Maîtrise statistique",
        text: "Cartes X̄-R, I-MR, p et c avec les 8 règles de Nelson ; indices Cp et Cpk ; taux de non-conformité.",
      },
    ],
    architecture: [
      "Volet latéral Office.js construit avec Webpack.",
      "Modules séparés : lecture/écriture Excel, statistiques, cartes de contrôle, IA.",
      "Assistant optionnel par l'API Gemini (clé fournie par l'utilisateur).",
    ],
    results: ["Les analyses qualité courantes produites à partir d'un même tableau de données."],
    limits: ["Pas encore testé en conditions de production.", "Les suggestions de l'IA sont indicatives et doivent être vérifiées par un humain."],
    nextSteps: ["Ajouter un journal des analyses pour la traçabilité.", "Tester l'outil sur des données réelles d'atelier."],
    links: [{ label: "Code", href: `${GH}/QHSE`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "esg-analyzer-pro",
    title: "ESG Analyzer Pro — bilan carbone dans Excel",
    context: "Projet personnel · complément Excel",
    year: "2026",
    categories: ["automatisation"],
    status: "termine",
    summary:
      "Un complément Excel qui calcule un bilan carbone (scopes 1, 2 et 3) à partir des données d'activité saisies dans le classeur.",
    problem:
      "Établir un bilan carbone demande de rapprocher des données d'activité dispersées et des facteurs d'émission, souvent à la main.",
    solution:
      "Un complément qui crée les feuilles de collecte, applique les facteurs d'émission, calcule le bilan par scope et génère un tableau de bord et un rapport.",
    stack: ["JavaScript", "Office.js", "Node.js", "GHG Protocol"],
    objectives: [
      "Structurer la collecte des données d'énergie, de transport et de déchets.",
      "Calculer les émissions par scope selon le GHG Protocol.",
      "Produire un tableau de bord Excel natif et un rapport.",
    ],
    role: "Conception et développement complets.",
    approach: [
      { title: "Collecte", text: "Création automatique des feuilles Énergie, Transport, Déchets et Configuration." },
      { title: "Calcul", text: "Application de facteurs d'émission inspirés de la Base Carbone de l'ADEME, regroupement par scope." },
      { title: "Restitution", text: "Indicateurs, graphiques Excel natifs, détection d'anomalies et rapport HTML imprimable." },
    ],
    architecture: [
      "Volet latéral Office.js : orchestrateur, lecture/écriture Excel, calcul, rapport.",
      "Serveur Node.js facultatif pour le développement local.",
      "Recommandations optionnelles par l'API Gemini.",
    ],
    results: ["Un bilan carbone par scope produit à partir des feuilles de collecte du classeur."],
    limits: [
      "Les facteurs d'émission doivent être vérifiés et mis à jour par rapport à la source officielle avant tout usage.",
      "Un bilan réglementaire exige une méthodologie et une vérification qui dépassent l'outil.",
    ],
    nextSteps: ["Documenter précisément la source et la version de chaque facteur d'émission."],
    links: [{ label: "Code", href: `${GH}/ESG`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "physioai-lab",
    title: "PhysioAI Lab — modélisation physico-chimique",
    context: "Projet personnel · complément Excel",
    year: "2026",
    categories: ["ia", "chimie", "automatisation"],
    status: "termine",
    summary:
      "Un complément Excel relié à une API Python pour ajuster des modèles de régression, physico-chimiques et d'apprentissage automatique.",
    problem:
      "Ajuster des modèles cinétiques ou de génie des procédés sur des données expérimentales demande des outils de calcul que la plupart des utilisateurs d'Excel n'ont pas.",
    solution:
      "Un volet Excel qui envoie les données à une API Python : régressions, modèles physiques, apprentissage automatique et calibration de paramètres.",
    stack: ["Python", "FastAPI", "scikit-learn", "PyTorch", "SciPy", "Office.js"],
    objectives: [
      "Comparer plusieurs modèles sur les mêmes données.",
      "Ajuster les paramètres de modèles physiques à partir de mesures.",
    ],
    role: "Conception et développement complets.",
    approach: [
      { title: "Régression", text: "Sept formes de régression avec sélection automatique." },
      { title: "Modèles physiques", text: "Cinétique chimique, réacteur agité continu, diffusion (loi de Fick), refroidissement (loi de Newton)." },
      { title: "Apprentissage", text: "Forêts aléatoires, SVR, K-Means, réseau de neurones (PyTorch) et modèle hybride." },
      { title: "Calibration", text: "Estimation de paramètres d'équations différentielles par minimisation." },
    ],
    architecture: [
      "API FastAPI organisée par domaine : régression, analyse, modèles physiques, IA, simulation.",
      "Volet latéral Office.js avec graphiques.",
      "Conteneur Docker pour le déploiement de l'API.",
    ],
    results: ["Une même interface pour comparer approche empirique, modèle physique et apprentissage automatique."],
    limits: ["Nécessite que l'API Python soit en ligne.", "Modèles non encore validés sur des cas industriels."],
    nextSteps: ["Ajouter des jeux de données d'exemple documentés et leurs résultats attendus."],
    links: [{ label: "Code", href: `${GH}/PhysioAI`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "formulation-studio",
    title: "FormulationStudio — logiciel web de formulation",
    context: "Projet personnel · application web",
    year: "2026",
    categories: ["web", "chimie"],
    status: "en-cours",
    summary:
      "Une application web de formulation chimique en construction : base de matières premières, éditeur de formulation, puis optimisation.",
    problem:
      "En formulation, les matières premières, les recettes, les bilans matière et les essais sont souvent éparpillés dans des fichiers séparés.",
    solution:
      "Une application web qui centralise les matières premières et les formulations, avec à terme bilans matière, contraintes, optimisation et apprentissage automatique.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    objectives: [
      "Construire une base fiable de matières premières et de leurs propriétés.",
      "Rédiger et calculer des formulations avec un système d'unités rigoureux.",
    ],
    role: "Conception de l'architecture et développement.",
    approach: [
      { title: "Fondations", text: "Squelette complet : API, base de données, migrations, interface, intégration et déploiement continus." },
      { title: "Unités", text: "Moteur de conversion d'unités qui refuse les conversions entre grandeurs physiques différentes." },
      { title: "Feuille de route", text: "Matériaux, éditeur de formulation, contraintes, optimisation, essais, IA et rapports, par phases successives." },
    ],
    architecture: [
      "Interface Next.js exportée en statique (GitHub Pages).",
      "API FastAPI déployée sur Render.",
      "SQLite en développement, PostgreSQL (Supabase) en production, migrations Alembic.",
    ],
    results: ["Phase 0 terminée : la chaîne complète (base, API, interface, déploiement) fonctionne."],
    limits: ["En cours de développement : les modules métier (éditeur, optimisation) restent à livrer."],
    nextSteps: ["Livrer le module Matériaux puis l'éditeur de formulation avec bilan matière."],
    links: [{ label: "Code", href: `${GH}/FormulationAI`, kind: "code" }],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
