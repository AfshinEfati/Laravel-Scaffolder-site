---
title: --no-swagger
lang: en
---

# `--no-swagger`

Disable module-level Swagger/OpenAPI documentation generation.

```bash
php artisan make:module Product --no-swagger
```

Use it when Swagger is enabled in your project defaults but a specific module should be generated without documentation.

During a normal build, `--no-swagger` is applied after `--swagger` and therefore wins if both switches are present.

```bash
php artisan make:module Product --swagger --no-swagger
```

No module Swagger file is generated.

`--all` / `--full` are applied later and re-enable Swagger.

This option only controls Swagger generation performed by `make:module`; it does not disable the standalone `swagger:*` commands.
