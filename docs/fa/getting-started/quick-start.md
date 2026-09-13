---
title: شروع سریع
lang: fa
---

# شروع سریع

اول مدل و Migration را بساز:

```bash
php artisan make:model Product -m
```

بعد Module را تولید کن:

```bash
php artisan make:module Product
```

در Config پیش‌فرض پکیج، نوع Controller برابر `api` است؛ بنابراین API mode فعال می‌شود و Form Request و Action نیز به‌صورت خودکار وارد جریان تولید می‌شوند.

برای Stack کامل:

```bash
php artisan make:module Product --all
```

بدون مدل موجود هم می‌توانی Schema را مستقیم بدهی:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

یا Migration مشخص کنی:

```bash
php artisan make:module Product --from-migration=create_products_table
```

فایل‌های موجود بدون `--force` بازنویسی نمی‌شوند.
