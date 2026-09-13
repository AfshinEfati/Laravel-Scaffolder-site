---
title: --requests
lang: en
---

# `--requests` / `-r`

Generate `Store...Request` and `Update...Request` classes:

```bash
php artisan make:module Product --requests
```

Request rules are schema-aware. When field information is available, the generator maps types, nullability, uniqueness and foreign-key metadata into Laravel validation rules.

API mode enables requests automatically:

```bash
php artisan make:module Product --api
```

For the strongest generated validation, provide an actual migration/model or explicit `--fields` metadata.
