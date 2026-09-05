---
name: okan-design-system
description: Usar SIEMPRE al crear o estilizar componentes/páginas de OKAN. Define los design tokens de Tailwind v4 (@theme en src/app/globals.css), la dirección visual (RADA/LAMDA/CalArts/Juilliard) y cómo extender tokens sin romper la coherencia.
---

# Design system de OKAN

Dirección visual objetivo: hero en gran formato, tipografía serif elegante,
mucho espacio en blanco, fotografía de estudiantes en escena. Referencias:
RADA, LAMDA, CalArts, Juilliard.

## Dónde viven los tokens

`src/app/globals.css` usa Tailwind v4 con `@theme`. Los tokens de color y
fuente se definen ahí (variables CSS + `@theme inline`).

Tokens base actuales:
- `--color-background`, `--color-foreground`
- `--font-sans` (Geist), `--font-mono` (Geist Mono)

## Cómo agregar tokens (Tailwind v4)

1. Colores de marca → variables CSS en `:root` y mapeo en `@theme inline`:
   ```css
   :root { --brand: #000000; }
   @theme inline { --color-brand: var(--brand); }
   ```
   Luego usás `bg-brand`, `text-brand`, etc.
2. Tipografías → importá la fuente (next/font o `@import`) y registrala:
   ```css
   @theme inline { --font-display: var(--font-serif); }
   ```
3. Espaciado/escala → no inventes valores mágicos; usá la escala de Tailwind.

## Reglas

- NO crear colores/tamaños ad-hoc; usá tokens. Si falta un token, AGREGALO al
  design system (editá `globals.css`), no lo hardcodees en el componente.
- Serif para títulos (display), sans para cuerpo.
- Mucho whitespace: secciones con `py-24`/`py-32`, no apretar contenido.
- Fotografía grande y de calidad como protagonista (full-bleed hero).
- Consistencia ES/EN: el layout no cambia entre idiomas.

## Verificación

Tras tocar `globals.css` o crear tokens, confirmá que el build no rompa:
`npm run build`.