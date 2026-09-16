"use client";

import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { OkanLogo } from "@/components/okan-logo";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavItem[];
}

export type NavEntry = NavItem | NavGroup;

function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "children" in entry;
}

const emptySubscribe = () => () => { };

export function NavDrawer({
  links,
  applyLabel,
  applyHref,
  applyClassName,
  homeLabel,
  homeHref,
  className,
  hiddenOnPath,
}: {
  links: NavEntry[];
  applyLabel: string;
  applyHref: string;
  applyClassName?: string;
  homeLabel: string;
  homeHref: string;
  className?: string;
  hiddenOnPath?: string;
}) {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  // El panel se renderiza en un portal para que su posición fija nunca dependa
  // de contenedores con transform (como el ScrollHeader), evitando que se
  // desplace con el scroll o aparezca pegado al botón en vez del lateral.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const pathname = usePathname();
  const admissionsStyle = pathname.endsWith("/draft-1/admissions")
    ? "!border-white/50 !bg-black/35 !text-white backdrop-blur-sm"
    : "";

  if (hiddenOnPath && pathname === hiddenOnPath) {
    return null;
  }

  return (
    <>
      {/* ========================================================================= */}
      {/* BOTÓN REDONDO QUE ABRE EL MENÚ (ICONO DE 3 LÍNEAS / HAMBURGUESA)         */}
      {/* ========================================================================= */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        className={`${className ?? "flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:text-brand-700"} ${admissionsStyle}`}
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

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 transition-opacity duration-500 ease-out ${open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            aria-hidden={!open}
          >
            {/* Fondo oscurecido semitransparente - Al hacer clic en CUALQUIER zona fuera del panel se cierra el menú */}
            <button
              type="button"
              aria-label="Cerrar menú"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-black/85 p-0"
            />

            {/* Panel lateral negro con el menú */}
            <div
              className={`relative z-10 flex h-[100dvh] w-72 max-w-[80vw] flex-col bg-zinc-950 p-6 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-80 sm:max-w-[85vw] sm:p-8 ${open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
              {/* Logo OKAN en la parte superior del menú */}
              <OkanLogo variant="light" width={130} />

              {/* Lista de enlaces de navegación (Inicio, Programas, Admisiones, etc.) */}
              <nav className="mt-10 flex flex-1 flex-col gap-5 overflow-y-auto">
                {/* Enlace Inicio */}
                <Link
                  href={homeHref}
                  onClick={() => setOpen(false)}
                  className="font-display hover:text-brand-400 text-xl font-semibold tracking-tight text-zinc-200 transition-colors sm:text-2xl"
                >
                  {homeLabel}
                </Link>

                {/* Resto de enlaces del sitio (algunos son submenús desplegables) */}
                {links.map((entry) =>
                  isNavGroup(entry) ? (
                    <div key={entry.label} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenGroup(
                            openGroup === entry.label ? null : entry.label,
                          )
                        }
                        aria-expanded={openGroup === entry.label}
                        className="font-display hover:text-brand-400 flex items-center justify-between gap-2 text-xl font-semibold tracking-tight text-zinc-200 transition-colors sm:text-2xl"
                      >
                        {entry.label}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`shrink-0 transition-transform ${openGroup === entry.label ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {openGroup === entry.label && (
                        <div className="mt-3 flex flex-col gap-3 border-l border-zinc-800 pl-4">
                          {entry.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="font-display hover:text-brand-400 text-base font-medium text-zinc-400 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      onClick={() => setOpen(false)}
                      className="font-display hover:text-brand-400 text-xl font-semibold tracking-tight text-zinc-200 transition-colors sm:text-2xl"
                    >
                      {entry.label}
                    </Link>
                  ),
                )}
              </nav>

              {/* Botón 'Aplicar ahora' fijado en la parte inferior del menú */}
              <Link
                href={applyHref}
                onClick={() => setOpen(false)}
                className={`mt-auto rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${applyClassName ?? "bg-white text-zinc-900 hover:bg-brand-100"
                  }`}
              >
                {applyLabel}
              </Link>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
