---
title: Troubleshooting
lang: en
---

# Troubleshooting

## Model not found

If the command cannot find `App\Models\Product`, create the model first or provide schema metadata:

```bash
php artisan make:model Product -m
# or
php artisan make:module Product --fields="name:string"
```

## Fields could not be inferred

Run migrations and make sure the configured database is reachable, or use `--from-migration` / `--fields` explicitly.

## Generated file already exists

This is intentional safe behavior. Review the file and only then use:

```bash
php artisan make:module Product --force
```

## Swagger UI is not initialized

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Interface cannot be resolved

If the module was generated with `--no-provider`, register repository/service bindings manually.
