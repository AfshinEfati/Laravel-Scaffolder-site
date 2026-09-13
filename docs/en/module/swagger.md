---
title: --swagger
lang: en
---

# `--swagger` / `-sg`

Generate module-level Swagger/OpenAPI annotations:

```bash
php artisan make:module Product --swagger
```

When Swagger is requested together with normal module generation, API controller mode is enabled automatically.

There is also a useful Swagger-only behavior:

```bash
php artisan make:module Product --swagger
```

When `--swagger` is the only generation switch, the command skips controllers, resources, DTOs, providers, actions, policies, tests and requests and only creates the documentation class.

For route-driven JSON generation, see [`swagger:generate`](/en/swagger/generate).
