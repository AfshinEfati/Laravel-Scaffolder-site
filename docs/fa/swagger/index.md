---
title: OpenAPI / Swagger
lang: fa
---

# OpenAPI / Swagger

Laravel Scaffolder یک Flow مستقل برای OpenAPI و Swagger UI دارد و برای Initialize کردن UI، ساخت JSON Spec یا Serve محلی به L5-Swagger وابسته نیست.

Flow معمول:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## دستورات

| دستور | کاربرد |
| --- | --- |
| `swagger:init` | Assetهای Swagger UI را در `storage/swagger-ui` آماده می‌کند. |
| `swagger:generate` | OpenAPI 3.0 JSON را از Routeها و Controllerهای برنامه می‌سازد. |
| `swagger:ui` | UI مستقل را با PHP Built-in Server اجرا می‌کند. |
| `swagger:config` | تنظیمات Theme و ظاهر را نمایش یا تغییر می‌دهد. |
| `make:swagger` | Generator قدیمی Annotation؛ Deprecated و فقط برای Compatibility. |

## دو مسیر مستندسازی

```bash
php artisan make:module Product --swagger
php artisan swagger:generate
```

اولی بخشی از `make:module` است؛ دومی کل برنامه را برای تولید Spec مستقل بررسی می‌کند.

تنظیمات Swagger زیر کلید `swagger` در `config/module-generator.php` قرار دارند: Theme، رنگ‌ها، Fontها، Dark Mode، Host/Port، مسیر Spec و Security Schemeها.
