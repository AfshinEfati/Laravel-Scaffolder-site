---
title: How field discovery works
lang: en
---

# How field discovery works

Schema metadata powers DTO properties, Form Request rules, Resource output, generated relations, feature-test payloads and Swagger documentation.

## Discovery order

### 1. Explicit inline schema

When `--fields` contains definitions, the command treats them as an explicit schema and keeps that metadata intact.

```bash
php artisan make:module Product --fields="name:string,price:numeric"
```

Runtime and migration fields are not merged on top of this explicit definition.

### 2. Runtime model/database inspection

When a valid Eloquent model exists, `RuntimeFieldParser` attempts to inspect its table and fields. Model fillable information is also used to align generated field metadata.

### 3. Migration parsing

Without inline schema, migration metadata is parsed and merged with runtime metadata when available. You may supply an explicit migration hint with `--from-migration` or allow automatic lookup/fallback.

## Relations

Runtime and migration relation metadata are merged alongside fields. Foreign-key information can also create relation hints when schema information is rebuilt around fillable fields.

## Failure behavior

A normal generation with no model, no inline schema and no explicit migration hint fails early. This prevents the generator from pretending it knows a model schema that does not exist.

Swagger-only generation is an exception because it can use route-oriented information without building the normal application stack.
