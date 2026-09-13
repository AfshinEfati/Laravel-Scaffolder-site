---
title: نصب
lang: fa
---

# نصب

Laravel Scaffolder را با Composer نصب کنید:

```bash
composer require efati/laravel-scaffolder
```

Laravel با Package Discovery، `Efati\ModuleGenerator\ModuleGeneratorServiceProvider` را خودکار Register می‌کند و در حالت معمول نیازی به ثبت دستی Provider نیست.

## نیازمندی‌ها

```text
PHP      8.1, 8.2, 8.3, 8.4, 8.5
Laravel  10, 11, 12, 13
Composer 2.x پیشنهاد می‌شود
```

## Publish فایل‌های پایه

```bash
php artisan vendor:publish --tag=module-generator
```

فایل‌های زیر وارد پروژه می‌شوند:

```text
config/module-generator.php
app/Repositories/Eloquent/BaseRepository.php
app/Repositories/Contracts/BaseRepositoryInterface.php
app/Repositories/Criteria/CriteriaInterface.php
app/Services/BaseService.php
app/Services/Contracts/BaseServiceInterface.php
app/Helpers/ApiResponseHelper.php
```

## Publish Stubهای قابل شخصی‌سازی

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

Stubها در این مسیر قرار می‌گیرند:

```text
resources/stubs/module-generator/
```

## بررسی نصب

```bash
php artisan list | grep -E 'make:module|swagger:'
```

باید `make:module` و دستورهای `swagger:init`، `swagger:generate`، `swagger:ui` و `swagger:config` را ببینید. `make:swagger` قدیمی نیز برای Compatibility ثبت شده است.
