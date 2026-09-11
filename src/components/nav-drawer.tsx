"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

export interface NavItem {
  label: string;
  href: string;
}

export function NavDrawer({
  links,
  applyLabel,
  applyHref,
  className,
}: {
  links: NavItem[];
  applyLabel: string;
  applyHref: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        className={
          className ??
          "flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:text-brand-700"
        }
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

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ease-out ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 flex h-full w-80 max-w-[85vw] flex-col bg-zinc-950 p-8 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-semibold">OKAN</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display hover:text-brand-400 text-2xl font-semibold tracking-tight text-zinc-200 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href={applyHref}
            onClick={() => setOpen(false)}
            className="hover:bg-brand-100 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors"
          >
            {applyLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
