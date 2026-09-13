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

Full-stack mode enables controller, requests, feature tests, API resource, provider, actions, policy and Swagger documentation and forces API mode. DTO generation remains governed by its normal default unless explicitly disabled before generation logic, while the shipped default keeps DTOs enabled.

Use this when you want the package's complete opinionated feature structure in one command.
