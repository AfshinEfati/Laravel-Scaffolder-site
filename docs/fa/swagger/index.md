---
title: OpenAPI / Swagger
lang: fa
---

# OpenAPI / Swagger

Laravel Scaffolder برای Swagger دو Flow جدا دارد که بهتر است از اول تفاوتشان روشن باشد.

## Flow اول: مستندات سراسری پروژه

برای اینکه از Routeهای Laravel یک OpenAPI JSON بسازی و آن را داخل Swagger UI ببینی:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

این Flow به L5-Swagger وابسته نیست. UI داخل خود پکیج است و Spec هم توسط Scaffolder ساخته می‌شود.

| دستور | چه کاری می‌کند؟ |
| --- | --- |
| `swagger:init` | فایل‌های Swagger UI را داخل `storage/swagger-ui` آماده می‌کند. |
| `swagger:generate` | از Routeها و Controllerها یک OpenAPI 3.0 JSON می‌سازد. |
| `swagger:ui` | همان UI را با PHP Built-in Server اجرا می‌کند. |
| `swagger:config` | تنظیمات رایج UI و ENV را مدیریت می‌کند. |
| `make:swagger` | Command قدیمی و Deprecated برای Flow قبلی مستندات. |

## Flow دوم: Swagger مربوط به یک ماژول

این دستور بخشی از `make:module` است:

```bash
php artisan make:module Product --swagger
```

کارش با `swagger:generate` یکی نیست. `--swagger` Doc همان ماژول را در Flow ساخت Scaffolder تولید می‌کند، در حالی که `swagger:generate` Routeهای کل Application را می‌خواند و یک Spec سراسری JSON می‌سازد.

## اگر نمی‌خواهی سرور جدا اجرا کنی

پکیج Controller آماده‌ای برای Serve کردن UI و Spec از خود Laravel دارد:

```php
use Efati\ModuleGenerator\Http\Controllers\SwaggerUIController;
use Illuminate\Support\Facades\Route;

Route::prefix('docs')->group(function () {
    Route::get('/', [SwaggerUIController::class, 'index']);
    Route::get('/swagger.json', [SwaggerUIController::class, 'spec']);
});
```

`index()` فایل `storage/swagger-ui/index.html` را برمی‌گرداند و `spec()` فایل Spec تنظیم‌شده را Serve می‌کند.

Trait دیگری به نام `RegistersSwaggerRoutes` هم در پکیج وجود دارد و Convention مشابهی برای `/docs` و `/docs/swagger.json` دارد. Service Provider این Routeها را خودکار Public نمی‌کند؛ اینکه مستندات را کجا و با چه Middlewareای Expose کنی تصمیم خود Application است.

## از کجا شروع کنم؟

اگر فقط می‌خواهی سریع UI را ببینی:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui --refresh
```

برای Theme، رنگ‌ها و امنیت Spec هم صفحه‌های بعدی همین بخش را ببین.
