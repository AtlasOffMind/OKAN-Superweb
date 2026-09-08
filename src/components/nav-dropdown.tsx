"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import type { NavItem } from "./nav-drawer";

export function NavDropdown({
  links,
  applyLabel,
  applyHref,
}: {
  links: NavItem[];
  applyLabel: string;
  applyHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Abrir menú"
        className="hover:border-brand-500 hover:text-brand-400 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 z-50 mt-3 w-64 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display hover:bg-brand-950 hover:text-brand-300 rounded-xl px-4 py-2.5 text-lg text-zinc-300 italic transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href={applyHref}
            onClick={() => setOpen(false)}
            className="from-brand-500 to-brand-700 mt-3 block rounded-full bg-gradient-to-r px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            {applyLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
