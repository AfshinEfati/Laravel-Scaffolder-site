---
title: OpenAPI / Swagger
lang: en
---

# OpenAPI / Swagger

Laravel Scaffolder includes a standalone OpenAPI workflow. It does not require L5-Swagger to initialize the UI, generate the JSON specification or serve the documentation locally.

A typical workflow is:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

Then open the host/port printed by the UI command.

## Commands

| Command | Purpose |
| --- | --- |
| `swagger:init` | Install the bundled Swagger UI assets into `storage/swagger-ui`. |
| `swagger:generate` | Build an OpenAPI 3.0 JSON specification from application routes/controllers. |
| `swagger:ui` | Serve the standalone UI with PHP's built-in server. |
| `swagger:config` | Inspect or change UI-related environment settings. |
| `make:swagger` | Legacy annotation generator; kept for compatibility and deprecated. |

## Two documentation paths

Laravel Scaffolder currently supports both module-level documentation and standalone specification generation.

```bash
# Module-oriented documentation during scaffolding
php artisan make:module Product --swagger

# Application-wide JSON specification
php artisan swagger:generate
```

The first participates in `make:module`; the second scans routes and produces a JSON OpenAPI document.

## Configuration

Swagger behavior is configured under `swagger` in `config/module-generator.php`, including theme, colors, fonts, dark mode, server defaults, output path and security schemes.
