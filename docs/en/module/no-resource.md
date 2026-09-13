---
title: --no-resource / -nr
lang: en
---

# `--no-resource` / `-nr`

Skip Laravel API Resource generation.

```bash
php artisan make:module Product --no-resource
```

The controller generator is informed that no resource layer exists, so generated response handling is adjusted instead of referencing a missing `ProductResource`.

Use this when your application already has a dedicated transformer/serializer layer or intentionally returns another response shape.

```bash
php artisan make:module Product --api --no-resource
```

`--all` / `--full` are applied later and re-enable API Resource generation.
