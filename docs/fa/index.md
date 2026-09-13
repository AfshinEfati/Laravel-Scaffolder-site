---
title: Laravel Scaffolder
lang: fa
---

# Laravel Scaffolder

## یک فیچر کامل Laravel را با یک دستور بساز

اگر برای هر فیچر جدید دوباره Repository، Service، DTO، Controller، Request، Resource و Test می‌سازی، Laravel Scaffolder دقیقاً برای کم‌کردن همین کار تکراری ساخته شده. خروجی هم داخل پروژه‌ی خودت است؛ یعنی هیچ Runtime Magic یا ساختار مخفی‌ای در کار نیست و هر فایلی که ساخته می‌شود مثل بقیه‌ی کدهای Laravel قابل تغییر است.

```bash
composer require efati/laravel-scaffolder
php artisan make:model Product -m
php artisan make:module Product --all
```

Scaffolder می‌تواند اطلاعات فیلدها را از Model و دیتابیس، از Migration یا مستقیم از `--fields` بخواند. بعد همان اطلاعات را برای ساخت DTO، Validation، Resource، Test و مستندات OpenAPI استفاده می‌کند تا لایه‌ها با هم ناسازگار نشوند.

## چه چیزهایی برایت می‌سازد؟

- **Repository و Service** برای جدا نگه‌داشتن Query و منطق Application.
- **DTO و Action** برای اینکه داده و عملیات فیچر ساختار مشخصی داشته باشند.
- **Controller، Form Request و Resource** برای لایه HTTP و API.
- **Provider و Policy** برای Binding و Authorization.
- **Feature Test** بر اساس فیلدهای واقعی مدل یا Migration.
- **OpenAPI / Swagger** برای مستندات API و Swagger UI مستقل.

## چیزی که Scaffolder عمداً انجام نمی‌دهد

کد را پشت یک سیستم اختصاصی قفل نمی‌کند. بعد از Generate شدن فایل‌ها، مالک آن کد خود پروژه است. می‌توانی کلاس‌ها را تغییر بدهی، Stubها را عوض کنی یا بعضی لایه‌ها را اصلاً نسازی.

::: tip سازگاری فعلی
نسخه فعلی پکیج از Laravel 10 تا 13 و PHP 8.1 تا 8.5 پشتیبانی می‌کند.
:::

اگر بار اول است از پکیج استفاده می‌کنی، از [نصب](/fa/getting-started/installation) شروع کن. اگر پکیج را نصب کرده‌ای، مستقیم برو سراغ [شروع سریع](/fa/getting-started/quick-start) یا [مرجع `make:module`](/fa/module/overview).
