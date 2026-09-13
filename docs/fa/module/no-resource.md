---
title: --no-resource / -nr
lang: fa
---

# `--no-resource` / `-nr`

API Resource را از خروجی حذف می‌کند:

```bash
php artisan make:module Product --no-resource
```

Controller تولیدشده در این حالت به‌جای `ProductResource` با داده‌ی خام خروجی کار می‌کند.

اگر Full Stack را فعال کنی، Resource دوباره روشن می‌شود:

```bash
php artisan make:module Product --all --no-resource
```

در Flow فعلی `--all` در انتها برنده می‌شود و Resource ساخته خواهد شد.
