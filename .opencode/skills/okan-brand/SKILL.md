---
name: okan-brand
description: Usar SIEMPRE al usar el logo, fotos del claustro, profesores/facultad, o contenido real de marca. Mapea Assets/Imagenes y Profesores.xlsx (nombre formal ↔ archivo de foto) y la identidad de marca existente.
---

# Marca y contenido real de OKAN

Identidad de marca existente (proporcionada por el cliente): logo, colores y
tipografías oficiales. No inventar marca; usar los assets reales.

## Logo

- `Assets/Imagenes/Logo-OKAN.png` — 300×120, RGBA (fondo transparente).

## Claustro docente — mapeo (foto ↔ persona)

`Assets/Profesores.xlsx` contiene 14 personas (Foto, Nombre, Cargo,
Descripción). Las fotos están en `Assets/Imagenes/profesores/`. **El nombre de
archivo NO coincide 1:1 con el nombre formal**: relacioná manualmente.

| Nombre formal (xlsx)              | Cargo                      | Archivo de foto                         |
| --------------------------------- | -------------------------- | --------------------------------------- |
| Carolina del Carmen Zepeda García | Rectora fundadora          | `Carolina.jpeg`                         |
| Ernesto Tamayo Benítez            | Decano de Actuación        | `ErnestoTamayo.jpg`                     |
| Luz Mas                           | Decana de Danza            | `Luz-Mas.jpg`                           |
| Alia Gisela Sánchez Vázquez       | Directora de Mercadotecnia | `Alia-Sanchez.jpeg`                     |
| Yailín Coppola                    | Docente                    | `Yailin-1.jpeg`                         |
| Abigail Soqui Michelena           | Docente                    | `Abigail-Soqui-Michelena.jpeg`          |
| Patricia Rivera                   | Docente                    | `Patricia-Rivera.png`                   |
| Zurisadai González Fuente         | Docente                    | `Zurisadai-Gonzalez-Fuente.jpg`         |
| Kirenia Arbelo Plasencia          | Docente                    | `kirenia.jpeg`                          |
| Anyel Judith Goenaga              | Docente                    | `Anyel-Judith-Goenaga.png`              |
| Pita Ochoa                        | Docente                    | `Pita-Ochoa.jpg`                        |
| Lázaro Alejandro Batista Burunate | Docente                    | `Lazaro-Alejandro-Batista-Burunate.png` |
| Greys Rosales                     | Docente                    | `Greys-Rosales.png`                     |
| Doriam Díaz Goenaga               | Psicóloga                  | `Doriam.jpeg`                           |

Nota: el xlsx contiene el texto completo de `Descripción` (biodata rica) para
cada persona. Úsalo tal cual para las biografías, pero validá acentos (p.ej.
"Yailín" vs `Yailin-1.jpeg`).

## Uso

- Las fotos son material fuente; al montar el sitio, importá/optimizá con
  `next/image` (no uses rutas crudas gigantes sin `width`/`height`).
- Formato mixto (jpeg/jpg/png). Al integrarlas como media en Payload, mantené
  la relación foto↔nombre de esta tabla.
