---
title: پیکربندی
lang: fa
---

# پیکربندی

برای داشتن Config پروژه‌ای:

```bash
php artisan vendor:publish --tag=module-generator
```

ساختار اصلی فایل:

```php
return [
    'base_namespace' => 'App',
    'paths' => [/* مسیر فایل‌های تولیدی */],
    'tests' => ['feature' => 'tests/Feature'],
    'defaults' => [/* رفتار make:module */],
    'swagger' => [/* ظاهر، Spec و Security */],
    'logging_channel' => env('MODULE_GENERATOR_LOG_CHANNEL'),
];
```

Default فعلی Controller، Feature Test، Resource، DTO و Provider را روشن دارد و `controller_type` روی `api` است؛ پس یک `make:module` ساده هم از رفتار API استفاده می‌کند.

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

Flagهای CLI از Config اولویت بالاتری دارند؛ البته صفحه‌ی `--all` را برای ترتیب اجرای Full Stack هم ببین.
