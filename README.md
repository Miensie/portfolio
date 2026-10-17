# Portfolio — Koffi Miensie Ezéchiel Amani

Site statique en **Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4**.
`npm run build` produit un dossier `out/` de fichiers HTML/CSS/JS, hébergeable gratuitement
sur Vercel, Cloudflare Pages, GitHub Pages ou Netlify.

---

## 1. Installation locale

Prérequis : **Node.js 20 ou plus récent** (`node -v` pour vérifier) et Git.

```bash
cd portfolio-koffi
npm install
npm run dev
```

Ouvrir http://localhost:3000. Chaque modification de fichier se recharge automatiquement.

## 2. Contrôles avant publication

```bash
npm run typecheck   # erreurs TypeScript
npm run lint        # règles ESLint (Next.js + accessibilité de base)
npm run build       # construction de production → dossier out/
npm start           # sert out/ sur http://localhost:3000 pour vérifier le résultat final
```

## 3. Publier sur GitHub

1. Créer un dépôt vide sur https://github.com/new (ex. `portfolio`), **sans** README.
2. Dans le dossier du projet :

```bash
git init
git add .
git commit -m "Portfolio : première version"
git branch -M main
git remote add origin https://github.com/Miensie/portfolio.git
git push -u origin main
```

## 4. Déployer sur Vercel (recommandé)

1. Se connecter sur https://vercel.com avec le compte GitHub.
2. **Add New → Project**, choisir le dépôt `portfolio`, laisser les réglages détectés (Next.js).
3. Dans **Environment Variables**, ajouter :
   - `NEXT_PUBLIC_SITE_URL` = l'adresse finale du site (ex. `https://koffi-amani.vercel.app`)
   - `NEXT_PUBLIC_WEB3FORMS_KEY` = votre clé Web3Forms (facultatif, voir §6)
4. **Deploy**. Chaque `git push` sur `main` redéploie automatiquement.

> Pensez à corriger `NEXT_PUBLIC_SITE_URL` dès que l'adresse définitive est connue, puis à
> redéployer : elle sert au sitemap, au robots.txt et aux aperçus de partage (LinkedIn, WhatsApp).

### Alternative : Cloudflare Pages

Dashboard → **Workers & Pages → Create → Pages → Connect to Git**, puis :
commande de build `npm run build`, dossier de sortie `out`, mêmes variables d'environnement.

## 5. Nom de domaine personnalisé (facultatif)

Acheter un domaine (ex. `koffi-amani.com`) chez un registraire, puis dans Vercel :
**Project → Settings → Domains → Add**, et suivre les enregistrements DNS indiqués.
Mettre ensuite à jour `NEXT_PUBLIC_SITE_URL`.

## 6. Formulaire de contact

Sans configuration, la page Contact affiche un bouton e-mail (aucun faux formulaire).
Pour activer le formulaire :

1. Créer une clé gratuite sur https://web3forms.com avec `koffimiensie@gmail.com`.
2. Ajouter la variable `NEXT_PUBLIC_WEB3FORMS_KEY` (Vercel, ou fichier `.env.local` en local —
   voir `.env.example`), puis redéployer.
3. Envoyer un message de test depuis le site en ligne et vérifier sa réception.

La clé Web3Forms est conçue pour être visible côté navigateur ; elle ne donne accès qu'à l'envoi
vers votre adresse. Vérifiez les conditions et limites de l'offre gratuite sur leur site.

---

## 7. Mettre à jour le contenu

Tout le texte est dans le dossier `content/` — **aucune page à modifier** :

| Fichier | Contenu |
|---|---|
| `content/site.ts` | nom, titre, e-mail, GitHub, LinkedIn, chemin du CV, opportunités recherchées |
| `content/projects.ts` | tous les projets et leurs études de cas |
| `content/skills.ts` | compétences et niveaux |
| `content/timeline.ts` | parcours, certification, langues |
| `content/solutions.ts` | page Solutions |

### Ajouter un projet

1. Dans `content/projects.ts`, copier un bloc `{ slug: …, … }` existant et le coller dans la liste.
2. Changer `slug` (devient l'URL `/projets/<slug>/`), puis remplir les champs.
3. `featured: true` le fait apparaître sur l'accueil (en garder 4 au maximum).
4. Pour une capture d'écran : placer l'image dans `public/images/projets/` et l'ajouter dans
   `figures` (avec `alt`, `caption`, `width`, `height`). Utiliser des **données fictives** pour
   tout ce qui concerne un employeur.

TypeScript signale immédiatement un champ manquant ou mal orthographié (`npm run typecheck`).

### Remplacer le CV ou la photo

- CV : remplacer `public/cv/CV_Koffi_Amani.pdf` (même nom). S'il est supprimé, les boutons CV
  disparaissent automatiquement.
- Photo : remplacer `public/images/portrait.jpg` ; si les dimensions changent, mettre à jour
  `width`/`height` dans `components/home/Hero.tsx` et `app/a-propos/page.tsx`.

---

## Structure

```
app/                 pages (App Router), métadonnées, sitemap, robots, favicon, 404
components/
  layout/            Navbar (client), Footer
  home/              Hero, courbe décorative
  projects/          ProjectCard, ProjectFilter (client), ProjectCover
  contact/           ContactForm (client)
  ui/                ButtonLink, Section, Tags, Timeline
content/             données typées du site
lib/                 types et utilitaires
public/              CV, images, image de partage (og.png)
```

Seuls le menu mobile, le filtre de la galerie et le formulaire sont des composants clients ;
tout le reste est rendu à la compilation.
