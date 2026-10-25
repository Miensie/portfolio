"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export function Navbar() {
  const pathname = usePathname();
  // Le menu mobile est lié à la page où il a été ouvert : il se ferme seul quand on change de page.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean | ((v: boolean) => boolean)) => {
    const next = typeof value === "function" ? value(open) : value;
    setOpenOn(next ? pathname : null);
  };

  // Ferme le menu avec la touche Échap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-night-line bg-night/95 text-paper backdrop-blur supports-[backdrop-filter]:bg-night/85">
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-h-16 min-w-0 items-center gap-3 font-semibold">
          <span
            aria-hidden="true"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-electric-soft font-mono text-[13px] text-electric-soft transition-transform duration-500 group-hover:rotate-[360deg]"
          >
            {site.initials}
          </span>
          <span className="truncate text-[13px] tracking-[0.06em] sm:text-sm">{site.shortName}</span>
        </Link>

        <ul className="hidden shrink-0 items-center gap-6 text-[15px] lg:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex min-h-16 items-center transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-electric-soft after:transition-transform after:duration-300 ${
                    active ? "text-paper after:scale-x-100" : "text-mist after:scale-x-0 hover:text-paper hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-night-line px-4 pb-4 lg:hidden">
          {navigation.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="rise" style={{ ["--delay" as string]: `${i * 50}ms` }}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-night-line text-base ${
                    active ? "text-electric-soft" : "text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
