---
title: پیکربندی
lang: fa
---

# پیکربندی

Config را Publish کنید:

```bash
php artisan vendor:publish --tag=module-generator
```

`config/module-generator.php` Namespace، مسیرهای خروجی، Defaultهای Command، Swagger UI و Logging Channel را کنترل می‌کند.

## Namespace پایه

```php
'base_namespace' => 'App',
```

Modelها به‌صورت پیش‌فرض زیر `{base_namespace}\Models` جست‌وجو می‌شوند.

## مسیرها

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

Test Path:

```php
'tests' => ['feature' => 'tests/Feature'],
```

## Defaultهای `make:module`

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

CLI Optionها روی این مقادیر اعمال می‌شوند. API Mode علاوه بر `controller_type`، Request و Action را هم فعال می‌کند مگر Action صریحاً خاموش شود.

## Swagger

بخش `swagger` شامل Theme، Color، Font، Dark Mode، Display، Host/Port، Spec Path و Security Schemeهاست.

## Logging

```php
'logging_channel' => env('MODULE_GENERATOR_LOG_CHANNEL'),
```

برای Infrastructure مربوط به Actionهای تولیدشده قابل استفاده است.
