import type { DomainId, ProblemId, Project, ProjectStatus } from "@/lib/types";

/**
 * Tous les projets du portfolio.
 * Pour ajouter une réalisation : copier un objet existant, changer le `slug`
 * (il devient l'URL /projets/<slug>/) et remplir les champs. Rien d'autre à modifier.
 *
 * Règle : ne décrire que ce qui est réellement fait et vérifiable.
 */

export const problems: Record<ProblemId, string> = {
  mesurer: "Mesurer et contrôler",
  fiabiliser: "Valider et fiabiliser",
  modeliser: "Modéliser et prédire",
  optimiser: "Planifier et optimiser",
  outiller: "Automatiser et outiller",
};

export const domains: Record<DomainId, string> = {
  materiaux: "Matériaux et polymères",
  analyse: "Analyse chimique",
  procedes: "Procédés",
  qualite: "Qualité industrielle",
  environnement: "Environnement et durabilité",
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
    slug: "controle-qualite-melanges-maitres",
    title: "Contrôle qualité des mélanges-maîtres additifs",
    shortTitle: "Contrôle qualité des mélanges-maîtres",
    context: "Stage de fin d'études, SCCI",
    year: "2026",
    problems: ["mesurer", "fiabiliser", "outiller"],
    domains: ["materiaux", "analyse", "qualite"],
    status: "termine",
    featured: true,
    summary:
      "Une méthode d'analyse et un outil de contrôle pour vérifier en routine la qualité des mélanges-maîtres additifs.",
    problem:
      "L'entreprise avait besoin d'un moyen fiable et rapide pour vérifier la teneur en additifs des mélanges-maîtres qu'elle produit.",
    solution:
      "J'ai mis en place une méthode d'analyse adaptée à ces produits, puis un outil simple qui permet au laboratoire de l'appliquer au quotidien et de garder la trace des résultats.",
    stack: ["Contrôle qualité", "Validation de méthode", "Excel VBA"],
    notice:
      "Projet industriel : la méthode, les produits et les résultats restent confidentiels. Cette page présente seulement le sens général du travail.",
    objectives: [
      "Disposer d'une méthode d'analyse fiable pour les additifs.",
      "Vérifier que cette méthode est apte à l'usage prévu.",
      "Donner au laboratoire un outil de contrôle facile à utiliser.",
    ],
    role:
      "C'est mon projet de fin d'études. Je l'ai mené de la préparation des essais jusqu'à la livraison de l'outil au laboratoire.",
    knowledge: [
      "Chimie analytique et caractérisation des matériaux polymères.",
      "Statistique appliquée à la validation des méthodes.",
      "Programmation et conception d'outils pour des utilisateurs non informaticiens.",
    ],
    approach: [
      {
        title: "Mise au point",
        text: "Préparation d'échantillons de référence et réglage de la méthode d'analyse.",
      },
      {
        title: "Validation",
        text: "Vérification statistique que la méthode donne des résultats justes et reproductibles.",
      },
    ],
    architecture: [
      "Un outil Excel VBA qui guide l'utilisateur pas à pas.",
      "Un suivi dans le temps et un historique des résultats.",
    ],
    results: [
      "Une méthode de contrôle documentée dans mon mémoire de fin d'études.",
      "Un outil qui remplace des calculs manuels par une procédure guidée et traçable.",
    ],
    limits: ["La méthode est propre aux produits et à l'équipement de l'entreprise."],
    nextSteps: ["Étendre le suivi à d'autres produits de la gamme."],
    links: [],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "profil-exactitude",
    title: "Validation de méthodes par profil d'exactitude",
    shortTitle: "Profil d'exactitude",
    context: "Stage de 2ᵉ année à distance, puis projet personnel",
    year: "2025-2026",
    problems: ["fiabiliser", "outiller"],
    domains: ["analyse", "qualite"],
    status: "termine",
    featured: true,
    summary:
      "Des macros Excel VBA, puis un complément Excel web, qui construisent le profil d'exactitude d'une méthode d'analyse.",
    problem:
      "Construire à la main le profil d'exactitude d'une méthode d'analyse prend du temps, se répète d'une méthode à l'autre et laisse passer des erreurs de calcul.",
    solution:
      "J'ai écrit des macros Excel VBA qui calculent le biais, la fidélité intermédiaire et les intervalles de tolérance, puis tracent le profil. J'ai ensuite repris l'outil sous forme de complément Excel web, avec un moteur de calcul en Python.",
    stack: ["Excel VBA", "ISO 5725-2", "Office.js", "Python", "FastAPI"],
    objectives: [
      "Calculer tout le profil d'exactitude à partir d'un plan de validation saisi dans Excel.",
      "Produire directement le graphique et les conclusions.",
      "Limiter les erreurs par rapport au calcul manuel.",
    ],
    role:
      "Un de mes enseignants m'a demandé ce projet pour mettre en pratique son cours de validation de méthodes. J'ai développé l'outil et j'y ai ajouté, au-delà de ce qui était demandé, le RMSE, le test d'inadéquation du modèle (lack of fit) et trois modèles d'étalonnage supplémentaires. J'ai ensuite conçu seul la version web.",
    knowledge: [
      "Statistique : analyse de variance et décomposition en répétabilité et fidélité intermédiaire (ISO 5725-2).",
      "Intervalles de tolérance de type β-expectation (Mee, 1984).",
      "Critères de conformité des référentiels de validation (ISO, ICH Q2, SFSTP).",
      "Programmation VBA, puis architecture client et API en Python.",
    ],
    approach: [
      {
        title: "Plan de validation",
        text: "L'outil lit les séries (les jours), les répétitions et les niveaux de concentration saisis dans Excel.",
      },
      {
        title: "Étalonnage",
        text: "Il ajuste un modèle d'étalonnage par série, puis calcule les concentrations retrouvées.",
      },
      {
        title: "Statistiques",
        text: "Il sépare les sources de variance, calcule le biais et construit les intervalles de tolérance à chaque niveau.",
      },
      {
        title: "Décision",
        text: "Il compare ces intervalles aux limites d'acceptation et trace le profil d'exactitude.",
      },
    ],
    architecture: [
      "Version VBA : macros et feuilles structurées, avec la sortie graphique dans Excel.",
      "Version web : un complément Excel (Office.js) relié à une API Python FastAPI.",
      "L'API calcule le profil complet, le test de Grubbs, les modèles d'étalonnage, la conformité aux référentiels et génère un rapport PDF.",
      "Un moteur de règles aide à interpréter les résultats, avec en option l'assistance d'un modèle de langage.",
    ],
    results: [
      "Un profil d'exactitude complet en quelques clics à partir d'un plan de validation saisi dans Excel.",
      "Le RMSE, le lack of fit et les modèles supplémentaires aident à choisir le bon modèle d'étalonnage.",
    ],
    limits: [
      "La version web dépend d'un serveur Python : sans lui, le complément ne calcule rien.",
      "Avant tout usage réglementaire, les résultats doivent être confrontés à un calcul de référence.",
    ],
    nextSteps: [
      "Publier un jeu de données de démonstration et des captures annotées.",
      "Comparer automatiquement les résultats à des cas publiés.",
    ],
    links: [{ label: "Code du complément web", href: `${GH}/accuracy`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "prediction-temps-retention",
    title: "Prédire le temps de rétention en chromatographie",
    shortTitle: "Temps de rétention",
    context: "Projet personnel",
    year: "2025",
    problems: ["modeliser"],
    domains: ["analyse"],
    status: "termine",
    featured: true,
    summary:
      "Un modèle XGBoost entraîné sur environ 80 000 molécules du jeu METLIN SMRT prédit le temps de rétention à partir de la seule structure (SMILES).",
    problem:
      "En chromatographie liquide couplée à la spectrométrie de masse, connaître le temps de rétention attendu d'une molécule aide à confirmer ou à écarter une identification.",
    solution:
      "Je calcule des descripteurs moléculaires avec RDKit à partir du SMILES, je les donne à un modèle XGBoost optimisé par validation croisée, et une application de bureau Flet rend la prédiction accessible en quelques secondes.",
    stack: ["Python", "RDKit", "XGBoost", "Optuna", "scikit-learn", "Flet"],
    objectives: [
      "Prédire le temps de rétention d'une petite molécule à partir de sa structure.",
      "Mesurer honnêtement l'erreur sur des molécules que le modèle n'a jamais vues.",
      "Rendre la prédiction utilisable sans écrire de code.",
    ],
    role: "Projet personnel réalisé seul : préparation des données, modélisation, évaluation et application.",
    knowledge: [
      "Chromatographie en phase inverse : la rétention dépend surtout de l'hydrophobie et de la polarité de la molécule.",
      "Chémoinformatique : représentation SMILES et descripteurs moléculaires.",
      "Apprentissage supervisé : gradient boosting, sélection de variables, validation croisée.",
      "Évaluation d'un modèle : choix des métriques et des jeux de test.",
    ],
    approach: [
      {
        title: "Données",
        text: "Le jeu public METLIN SMRT (Domingo-Almenara et al., Nature Communications, 2019) réunit environ 80 000 molécules mesurées sur un même système chromatographique en phase inverse.",
      },
      {
        title: "Descripteurs",
        text: "Je calcule les descripteurs RDKit (masse, logP, surfaces polaires, indices topologiques), j'écarte ceux qui ne varient presque pas, puis je garde les 50 plus liés au temps de rétention.",
      },
      {
        title: "Modèle",
        text: "XGBoost, avec des hyperparamètres recherchés par Optuna en validation croisée à 5 plis et arrêt précoce. Les données sont standardisées par un RobustScaler.",
      },
      {
        title: "Évaluation",
        text: "Le découpage est aléatoire, 80 % pour l'entraînement et 20 % pour le test : le modèle est jugé sur 15 516 molécules mises de côté au départ.",
      },
    ],
    architecture: [
      "Une chaîne Python : SMILES, descripteurs RDKit, sélection, standardisation, puis XGBoost.",
      "Le modèle, la standardisation et la liste des descripteurs sont sauvegardés pour être rechargés par l'application.",
      "L'application Flet permet de saisir un SMILES, de tester des exemples, d'importer un fichier CSV et d'afficher les graphiques d'évaluation.",
    ],
    results: [
      "Sur le jeu de test, la moitié des prédictions tombent à moins de 32 s du temps mesuré, et 74 % à moins d'une minute.",
      "J'ai recalculé les métriques ci-dessus à partir des prédictions enregistrées dans le dépôt.",
    ],
    metrics: [
      { value: "0,81", label: "R² sur le jeu de test" },
      { value: "48,6 s", label: "Erreur absolue moyenne" },
      { value: "74,0 s", label: "RMSE" },
      { value: "6,1 %", label: "Erreur relative moyenne" },
    ],
    figures: [
      {
        src: "/images/projets/retention-predit-vs-observe.png",
        alt: "À gauche, nuage de densité des temps prédits en fonction des temps observés, regroupés autour de la diagonale entre 9 et 22 minutes. À droite, histogramme des erreurs centré sur zéro, la plupart comprises entre moins 100 et plus 100 secondes.",
        caption:
          "Résultats réels sur les 15 516 molécules de test : temps prédit en fonction du temps observé (à gauche) et répartition des erreurs (à droite).",
        width: 1800,
        height: 780,
      },
    ],
    limits: [
      "Le modèle ne vaut que pour le système chromatographique du jeu METLIN. Une autre colonne, un autre gradient ou un autre laboratoire donnent d'autres temps.",
      "Les molécules aux temps extrêmes (|z| ≥ 3), dont les composés non retenus, ont été retirées avant l'entraînement. Le modèle n'est donc pas évalué sur elles : les temps testés vont de 7 à 22 min.",
      "J'ai sélectionné les descripteurs avant de séparer entraînement et test, ce qui peut rendre l'évaluation un peu optimiste.",
      "Avec un découpage aléatoire, des molécules très proches se retrouvent des deux côtés. Un découpage par familles structurales serait plus exigeant.",
    ],
    nextSteps: [
      "Faire la sélection des descripteurs à l'intérieur de la validation croisée.",
      "Évaluer le modèle avec un découpage par squelette moléculaire.",
      "Adapter le modèle au système d'un laboratoire par apprentissage par transfert, à partir de quelques dizaines de standards.",
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
    slug: "physioai-lab",
    title: "PhysioAI Lab, modélisation physico-chimique",
    shortTitle: "PhysioAI Lab",
    context: "Projet personnel, complément Excel",
    year: "2026",
    problems: ["modeliser", "optimiser"],
    domains: ["procedes"],
    status: "termine",
    featured: true,
    summary:
      "Un complément Excel relié à une API Python pour ajuster sur des mesures des modèles empiriques, des modèles physiques et des modèles d'apprentissage automatique.",
    problem:
      "Ajuster un modèle cinétique ou un modèle de génie des procédés sur des données expérimentales demande des outils de calcul que la plupart des utilisateurs d'Excel n'ont pas sous la main.",
    solution:
      "Un volet dans Excel envoie les données à une API Python qui propose des régressions, des modèles physiques, de l'apprentissage automatique et la calibration de paramètres.",
    stack: ["Python", "FastAPI", "SciPy", "scikit-learn", "PyTorch", "Office.js"],
    objectives: [
      "Comparer plusieurs familles de modèles sur les mêmes données.",
      "Estimer les paramètres d'un modèle physique à partir de mesures.",
    ],
    role: "Conception et développement complets.",
    knowledge: [
      "Cinétique chimique et génie de la réaction (réacteur agité continu).",
      "Transferts de matière (loi de Fick) et de chaleur (loi de refroidissement de Newton).",
      "Équations différentielles et estimation de paramètres par minimisation.",
      "Régression et apprentissage automatique (forêts aléatoires, SVR, réseaux de neurones).",
    ],
    approach: [
      { title: "Régression", text: "Sept formes de régression, avec un choix automatique de la meilleure." },
      {
        title: "Modèles physiques",
        text: "Cinétique chimique, réacteur agité continu, diffusion selon la loi de Fick, refroidissement selon la loi de Newton.",
      },
      { title: "Apprentissage", text: "Forêts aléatoires, SVR, K-Means, réseau de neurones PyTorch et un modèle hybride." },
      { title: "Calibration", text: "Estimation des paramètres d'équations différentielles par minimisation de l'écart aux mesures." },
    ],
    architecture: [
      "Une API FastAPI organisée par domaine : régression, analyse, modèles physiques, IA, simulation.",
      "Un volet latéral Office.js avec ses graphiques.",
      "Un conteneur Docker pour déployer l'API.",
    ],
    results: [
      "Une seule interface pour confronter l'approche empirique, le modèle physique et l'apprentissage automatique sur les mêmes données.",
    ],
    limits: [
      "L'API Python doit être en ligne pour que le complément fonctionne.",
      "Les modèles n'ont pas encore été confrontés à des cas industriels.",
    ],
    nextSteps: ["Ajouter des jeux de données d'exemple documentés, avec les résultats attendus."],
    links: [{ label: "Code", href: `${GH}/PhysioAI`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "chemai-chimiometrie-excel",
    title: "ChemAI, la chimiométrie multivariée dans Excel",
    shortTitle: "ChemAI",
    context: "Projet personnel, complément Excel",
    year: "2026",
    problems: ["modeliser", "outiller"],
    domains: ["analyse", "materiaux"],
    status: "termine",
    summary:
      "Un complément Excel qui apporte l'ACP, la PLS, la classification et la détection d'échantillons atypiques directement dans le classeur, sans serveur.",
    problem:
      "Les analyses multivariées (ACP, PLS, repérage des échantillons atypiques) demandent souvent un logiciel spécialisé, alors que les données du laboratoire sont déjà dans Excel.",
    solution:
      "Un complément Excel dont les algorithmes tournent dans le navigateur, avec un serveur Python facultatif pour les méthodes plus lourdes.",
    stack: ["JavaScript", "Office.js", "Algèbre linéaire", "Python (optionnel)"],
    objectives: [
      "Analyser un tableau Excel sans le copier dans un autre logiciel.",
      "Implémenter les méthodes de base de la chimiométrie de façon transparente.",
      "Repérer les échantillons atypiques avec des critères statistiques explicites.",
    ],
    role: "Conception et développement complets.",
    knowledge: [
      "Algèbre linéaire : décomposition en valeurs singulières, inversion de matrices.",
      "Chimiométrie : ACP, régression PLS, classification.",
      "Statistique multivariée : distance de Mahalanobis, T² de Hotelling, résidus Q.",
    ],
    approach: [
      { title: "Prétraitement", text: "Centrage et réduction des variables, statistiques descriptives." },
      {
        title: "Analyses",
        text: "ACP par décomposition en valeurs singulières, régression PLS-1 (algorithme NIPALS), K-Means++ et classification hiérarchique (Ward, lien complet, lien moyen).",
      },
      { title: "Anomalies", text: "Distance de Mahalanobis, T² de Hotelling et résidus Q (Jackson-Mudholkar)." },
      { title: "Restitution", text: "Graphiques, écriture des résultats dans le classeur et rapport." },
    ],
    architecture: [
      "Un volet latéral Office.js pour l'interface, les graphiques et les échanges avec le classeur.",
      "Une bibliothèque mathématique écrite en JavaScript, sans serveur.",
      "Un serveur Python facultatif pour Isolation Forest, LOF, SVM et forêts aléatoires.",
      "Un assistant d'interprétation facultatif par l'API Gemini, avec la clé de l'utilisateur.",
    ],
    results: [
      "Les analyses principales fonctionnent hors ligne, dans Excel.",
      "Une page de présentation est en ligne sur GitHub Pages.",
    ],
    limits: [
      "Je n'ai pas encore comparé systématiquement les résultats à ceux d'un logiciel de référence.",
      "Le calcul dans le navigateur convient à des tableaux de taille modeste.",
    ],
    nextSteps: [
      "Valider les sorties ACP et PLS sur des jeux de données publiés.",
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
    title: "DOE·AI, les plans d'expériences dans Excel",
    shortTitle: "DOE·AI",
    context: "Projet personnel, complément Excel",
    year: "2026",
    problems: ["optimiser"],
    domains: ["procedes", "materiaux"],
    status: "termine",
    summary:
      "Un complément Excel pour construire un plan d'expériences, analyser les résultats et chercher les conditions optimales.",
    problem:
      "Planifier puis analyser des essais, pour régler un procédé ou une formulation, passe en général par un logiciel statistique dédié et payant.",
    solution:
      "Un complément Excel qui génère le plan, ajuste le modèle, présente l'ANOVA, les effets et la surface de réponse, puis propose les conditions optimales.",
    stack: ["JavaScript", "Office.js", "Statistiques", "Python", "FastAPI"],
    objectives: [
      "Générer les plans d'expériences classiques à partir des facteurs et de leurs niveaux.",
      "Analyser les réponses mesurées dans le même classeur.",
      "Trouver les conditions qui atteignent un objectif.",
    ],
    role: "Conception et développement complets.",
    knowledge: [
      "Plans d'expériences : factoriels, composites centrés, Box-Behnken.",
      "Régression multiple et analyse de variance.",
      "Méthodologie des surfaces de réponse et optimisation.",
    ],
    approach: [
      {
        title: "Plans",
        text: "Factoriels complets et fractionnaires, plans composites centrés, Box-Behnken, points au centre et facteurs qualitatifs.",
      },
      { title: "Modèle", text: "Régression par moindres carrés avec interactions et termes quadratiques, ANOVA avec valeurs p." },
      { title: "Lecture", text: "Effets principaux, courbes d'effet et surface de réponse pour chaque paire de facteurs." },
      { title: "Optimisation", text: "Recherche des conditions qui maximisent, minimisent ou atteignent une valeur cible." },
    ],
    architecture: [
      "Un moteur de calcul en JavaScript : génération des plans, régression, ANOVA, optimisation.",
      "Un module d'écriture dans Excel, des graphiques et un rapport.",
      "Un petit serveur Python FastAPI pour l'analyse côté serveur.",
      "Un assistant d'interprétation facultatif par l'API Gemini.",
    ],
    results: ["Le cycle complet, planifier, analyser puis optimiser, se fait dans un seul classeur Excel."],
    limits: [
      "Les résultats doivent être confrontés à un logiciel de référence avant un usage critique.",
      "Les plans de mélange et les plans D-optimaux ne sont pas encore couverts.",
    ],
    nextSteps: ["Ajouter les plans de mélange, utiles en formulation.", "Valider l'outil sur des exemples de la littérature."],
    links: [{ label: "Code", href: `${GH}/doe`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "qhse-analyzer-pro",
    title: "QHSE Analyzer Pro, les outils qualité dans Excel",
    shortTitle: "QHSE Analyzer Pro",
    context: "Projet personnel, complément Excel",
    year: "2026",
    problems: ["mesurer", "outiller"],
    domains: ["qualite"],
    status: "termine",
    summary:
      "Un complément Excel qui réunit Pareto, Ishikawa, AMDEC, cartes de contrôle et indices de capabilité.",
    problem:
      "Les outils de la qualité sont souvent refaits à la main dans des feuilles Excel différentes, avec des formules à recopier à chaque analyse.",
    solution:
      "Un complément unique qui lit les données du classeur, produit les analyses qualité courantes et écrit un rapport dans Excel.",
    stack: ["JavaScript", "Office.js", "Webpack", "SPC"],
    objectives: [
      "Réunir les outils qualité courants dans une seule interface.",
      "Appliquer automatiquement les règles de détection des cartes de contrôle.",
    ],
    role: "Conception et développement complets.",
    knowledge: [
      "Maîtrise statistique des procédés : cartes de contrôle, règles de Nelson, capabilité.",
      "Analyse des risques par AMDEC.",
      "Outils de résolution de problèmes : Pareto, diagramme d'Ishikawa.",
    ],
    approach: [
      { title: "Pareto", text: "Analyse 80/20 et classement ABC des causes." },
      { title: "Ishikawa", text: "Diagramme causes et effets selon les 6M, avec des suggestions facultatives par IA." },
      { title: "AMDEC", text: "Calcul de l'indice de priorité de risque et hiérarchisation." },
      {
        title: "Maîtrise statistique",
        text: "Cartes X̄-R, I-MR, p et c avec les 8 règles de Nelson, indices Cp et Cpk, taux de non-conformité.",
      },
    ],
    architecture: [
      "Un volet latéral Office.js construit avec Webpack.",
      "Des modules séparés : lecture et écriture Excel, statistiques, cartes de contrôle, IA.",
      "Un assistant facultatif par l'API Gemini, avec la clé de l'utilisateur.",
    ],
    results: ["Les analyses qualité courantes sont produites à partir d'un même tableau de données."],
    limits: [
      "L'outil n'a pas encore été utilisé en conditions de production.",
      "Les suggestions de l'IA restent indicatives et doivent être vérifiées par une personne.",
    ],
    nextSteps: ["Ajouter un journal des analyses pour la traçabilité.", "Tester l'outil sur des données réelles d'atelier."],
    links: [{ label: "Code", href: `${GH}/QHSE`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "esg-analyzer-pro",
    title: "ESG Analyzer Pro, le bilan carbone dans Excel",
    shortTitle: "ESG Analyzer Pro",
    context: "Projet personnel, complément Excel",
    year: "2026",
    problems: ["mesurer", "outiller"],
    domains: ["environnement"],
    status: "termine",
    summary:
      "Un complément Excel qui calcule un bilan carbone, scopes 1, 2 et 3, à partir des données d'activité saisies dans le classeur.",
    problem:
      "Établir un bilan carbone oblige à rapprocher des données d'activité dispersées et des facteurs d'émission, souvent à la main.",
    solution:
      "Un complément qui crée les feuilles de collecte, applique les facteurs d'émission, calcule le bilan par scope, puis produit un tableau de bord et un rapport.",
    stack: ["JavaScript", "Office.js", "Node.js", "GHG Protocol"],
    objectives: [
      "Structurer la collecte des données d'énergie, de transport et de déchets.",
      "Calculer les émissions par scope selon le GHG Protocol.",
      "Produire un tableau de bord Excel natif et un rapport.",
    ],
    role: "Conception et développement complets.",
    knowledge: [
      "Comptabilité carbone selon le GHG Protocol : périmètres et scopes.",
      "Facteurs d'émission et conversion des données d'activité.",
      "Structuration de données et restitution sous forme de tableau de bord.",
    ],
    approach: [
      { title: "Collecte", text: "Création automatique des feuilles Énergie, Transport, Déchets et Configuration." },
      {
        title: "Calcul",
        text: "Application de facteurs d'émission inspirés de la Base Carbone de l'ADEME, puis regroupement par scope.",
      },
      { title: "Restitution", text: "Indicateurs, graphiques Excel natifs, repérage d'anomalies et rapport HTML imprimable." },
    ],
    architecture: [
      "Un volet latéral Office.js : orchestration, lecture et écriture Excel, calcul, rapport.",
      "Un serveur Node.js facultatif pour le développement local.",
      "Des recommandations facultatives par l'API Gemini.",
    ],
    results: ["Un bilan carbone par scope, produit à partir des feuilles de collecte du classeur."],
    limits: [
      "Les facteurs d'émission doivent être vérifiés et mis à jour par rapport à la source officielle avant tout usage.",
      "Un bilan réglementaire exige une méthode et une vérification qui dépassent cet outil.",
    ],
    nextSteps: ["Indiquer précisément la source et la version de chaque facteur d'émission."],
    links: [{ label: "Code", href: `${GH}/ESG`, kind: "code" }],
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "formulation-studio",
    title: "FormulationStudio, un logiciel web de formulation",
    shortTitle: "FormulationStudio",
    context: "Projet personnel, application web",
    year: "2026",
    problems: ["optimiser", "outiller"],
    domains: ["materiaux"],
    status: "en-cours",
    summary:
      "Une application web de formulation chimique en construction : base de matières premières, éditeur de formulation, puis optimisation.",
    problem:
      "En formulation, les matières premières, les recettes, les bilans matière et les essais sont souvent éparpillés dans des fichiers séparés.",
    solution:
      "Une application web qui centralise matières premières et formulations, et qui accueillera ensuite bilans matière, contraintes, optimisation et apprentissage automatique.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    objectives: [
      "Construire une base fiable de matières premières et de leurs propriétés.",
      "Rédiger et calculer des formulations avec un système d'unités rigoureux.",
    ],
    role: "Conception de l'architecture et développement.",
    knowledge: [
      "Formulation et bilans matière.",
      "Grandeurs physiques et conversion d'unités.",
      "Architecture d'une application web : interface, API, base de données, déploiement continu.",
    ],
    approach: [
      {
        title: "Fondations",
        text: "Un squelette complet : API, base de données, migrations, interface, intégration et déploiement continus.",
      },
      {
        title: "Unités",
        text: "Un moteur de conversion qui refuse toute conversion entre grandeurs physiques différentes, une masse en volume par exemple.",
      },
      {
        title: "Feuille de route",
        text: "Matériaux, éditeur de formulation, contraintes, optimisation, essais, IA et rapports, livrés par phases successives.",
      },
    ],
    architecture: [
      "Une interface Next.js exportée en site statique sur GitHub Pages.",
      "Une API FastAPI déployée sur Render.",
      "SQLite en développement, PostgreSQL (Supabase) en production, migrations Alembic.",
    ],
    results: ["La première phase est terminée : base, API, interface et déploiement fonctionnent ensemble."],
    limits: ["Le projet est en cours : les modules métier (éditeur, optimisation) restent à livrer."],
    nextSteps: ["Livrer le module Matériaux, puis l'éditeur de formulation avec bilan matière."],
    links: [{ label: "Code", href: `${GH}/FormulationAI`, kind: "code" }],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
