---
title: --actions
lang: en
---

# `--actions`

Generate focused application Action classes for the module.

```bash
php artisan make:module Product --actions
```

With default paths the generator creates:

```text
app/Actions/BaseAction.php
app/Actions/Product/
├── ListProductAction.php
├── ShowProductAction.php
├── CreateProductAction.php
├── UpdateProductAction.php
├── DeleteProductAction.php
└── ListWithRelationsProductAction.php
```

## DTO-aware actions

When DTO generation is enabled, create/update actions import the module DTO and accept DTO-or-array payloads. When `--no-dto` is used, those generated signatures become array-based.

```bash
php artisan make:module Product --actions --no-dto
```

## API mode enables actions automatically

```bash
php artisan make:module Product --api
```

API mode enables actions unless `--no-actions` is explicitly supplied:

```bash
php artisan make:module Product --api --no-actions
```

`--all` / `--full` are applied later and re-enable actions.
