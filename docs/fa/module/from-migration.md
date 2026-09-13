---
title: --from-migration / -fm
lang: fa
---

# `--from-migration` / `-fm`

با این Option یک Migration مشخص را به‌عنوان منبع Schema معرفی می‌کنی:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_01_01_000000_create_products_table.php
```

نسخه کوتاه:

```bash
php artisan make:module Product \
  -fm=database/migrations/2026_01_01_000000_create_products_table.php
```

## کِی به درد می‌خورد؟

- Model هنوز وجود ندارد؛
- دیتابیس در محیط فعلی بالا نیست؛
- Runtime Inspection نتوانسته Columnها را تشخیص بدهد؛
- یا می‌خواهی دقیقاً یک Migration خاص منبع Metadata باشد.

اگر Model نداری، برای اجرای عادی `make:module` باید حداقل `--fields` یا `--from-migration` داشته باشی.

```bash
php artisan make:module InventoryItem --api \
  --from-migration=database/migrations/2026_09_01_120000_create_inventory_items_table.php
```

اگر همزمان `--fields` معتبر هم بدهی، Schema صریح `--fields` اولویت دارد.
