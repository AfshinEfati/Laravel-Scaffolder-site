---
title: --swagger / -sg
lang: en
---

# `--swagger` / `-sg`

Generate module-level OpenAPI documentation.

```bash
php artisan make:module Product --swagger
```

Short form:

```bash
php artisan make:module Product -sg
```

## Swagger-only mode

When `--swagger` is the only module-shaping option, the command enters a documentation-only path. It skips the normal repository/service/controller stack and generates the Swagger document for the module.

This is useful after routes or a model change when you only want to refresh module documentation:

```bash
php artisan make:module Product --swagger --force
```

## Swagger as part of a module build

When Swagger is enabled together with a normal module build, the command ensures API controller mode is active.

```bash
php artisan make:module Product --api --swagger
```

or simply:

```bash
php artisan make:module Product --all
```

The generator combines route inspection, schema metadata and controller information to build the documentation under the configured `paths.docs` directory.

## Disable it

```bash
php artisan make:module Product --no-swagger
```

During a normal build `--no-swagger` turns it off. `--all` / `--full` are applied later and enable Swagger again.

::: tip
Module-level `--swagger` is different from the standalone `swagger:generate` command. See the OpenAPI / Swagger section for the complete JSON and standalone UI workflow.
:::
