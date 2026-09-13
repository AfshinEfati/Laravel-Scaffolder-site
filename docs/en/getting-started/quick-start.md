---
title: Quick start
lang: en
---

# Quick start

Create a model and migration first:

```bash
php artisan make:model Product -m
```

Then generate the module:

```bash
php artisan make:module Product
```

The default package configuration uses API controllers. API mode automatically enables form requests and actions unless you explicitly disable actions.

For a complete stack including policies and Swagger documentation:

```bash
php artisan make:module Product --all
```

You can also generate without an existing model by supplying field metadata:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

Or point the generator at a migration:

```bash
php artisan make:module Product --from-migration=create_products_table
```

Generated files are never silently overwritten. Use `--force` only when you intentionally want regeneration.
