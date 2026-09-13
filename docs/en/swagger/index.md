---
title: OpenAPI / Swagger
lang: en
---

# OpenAPI / Swagger

Laravel Scaffolder includes a standalone OpenAPI workflow. It does not require L5-Swagger to initialize the UI, generate the JSON specification or serve documentation locally.

A typical workflow is:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Commands

| Command | Purpose |
| --- | --- |
| `swagger:init` | Install bundled Swagger UI assets into `storage/swagger-ui`. |
| `swagger:generate` | Build an OpenAPI 3.0 JSON specification from application routes/controllers. |
| `swagger:ui` | Serve the standalone UI with PHP's built-in server. |
| `swagger:config` | Inspect or change UI-related environment settings. |
| `make:swagger` | Legacy annotation generator; deprecated and kept for compatibility. |

## Two documentation paths

```bash
# Module-oriented documentation during scaffolding
php artisan make:module Product --swagger

# Application-wide JSON specification
php artisan swagger:generate
```

The first participates in `make:module`; the second scans application routes and produces a standalone JSON OpenAPI document.

## Serve Swagger through Laravel routes

The package also ships `Efati\ModuleGenerator\Http\Controllers\SwaggerUIController`. You can wire it into your own route file when documentation should be served by Laravel instead of `swagger:ui`:

```php
use Efati\ModuleGenerator\Http\Controllers\SwaggerUIController;
use Illuminate\Support\Facades\Route;

Route::prefix('docs')->group(function () {
    Route::get('/', [SwaggerUIController::class, 'index']);
    Route::get('/swagger.json', [SwaggerUIController::class, 'spec']);
});
```

`index()` serves `storage/swagger-ui/index.html`; `spec()` serves the configured specification path. If `swagger.spec.secure` is enabled, the specification action checks the configured Laravel guards for an authenticated user.

The source also includes `RegistersSwaggerRoutes`, a route-registration helper trait that creates `/docs` and `/docs/swagger.json` endpoints around the same storage/config conventions. Route registration is not performed automatically by the package service provider, so your application remains in control of exposing documentation routes.

## Configuration

Swagger behavior is configured under `swagger` in `config/module-generator.php`, including theme, colors, fonts, dark mode, server defaults, output path and security schemes.
