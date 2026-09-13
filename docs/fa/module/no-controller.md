---
title: --no-controller / -nc
lang: fa
---

# `--no-controller` / `-nc`

Controller را از خروجی حذف می‌کند:

```bash
php artisan make:module Product --no-controller
```

Repository، Service و سایر لایه‌های فعال همچنان ساخته می‌شوند. این حالت برای Featureهایی که از Job، Event، Console یا Transport دیگری استفاده می‌کنند مناسب است.

اگر `--controller=...` هم بدهید، مقدار صریح Subfolder بعداً Controller را دوباره فعال می‌کند:

```bash
php artisan make:module Product --no-controller --controller=Admin
```

`--all` و `--full` نیز Controller را دوباره فعال می‌کنند.
