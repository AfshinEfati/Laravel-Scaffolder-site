---
title: --requests
lang: fa
---

# `--requests` / `-r`

برای ساخت `Store...Request` و `Update...Request`:

```bash
php artisan make:module Product --requests
```

Validation Ruleها بر اساس Schema ساخته می‌شوند؛ Type، Nullable، Unique و Foreign Key در صورت موجود بودن وارد Rule می‌شوند.

API mode به‌صورت خودکار Requestها را روشن می‌کند:

```bash
php artisan make:module Product --api
```
