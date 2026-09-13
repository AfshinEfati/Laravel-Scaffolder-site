---
title: --no-actions
lang: fa
---

# `--no-actions`

Action Layer را خاموش می‌کند:

```bash
php artisan make:module Product --no-actions
```

این Option مخصوصاً کنار `--api` کاربرد دارد، چون API Mode به‌صورت پیش‌فرض Actionها را روشن می‌کند:

```bash
php artisan make:module Product --api --no-actions
```

در این حالت Controller مستقیماً از Service استفاده می‌کند.

::: warning
`--all` و `--full` در انتهای Flow Actionها را دوباره روشن می‌کنند.
:::
