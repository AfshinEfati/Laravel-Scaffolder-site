---
title: نصب
lang: fa
---

# نصب

پکیج را با Composer نصب کن:

```bash
composer require efati/laravel-scaffolder
```

Package Discovery لاراول به‌صورت خودکار `Efati\ModuleGenerator\ModuleGeneratorServiceProvider` را ثبت می‌کند و در حالت معمول نیازی به ثبت دستی Provider نیست.

## Publish فایل‌های پایه

```bash
php artisan vendor:publish --tag=module-generator
```

این دستور می‌تواند فایل‌های زیر را داخل پروژه ایجاد کند:

```text
app/Repositories/Eloquent/BaseRepository.php
app/Repositories/Contracts/BaseRepositoryInterface.php
app/Repositories/Criteria/CriteriaInterface.php
app/Services/BaseService.php
app/Services/Contracts/BaseServiceInterface.php
app/Helpers/ApiResponseHelper.php
config/module-generator.php
```

برای Publish کردن Stubهای Generator:

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

قبل از تغییر Templateها صفحه‌ی [Publish و Stub سفارشی](/fa/getting-started/publishing) را ببین.
