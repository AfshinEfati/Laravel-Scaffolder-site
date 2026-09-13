---
title: --from-migration
lang: en
---

# `--from-migration` / `-fm`

Point the generator at a migration file or a migration hint:

```bash
php artisan make:module Product --from-migration=create_products_table
```

or:

```bash
php artisan make:module Product -fm database/migrations/2026_01_01_000000_create_products_table.php
```

The migration parser attempts to discover columns, nullability, relationships and table metadata and then reuses that information across DTOs, requests, resources, Swagger and tests.

If both runtime inspection and migration parsing provide information, the command merges the metadata and aligns it with model `$fillable` fields when available.
