---
title: --no-controller
lang: fa
---

# `--no-controller`

Controller را نساز اما Repository، Service و سایر خروجی‌های فعال را نگه دار:

```bash
php artisan make:module Product --no-controller
```

برای Moduleهایی که مستقیم Endpoint HTTP ندارند مناسب است.

::: warning
`--all` و `--full` در رفتار فعلی Controller را دوباره روشن می‌کنند.
:::
