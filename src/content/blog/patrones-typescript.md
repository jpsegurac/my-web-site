---
title: "Patrones de TypeScript que Importan en Producción"
description: "Más allá de los tipos básicos — uniones discriminadas, tipos marcados y tipos de literales de plantilla que hacen mantenibles los grandes codebases."
pubDate: 2026-01-20
category: "TypeScript"
tags: ["TypeScript", "Patrones", "Buenas Prácticas"]
featured: false
readTime: 5
lang: "es"
---

La mayoría de tutoriales de TypeScript se detienen en interfaces y genéricos. Aquí están los patrones que genuinamente mejoran grandes codebases de producción.

## Uniones Discriminadas para Máquinas de Estado

Modela transiciones de estado explícitas para que el compilador fuerce el manejo exhaustivo:

```typescript
type EstadoPeticion<T> =
  | { estado: "inactivo" }
  | { estado: "cargando" }
  | { estado: "exito"; datos: T }
  | { estado: "error"; error: Error };
```

## Tipos Marcados para Seguridad de Primitivos

Evita pasar un `UserId` donde se espera un `OrderId`:

```typescript
type UserId = string & { readonly _marca: "UserId" };
const toUserId = (id: string): UserId => id as UserId;
```

## Conclusión

Estos patrones agregan casi cero costo en tiempo de ejecución mientras detectan toda una clase de errores en tiempo de compilación. Vale la inversión.
