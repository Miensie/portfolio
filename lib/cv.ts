import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/**
 * Vérifie, au moment de la compilation, que le CV existe dans /public.
 * S'il manque, les boutons « Télécharger mon CV » ne sont pas affichés
 * (jamais de lien mort).
 */
export function cvAvailable(): boolean {
  return existsSync(path.join(process.cwd(), "public", site.cvPath));
}
