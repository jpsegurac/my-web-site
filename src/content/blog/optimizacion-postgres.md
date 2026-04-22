---
title: "Optimización de Consultas PostgreSQL: De EXPLAIN a Consultas Sub-10ms"
description: "Una guía sistemática para leer la salida de EXPLAIN ANALYZE y aplicar índices, índices parciales y reescrituras de consultas para alcanzar tus objetivos de latencia."
pubDate: 2025-12-05
category: "Base de Datos"
tags: ["PostgreSQL", "Rendimiento", "SQL"]
featured: false
readTime: 7
lang: "es"
---

Las consultas lentas generalmente se diagnostican de la misma manera: leer el plan de ejecución, encontrar el nodo costoso, agregar el índice correcto.

## Leyendo EXPLAIN ANALYZE

```sql
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE user_id = $1 AND status = 'pending';
```

Busca `Seq Scan` en tablas grandes — eso es tu culpable. `Buffers: shared hit` vs `read` te dice si los datos están en caché.

## Índices Compuestos

El orden de columnas importa. Pon condiciones de igualdad antes que condiciones de rango:

```sql
CREATE INDEX idx_orders_user_status ON orders (user_id, status);
```

## Índices Parciales

Indexa solo las filas que consultas:

```sql
CREATE INDEX idx_orders_pending ON orders (user_id) WHERE status = 'pending';
```

## Conclusión

`EXPLAIN ANALYZE` es tu brújula. Ejecútalo antes y después de cada cambio, y mide el tiempo real bajo carga realista.
