---
title: "Migración a Tailwind v4: cosas que no me esperaba"
description: "Migré un proyecto de Tailwind v3 a v4 y me encontré con algunas sorpresas que vale la pena anotar."
pubDate: 2026-04-20
category: "dev"
tags: ["Tailwind", "CSS", "Astro"]
featured: true
lang: "es"
altSlug: "tailwind-v4-gotchas"
---

Lo más llamativo: las directivas `@tailwind base/components/utilities` desaparecen. Ahora solo importás el CSS desde el plugin de Vite y listo. Me costó un rato darme cuenta de que mis estilos globales no cargaban porque había dejado las directivas viejas.

La segunda sorpresa fue el modo oscuro. La estrategia `class` sigue funcionando, pero la configuración se movió — ahora se define dentro de `@theme` en CSS en lugar del `tailwind.config`. Más limpio, pero la guía de migración no lo menciona con claridad.

En general la actualización fue más tranquila de lo que esperaba. El plugin de Vite hace casi todo automáticamente.
