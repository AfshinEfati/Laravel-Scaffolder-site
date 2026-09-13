---
title: Schema discovery
lang: en
---

# How field discovery works

The command can build field metadata from three sources.

## 1. Explicit `--fields`

Inline schema metadata has the highest priority and is kept intact.

## 2. Runtime model/database inspection

When `App\Models\Product` exists and the database is available, `RuntimeFieldParser` can inspect table columns and relationships.

## 3. Migration parsing

The command parses a matching migration automatically or uses the migration supplied through `--from-migration`.

When runtime and migration metadata both exist, fields and relations are merged. If the model defines `$fillable`, generated metadata is aligned to those columns where appropriate.

```bash
php artisan make:module Product --from-migration=create_products_table
```
