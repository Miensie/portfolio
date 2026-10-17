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
        <Link href="/" className="flex min-h-16 items-center gap-3 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-md border border-electric-soft font-mono text-[13px] text-electric-soft"
          >
            {site.initials}
          </span>
          {site.shortName}
        </Link>

        <ul className="hidden items-center gap-7 text-[15px] md:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-16 items-center border-b-2 transition-colors ${
                    active ? "border-electric-soft text-paper" : "border-transparent text-mist hover:text-paper"
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
          className="inline-flex size-11 items-center justify-center rounded-md text-paper md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-night-line px-4 pb-4 md:hidden">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
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
