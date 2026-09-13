---
title: --no-swagger
lang: en
---

# `--no-swagger`

Explicitly disable module-level Swagger/OpenAPI annotation generation when Swagger would otherwise be enabled by configuration:

```bash
php artisan make:module Product --no-swagger
```

::: warning Full-stack precedence
In the current implementation, `--all` and `--full` enable Swagger after the individual skip switches are evaluated. Therefore `--all --no-swagger` still generates Swagger output. Use a non-full-stack combination when you need to omit it.
:::

If your project only needs route-driven JSON output, you can use [`swagger:generate`](/en/swagger/generate) independently of module annotations.
