---
title: swagger:generate
lang: fa
---

# `swagger:generate`

این دستور Routeهای Laravel را بررسی می‌کند و یک OpenAPI 3.0 JSON برای کل API می‌سازد:

```bash
php artisan swagger:generate
```

Signature:

```text
swagger:generate
  --output=
  --title="API Documentation"
  --version=1.0.0
  --host=
```

## خروجی شامل چه چیزهایی است؟

Spec تولیدشده شامل `info`، Serverها، Pathهای تشخیص‌داده‌شده، Componentها و Security Schemeهای Config است.

مثلاً:

```bash
php artisan swagger:generate \
  --title="Commerce API" \
  --version=2.4.0 \
  --host=https://api.example.com
```

اگر `--host` ندهی، `config('app.url')` استفاده می‌شود.

## مسیر فایل خروجی

به‌صورت پیش‌فرض Path و Filename از این بخش Config می‌آیند:

```php
'spec' => [
    'path' => env('SWAGGER_SPEC_PATH', 'storage/swagger-ui'),
    'filename' => env('SWAGGER_SPEC_FILENAME', 'swagger.json'),
],
```

اما برای یک اجرا می‌توانی مسیر را Override کنی:

```bash
php artisan swagger:generate --output=storage/docs/openapi.json
```

## چه Routeهایی وارد Spec می‌شوند؟

Generator روی Routeهای API تمرکز دارد و Routeهای داخلی رایج مثل Sanctum، Broadcasting و خود Docs/Swagger را کنار می‌گذارد تا مستندات با Endpointهای جانبی پر نشوند.

::: tip
اگر فقط Doc مربوط به یک ماژول را می‌خواهی، `make:module Product --swagger` Flow دیگری است. `swagger:generate` Spec سراسری برنامه را می‌سازد.
:::
