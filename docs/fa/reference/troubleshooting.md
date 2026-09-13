---
title: رفع اشکال
lang: fa
---

# رفع اشکال

## Model پیدا نمی‌شود

اگر `App\Models\Product` وجود ندارد، اول Model بساز یا Schema بده:

```bash
php artisan make:model Product -m
# یا
php artisan make:module Product --fields="name:string"
```

## Fieldها قابل تشخیص نیستند

Migrationها را اجرا کن و اتصال Database را بررسی کن؛ یا `--from-migration` / `--fields` را صریح بده.

## فایل از قبل وجود دارد

رفتار امن Generator است. بعد از بررسی فایل، در صورت نیاز:

```bash
php artisan make:module Product --force
```

## Swagger UI آماده نیست

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Interface Resolve نمی‌شود

اگر `--no-provider` استفاده کرده‌ای، Bindingهای Repository/Service را دستی ثبت کن.
