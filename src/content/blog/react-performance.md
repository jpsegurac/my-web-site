---
title: "React Performance: Beyond React.memo"
description: "Practical techniques for diagnosing and fixing React performance bottlenecks — covering reconciliation, virtualization, and concurrent features."
pubDate: 2026-02-10
category: "Frontend"
tags: ["React", "Performance", "TypeScript"]
featured: false
readTime: 6
lang: "en"
---

`React.memo` is the first tool developers reach for, but it's rarely enough on its own. Here's a systematic approach to React performance.

## Profile First

Use the React DevTools Profiler to identify components that re-render unnecessarily. Guessing wastes time.

## Stabilize References

Unstable function and object references break memoization. `useCallback` and `useMemo` help — but only when the dependency arrays are correct.

```typescript
const handler = useCallback(() => {
  dispatch({ type: "INCREMENT", payload: id });
}, [dispatch, id]);
```

## Virtualize Long Lists

Rendering 1000 DOM nodes is slow regardless of memoization. Use `@tanstack/virtual` to render only visible rows.

## Concurrent Features

React 18's `useTransition` marks updates as non-urgent, keeping the UI responsive during expensive state transitions.

```typescript
const [isPending, startTransition] = useTransition();
startTransition(() => setFilter(newFilter));
```

## Conclusion

Profile, identify the actual bottleneck, then apply the minimal fix. Premature optimization adds complexity without benefit.
