---
title: --no-swagger
lang: en
---

# `--no-swagger`

Disable module-level Swagger/OpenAPI annotation generation:

```bash
php artisan make:module Product --all --no-swagger
```

This is useful when your project relies only on route-driven [`swagger:generate`](/en/swagger/generate) output or maintains OpenAPI documents separately.
