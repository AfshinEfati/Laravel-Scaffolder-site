---
title: Actions
lang: en
---

# Actions

Action generation creates a shared base action plus focused operations for the module.

```bash
php artisan make:module Product --actions
```

With default paths:

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

## Service-oriented operations

Each generated action coordinates the Product service for one operation. The additional `ListWithRelations` action gives relation-aware list flows a separate application entry point instead of overloading the normal list action.

## DTO mode

Create/update action payload docs and imports change according to DTO mode:

```bash
php artisan make:module Product --actions --no-dto
```

Without DTOs, those actions use array-based payloads.

## API default

API mode automatically enables Actions unless `--no-actions` is supplied.

```bash
php artisan make:module Product --api --no-actions
```

The `BaseAction` stub also provides common action infrastructure such as access to the configured logging channel.
