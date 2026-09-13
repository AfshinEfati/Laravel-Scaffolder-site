---
title: --from-migration
lang: fa
---

# `--from-migration` / `-fm`

Migration مشخصی را برای استخراج Schema بده:

```bash
php artisan make:module Product --from-migration=create_products_table
```

یا مسیر فایل:

```bash
php artisan make:module Product -fm database/migrations/2026_01_01_000000_create_products_table.php
```

Parser تلاش می‌کند Columnها، Nullable، Relation و Table را استخراج کند و همان Metadata را در DTO، Request، Resource، Swagger و Test استفاده کند.

اگر Runtime و Migration هر دو اطلاعات داشته باشند، Metadata ادغام می‌شود و در صورت وجود `$fillable` مدل، خروجی با آن هماهنگ می‌شود.
