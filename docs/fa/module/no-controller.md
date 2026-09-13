---
title: --no-controller / -nc
lang: fa
---

# `--no-controller` / `-nc`

اگر برای این ماژول Controller نمی‌خواهی:

```bash
php artisan make:module Product --no-controller
```

Repository و Service و هر لایه‌ی دیگری که فعال مانده باشد ساخته می‌شوند، اما Controller حذف می‌شود.

## دو حالتی که دوباره Controller را روشن می‌کنند

اگر `--controller=...` با مقدار بدهی، Controller دوباره فعال می‌شود:

```bash
php artisan make:module Product --no-controller --controller=Admin
```

`--all` و `--full` هم در انتهای Flow Controller را دوباره روشن می‌کنند.
