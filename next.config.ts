import type { NextConfig } from "next";

/**
 * Site 100 % statique : `next build` produit le dossier `out/`,
 * déployable tel quel sur Vercel, Cloudflare Pages, GitHub Pages ou Netlify.
 */
const nextConfig: NextConfig = {
  output: "export",
  // URLs du type /projets/mon-projet/ → fonctionnent sur tout hébergeur statique.
  trailingSlash: true,
  // L'optimiseur d'images de Next.js exige un serveur : on le désactive pour l'export statique.
  images: { unoptimized: true },
};

export default nextConfig;
