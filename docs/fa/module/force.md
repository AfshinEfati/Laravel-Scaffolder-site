---
title: --force
lang: fa
---

# `--force`

به‌صورت پیش‌فرض Generator فایل موجود را حفظ می‌کند. فقط وقتی عمداً می‌خواهی خروجی دوباره ساخته شود از `--force` استفاده کن:

```bash
php artisan make:module Product --all --force
```

این Option بعد از تغییر Stub یا Config مفید است.

::: warning
`--force` می‌تواند کدی را که بعد از Generation دستی تغییر داده‌ای بازنویسی کند. بعد از اجرا حتماً Git diff را بررسی کن.
:::
