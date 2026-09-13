---
title: تنظیمات
lang: fa
---

# تنظیمات

اگر مسیر پوشه‌ها یا رفتار پیش‌فرض Scaffolder با ساختار پروژه‌ات یکی نیست، Config را Publish کن:

```bash
php artisan vendor:publish --tag=module-generator
```

فایل اصلی تنظیمات این است:

```text
config/module-generator.php
```

از همین فایل می‌توانی Namespace پایه، مسیر خروجی لایه‌ها، رفتار پیش‌فرض `make:module` و تنظیمات Swagger را عوض کنی.

## Namespace پایه

```php
'base_namespace' => 'App',
```

Scaffolder به‌صورت پیش‌فرض Modelها را زیر `{base_namespace}\Models` پیدا می‌کند. برای اکثر پروژه‌های Laravel همان `App` مناسب است.

## مسیر فایل‌های تولیدشده

```php
'paths' => [
    'repository' => [
        'eloquent' => 'Repositories/Eloquent',
        'contracts' => 'Repositories/Contracts',
    ],
    'service' => [
        'concretes' => 'Services',
        'contracts' => 'Services/Contracts',
    ],
    'dto' => 'DTOs',
    'provider' => 'Providers',
    'controller' => [
        'api' => 'Http/Controllers/Api/V1',
        'web' => 'Http/Controllers',
    ],
    'resource' => 'Http/Resources',
    'form_request' => 'Http/Requests',
    'actions' => 'Actions',
    'docs' => 'Docs',
],
```

مسیر Feature Test هم جداست:

```php
'tests' => ['feature' => 'tests/Feature'],
```

اگر پروژه‌ات مثلاً Controllerها را داخل `Http/Controllers/Admin` یا Serviceها را داخل مسیر دیگری نگه می‌دارد، لازم نیست Generator را دست‌کاری کنی؛ همین Pathها را تغییر بده.

## رفتار پیش‌فرض `make:module`

```php
'defaults' => [
    'with_controller' => true,
    'with_form_requests' => false,
    'with_unit_test' => true,
    'with_resource' => true,
    'with_dto' => true,
    'with_provider' => true,
    'with_actions' => false,
    'controller_middleware' => [],
    'controller_type' => 'api',
],
```

Optionهای CLI روی همین Defaultها اعمال می‌شوند. مثلاً حالت `--api` فقط نوع Controller را عوض نمی‌کند؛ Request و Action را هم فعال می‌کند، مگر اینکه Action را صریحاً با `--no-actions` خاموش کرده باشی.

## تنظیمات Swagger

بخش `swagger` تنظیمات Theme، رنگ‌ها، فونت، Dark Mode، عنوان UI، Host و Port، مسیر `swagger.json` و Security Schemeها را نگه می‌دارد. جزئیات کاملش در بخش [Swagger](/fa/swagger/) آمده.

## Logging

```php
'logging_channel' => env('MODULE_GENERATOR_LOG_CHANNEL'),
```

اگر برای Actionهای تولیدشده Logging اختصاصی می‌خواهی، Channel را از اینجا یا ENV تنظیم کن.
