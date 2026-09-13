---
title: swagger:generate
lang: fa
---

# `swagger:generate`

OpenAPI JSON برنامه را از Routeها و Controllerهای Laravel تولید می‌کند:

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

Spec تولیدشده `openapi: 3.0.0` دارد و شامل Info، Serverها، Pathهای پیدا شده و Security Schemeهای Config است.

```bash
php artisan swagger:generate \
  --title="Commerce API" \
  --version=2.4.0 \
  --host=https://api.example.com
```

اگر `--host` مشخص نشود، مقدار `config('app.url')` استفاده می‌شود.

مسیر پیش‌فرض از Config مربوط به Spec می‌آید؛ قابل Override است:

```bash
php artisan swagger:generate --output=storage/docs/openapi.json
```

Generator روی Routeهای API تمرکز دارد و Routeهای رایج مربوط به Sanctum، Broadcasting و خود Docs/Swagger را کنار می‌گذارد.
