---
title: شروع سریع
lang: fa
---

# شروع سریع

اگر Model و Migration را می‌سازی و می‌خواهی بقیه‌ی لایه‌های فیچر آماده شوند، ساده‌ترین Flow این است:

```bash
php artisan make:model Product -m
php artisan migrate
php artisan make:module Product
```

با تنظیمات پیش‌فرض، Scaffolder ماژول را در حالت API می‌سازد و Repository، Service، DTO، Resource، Provider، Controller، Form Request، Action و Feature Test را کنار هم ایجاد می‌کند.

## همه‌چیز را یک‌جا می‌خواهی؟

```bash
php artisan make:module Product --all
```

`--all` یا `--full` علاوه بر لایه‌های معمول، Policy و Swagger را هم فعال می‌کند. یک نکته‌ی مهم درباره‌ی ترکیب این گزینه با `--no-*`ها وجود دارد که در صفحه [`--all / --full`](/fa/module/full-stack) کامل توضیح داده شده.

## هنوز Model نداری؟

مشکلی نیست. می‌توانی Schema را مستقیم به Command بدهی:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),stock:integer,is_active:boolean"
```

یا اگر Migration آماده است، همان را منبع قرار بده:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_09_01_000000_create_products_table.php
```

اگر نه Model وجود داشته باشد، نه `--fields` داده باشی و نه Migration مشخص کرده باشی، Command متوقف می‌شود؛ چون بدون Schema نمی‌تواند خروجی قابل‌اعتمادی برای DTO، Validation و Test بسازد.

## Swagger UI را هم بالا بیاور

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## اگر فایل‌ها از قبل وجود دارند

Scaffolder به‌صورت پیش‌فرض روی فایل موجود نمی‌نویسد. اگر واقعاً می‌خواهی فایل‌ها دوباره ساخته شوند، `--force` را صریحاً اضافه کن:

```bash
php artisan make:module Product --all --force
```

قبل از استفاده از `--force` روی کد واقعی، بهتر است Diff را بررسی کنی یا تغییراتت Commit شده باشند.
