---
title: "Rendimiento en React: Más allá de React.memo"
description: "Técnicas prácticas para diagnosticar y corregir cuellos de botella en React — cubriendo reconciliación, virtualización y características concurrentes."
pubDate: 2026-02-10
category: "Frontend"
tags: ["React", "Rendimiento", "TypeScript"]
featured: false
readTime: 6
lang: "es"
---

`React.memo` es la primera herramienta a la que recurren los desarrolladores, pero rara vez es suficiente por sí sola. Aquí hay un enfoque sistemático para el rendimiento en React.

## Perfilar Primero

Usa el Profiler de React DevTools para identificar componentes que se renderizan innecesariamente. Adivinar es perder el tiempo.

## Estabilizar Referencias

Las referencias inestables de funciones y objetos rompen la memoización. `useCallback` y `useMemo` ayudan — pero solo cuando los arrays de dependencias son correctos.

## Virtualizar Listas Largas

Renderizar 1000 nodos DOM es lento independientemente de la memoización. Usa `@tanstack/virtual` para renderizar solo las filas visibles.

## Características Concurrentes

`useTransition` de React 18 marca actualizaciones como no urgentes, manteniendo la UI responsive durante transiciones de estado costosas.

## Conclusión

Perfila, identifica el cuello de botella real, luego aplica el cambio mínimo. La optimización prematura agrega complejidad sin beneficio.
