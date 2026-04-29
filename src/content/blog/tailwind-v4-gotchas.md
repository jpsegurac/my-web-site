---
title: "Tailwind v4 migration: things that caught me off guard"
description: "Moved a project from Tailwind v3 to v4 and hit a few surprises worth writing down."
pubDate: 2026-04-20
category: "dev"
tags: ["Tailwind", "CSS", "Astro"]
featured: true
lang: "en"
altSlug: "tailwind-v4-sorpresas"
---

The biggest one: `@tailwind base/components/utilities` directives are gone. You just import the CSS file from the Vite plugin and that's it. Took me a while to realise my global styles weren't loading because I had kept the old directives.

The second surprise was dark mode. The `class` strategy still works but the config key moved — you now set it inside `@theme` in CSS rather than in `tailwind.config`. Cleaner, but nothing in the migration guide called it out clearly.

Otherwise the upgrade was smoother than I expected. The Vite plugin handles almost everything automatically.
