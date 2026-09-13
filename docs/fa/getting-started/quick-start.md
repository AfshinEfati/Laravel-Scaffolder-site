---
title: شروع سریع
lang: fa
---

# شروع سریع

ساده‌ترین Flow این است که Model/Migration را بسازید و Feature را دور آن Scaffold کنید:

```bash
php artisan make:model Product -m
php artisan migrate
php artisan make:module Product
```

با Config پیش‌فرض پکیج، Command در API Mode اجرا می‌شود و Repository/Service به‌همراه DTO، Resource، Provider، Controller، Requestها، Actionها و Feature Test می‌سازد.

## Stack کامل

```bash
php artisan make:module Product --all
```

Policy و Swagger هم فعال می‌شوند. قواعد دقیق Override را در صفحه [`--all / --full`](/fa/module/full-stack) ببینید.

## قبل از وجود Model

Schema را Inline بدهید:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),stock:integer,is_active:boolean"
```

یا Migration مشخص کنید:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_09_01_000000_create_products_table.php
```

Build عادی بدون Model و بدون `--fields` یا Migration Hint صریح متوقف می‌شود.

## Swagger UI

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## بازتولید

برای جایگزینی فایل‌های موجود باید صریحاً `--force` بدهید:

```bash
php artisan make:module Product --all --force
```
