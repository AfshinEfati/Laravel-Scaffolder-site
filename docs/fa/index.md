---
title: Laravel Scaffolder
lang: fa
---

# Laravel Scaffolder

## ساخت معماری کامل فیچرهای Laravel با یک دستور

Laravel Scaffolder کارهای تکراری ساخت یک فیچر را به یک جریان شفاف Artisan تبدیل می‌کند. Repository، Service، DTO، Action، Controller، Form Request، API Resource، Provider، Policy، Feature Test و مستندات OpenAPI تولید می‌شوند، اما تمام فایل‌ها داخل پروژه‌ی خودت می‌مانند و مثل کد عادی Laravel قابل ویرایش‌اند.

```bash
composer require efati/laravel-scaffolder
php artisan make:model Product -m
php artisan make:module Product --all
```

Generator می‌تواند Schema را از مدل و دیتابیس در حال اجرا، Migration یا `--fields` بخواند و همان Metadata را برای DTO، Ruleهای Validation، Resource، Test و Swagger استفاده کند.

## چرا این پکیج متفاوت است؟

- **خروجی شفاف** — هیچ جادوی Runtime پشت کد نیست؛ فایل واقعی Laravel ساخته می‌شود.
- **معماری لایه‌ای** — Repository، Service، DTO، Action و لایه‌ی HTTP می‌توانند هماهنگ ساخته شوند.
- **تشخیص Schema** — Metadata از Runtime، Migration یا تعریف مستقیم CLI قابل استخراج است.
- **Regeneration امن** — بدون `--force` فایل موجود بازنویسی نمی‌شود.
- **OpenAPI داخلی** — تولید JSON و Swagger UI مستقل بدون نیاز به L5-Swagger.
- **قابل پیکربندی** — Namespace، مسیرها، نوع Controller، ظاهر Swagger و Security قابل تغییرند.

::: tip سازگاری فعلی
نسخه‌ی فعلی با Laravel 10 تا 13 و PHP 8.1 تا 8.5 سازگار است.
:::

از [نصب](/fa/getting-started/installation) شروع کن یا مستقیماً برو سراغ [`make:module`](/fa/module/overview).
