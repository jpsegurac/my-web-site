---
title: "PostgreSQL Query Optimization: From EXPLAIN to Sub-10ms Queries"
description: "A systematic guide to reading EXPLAIN ANALYZE output and applying indexes, partial indexes, and query rewrites to hit your latency targets."
pubDate: 2025-12-05
category: "Database"
tags: ["PostgreSQL", "Performance", "SQL"]
featured: false
readTime: 7
lang: "en"
---

Slow queries are usually diagnosed the same way: read the execution plan, find the expensive node, add the right index.

## Reading EXPLAIN ANALYZE

```sql
EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders WHERE user_id = $1 AND status = 'pending';
```

Look for `Seq Scan` on large tables — that's your culprit. `Buffers: shared hit` vs `read` tells you whether data is cached.

## Composite Indexes

Column order matters. Put equality conditions before range conditions:

```sql
CREATE INDEX idx_orders_user_status ON orders (user_id, status);
```

## Partial Indexes

Index only the rows you query:

```sql
CREATE INDEX idx_orders_pending ON orders (user_id) WHERE status = 'pending';
```

This is significantly smaller and faster than a full index when the filtered set is a small fraction of the table.

## Conclusion

`EXPLAIN ANALYZE` is your compass. Run it before and after every change, and measure wall-clock time under realistic load.
