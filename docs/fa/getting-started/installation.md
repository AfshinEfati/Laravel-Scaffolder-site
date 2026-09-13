---
title: نصب
lang: fa
---

# نصب

برای نصب Laravel Scaffolder فقط Composer لازم داری:

```bash
composer require efati/laravel-scaffolder
```

Laravel با Package Discovery، Service Provider پکیج را خودش پیدا می‌کند؛ در حالت عادی لازم نیست چیزی را دستی داخل `providers` ثبت کنی.

## نسخه‌های پشتیبانی‌شده

```text
PHP      8.1, 8.2, 8.3, 8.4, 8.5
Laravel  10, 11, 12, 13
Composer 2.x
```

## فایل‌های پایه را Publish کن

اگر می‌خواهی Base Repository، Base Service، Helper پاسخ API و Config داخل پروژه‌ی خودت باشند، این دستور را بزن:

```bash
php artisan vendor:publish --tag=module-generator
```

این فایل‌ها اضافه می‌شوند:

```text
config/module-generator.php
app/Repositories/Eloquent/BaseRepository.php
app/Repositories/Contracts/BaseRepositoryInterface.php
app/Repositories/Criteria/CriteriaInterface.php
app/Services/BaseService.php
app/Services/Contracts/BaseServiceInterface.php
app/Helpers/ApiResponseHelper.php
```

بعد از Publish، این فایل‌ها دیگر بخشی از کد پروژه‌ی تو هستند و می‌توانی متناسب با معماری پروژه تغییرشان بدهی.

## اگر می‌خواهی خروجی Generator را شخصی‌سازی کنی

Stubها را هم می‌توانی Publish کنی:

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

بعد از آن Templateها اینجا هستند:

```text
resources/stubs/module-generator/
```

## مطمئن شو نصب درست بوده

```bash
php artisan list | grep -E 'make:module|swagger:'
```

باید `make:module` و دستورهای `swagger:init`، `swagger:generate`، `swagger:ui` و `swagger:config` را ببینی. `make:swagger` هم هنوز برای پروژه‌هایی که از Flow قدیمی استفاده می‌کنند ثبت شده است.

حالا می‌توانی بروی سراغ [شروع سریع](/fa/getting-started/quick-start).
