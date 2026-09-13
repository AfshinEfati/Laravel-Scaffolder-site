---
title: --from-migration / -fm
lang: fa
---

# `--from-migration` / `-fm`

Migration مشخصی را برای استخراج Schema به Generator معرفی می‌کند:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_01_01_000000_create_products_table.php
```

یا:

```bash
php artisan make:module Product \
  -fm=database/migrations/2026_01_01_000000_create_products_table.php
```

این Option مسیر یا Hint مایگریشن را به Migration Parser می‌دهد.

## چه زمانی مفید است؟

- Model هنوز ساخته نشده؛
- دیتابیس در Environment فعلی در دسترس نیست؛
- Runtime Inspection اطلاعات Columnها را پیدا نمی‌کند؛
- می‌خواهید Migration مشخصی منبع Metadata باشد.

بدون Model، برای اجرای عادی `make:module` باید `--fields` یا `--from-migration` صریح داشته باشید.

```bash
php artisan make:module InventoryItem --api \
  --from-migration=database/migrations/2026_09_01_120000_create_inventory_items_table.php
```

اگر همزمان `--fields` معتبر بدهید، Inline Schema اولویت دارد.
