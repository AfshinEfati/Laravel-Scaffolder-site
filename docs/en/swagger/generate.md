---
title: swagger:generate
lang: en
---

# `swagger:generate`

Generate the application OpenAPI JSON specification from Laravel routes and controllers.

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

The generated document declares OpenAPI `3.0.0` and includes API information, server entries, discovered paths and configured security schemes.

## Custom metadata

```bash
php artisan swagger:generate \
  --title="Commerce API" \
  --version=2.4.0 \
  --host=https://api.example.com
```

`--host` defaults to `config('app.url')` when omitted.

## Output location

By default the destination comes from the Swagger spec configuration. You can override it explicitly:

```bash
php artisan swagger:generate --output=storage/docs/openapi.json
```

The command creates the destination directory if it does not exist.

## Route filtering behavior

The generator focuses on API routes and ignores common documentation/framework route groups such as Sanctum, broadcasting and the docs/Swagger endpoints themselves.

Security schemes under `module-generator.swagger.security.schemes` are added to `components.securitySchemes` when configured.
