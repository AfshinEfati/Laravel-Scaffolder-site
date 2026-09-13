---
title: --from-migration / -fm
lang: en
---

# `--from-migration` / `-fm`

Tell the generator which migration to inspect for schema metadata.

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_01_01_000000_create_products_table.php
```

Short form:

```bash
php artisan make:module Product \
  -fm=database/migrations/2026_01_01_000000_create_products_table.php
```

The option accepts a migration path or hint and passes it to the migration field parser.

## Why use it?

It is useful when:

- the model does not exist yet;
- the database is not available in the current environment;
- runtime inspection cannot discover columns;
- you want to point at a specific migration instead of relying on automatic lookup.

The parser can extract field and relationship metadata that is later reused by Form Requests, DTOs, Resources, tests and Swagger generation.

## Model-less generation

Without a model, `make:module` requires explicit schema information. A migration hint satisfies that requirement:

```bash
php artisan make:module InventoryItem \
  --api \
  --from-migration=database/migrations/2026_09_01_120000_create_inventory_items_table.php
```

## Interaction with `--fields`

If valid `--fields` definitions are also supplied, inline schema wins and the command does not merge migration metadata into it.

```bash
php artisan make:module Product \
  --from-migration=database/migrations/create_products_table.php \
  --fields="name:string,price:numeric"
```

In that command, `--fields` is the effective schema source.

::: info
When no explicit `--fields` value is present, the generator can also attempt automatic migration parsing as a fallback for an existing model.
:::
