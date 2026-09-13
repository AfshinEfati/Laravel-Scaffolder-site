---
title: --actions
lang: en
---

# `--actions`

Generate focused CRUD Action classes for the module.

```bash
php artisan make:module Product --actions
```

Actions are written below the configured `paths.actions` directory and grouped by module. A generated module can include operation classes for listing, showing, creating, updating and deleting records.

```text
app/Actions/Product/
├── CreateProductAction.php
├── DeleteProductAction.php
├── ListProductAction.php
├── ShowProductAction.php
└── UpdateProductAction.php
```

The exact generated set follows the package stubs and current generator behavior.

## DTO-aware actions

When DTO generation is enabled, create/update actions are generated to work with the module DTO. When `--no-dto` is used, the generator switches the affected signatures to array-based data instead.

```bash
# DTO-based actions
php artisan make:module Product --actions

# Array-based actions
php artisan make:module Product --actions --no-dto
```

## API mode enables actions automatically

You usually do not need `--actions` with an API controller:

```bash
php artisan make:module Product --api
```

API mode enables actions unless `--no-actions` is explicitly supplied.

```bash
php artisan make:module Product --api --no-actions
```

`--all` / `--full` always re-enable actions as part of the complete stack.
