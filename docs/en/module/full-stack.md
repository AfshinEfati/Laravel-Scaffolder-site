---
title: --all and --full
lang: en
---

# `--all` / `--full`

Both switches request the complete API-oriented module stack:

```bash
php artisan make:module Product --all
```

or:

```bash
php artisan make:module Product --full
```

Full-stack mode enables controller, requests, feature tests, API resource, provider, actions, policy and Swagger documentation and forces API mode. DTO generation keeps its previously resolved value; with the shipped defaults it remains enabled, while `--no-dto` can keep it disabled.

::: warning Current precedence
The full-stack block runs after most individual skip switches. As implemented today, `--all/--full` turns controller, requests, tests, resource, provider, actions, policy and Swagger back on even if their `--no-*` switch was also supplied. `--no-dto` is the notable exception because full-stack does not force DTOs back on.
:::
