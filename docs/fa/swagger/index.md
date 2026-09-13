---
title: OpenAPI / Swagger
lang: fa
---

# OpenAPI / Swagger

Laravel Scaffolder یک Flow مستقل برای OpenAPI و Swagger UI دارد و برای Initialize کردن UI، ساخت JSON Spec یا Serve محلی به L5-Swagger وابسته نیست.

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## دستورات

| دستور | کاربرد |
| --- | --- |
| `swagger:init` | Assetهای UI را در `storage/swagger-ui` آماده می‌کند. |
| `swagger:generate` | OpenAPI 3.0 JSON را از Route/Controllerها می‌سازد. |
| `swagger:ui` | UI مستقل را با PHP Built-in Server اجرا می‌کند. |
| `swagger:config` | تنظیمات UI و Environment را مدیریت می‌کند. |
| `make:swagger` | Generator قدیمی Annotation؛ Deprecated و برای Compatibility. |

## دو مسیر مستندسازی

```bash
php artisan make:module Product --swagger
php artisan swagger:generate
```

اولی بخشی از Flow ماژول است؛ دومی Spec سراسری JSON را از Routeهای برنامه تولید می‌کند.

## Serve کردن Swagger از Routeهای Laravel

پکیج `Efati\ModuleGenerator\Http\Controllers\SwaggerUIController` را هم دارد. اگر می‌خواهید Docs به‌جای `swagger:ui` از خود Application Serve شود:

```php
use Efati\ModuleGenerator\Http\Controllers\SwaggerUIController;
use Illuminate\Support\Facades\Route;

Route::prefix('docs')->group(function () {
    Route::get('/', [SwaggerUIController::class, 'index']);
    Route::get('/swagger.json', [SwaggerUIController::class, 'spec']);
});
```

`index()` فایل `storage/swagger-ui/index.html` و `spec()` Spec تنظیم‌شده را Serve می‌کند. اگر `swagger.spec.secure` فعال باشد، Action مربوط به Spec Guardهای Laravel را برای User احراز هویت‌شده بررسی می‌کند.

در سورس Trait دیگری به نام `RegistersSwaggerRoutes` نیز وجود دارد که Endpointهای `/docs` و `/docs/swagger.json` را با همان Conventionها Register می‌کند. Service Provider پکیج این Routeها را خودکار Publish/Register نمی‌کند؛ در نتیجه تصمیم برای Expose کردن مستندات دست خود Application می‌ماند.

## Config

Theme، Color، Font، Dark Mode، Server، Spec و Security Schemeها زیر `swagger` در `config/module-generator.php` قرار دارند.
