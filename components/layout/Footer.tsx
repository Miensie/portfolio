import Link from "next/link";
import { navigation, site } from "@/content/site";

export function Footer({ hasCv }: { hasCv: boolean }) {
  return (
    <footer className="border-t border-night-line bg-night text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-semibold text-paper">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm">{site.title}</p>
          <p className="mt-1 text-sm">{site.location}</p>
        </div>
        <nav aria-label="Pied de page">
          <p className="font-mono text-xs uppercase tracking-widest text-electric-soft">Pages</p>
          <ul className="mt-3 space-y-1 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-electric-soft">Liens</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="inline-block py-1 hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.github} className="inline-block py-1 hover:text-paper" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>
            </li>
            {site.linkedin && (
              <li>
                <a href={site.linkedin} className="inline-block py-1 hover:text-paper" rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
            )}
            {hasCv && (
              <li>
                <a href={site.cvPath} download className="inline-block py-1 hover:text-paper">
                  CV (PDF)
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="border-t border-night-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
