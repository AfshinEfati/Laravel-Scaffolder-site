---
title: --tests / -t
lang: en
---

# `--tests` / `-t`

Force feature-test generation for a module.

```bash
php artisan make:module Product --tests
```

The default destination produces:

```text
tests/Feature/ProductCrudTest.php
```

The generated class is `ProductCrudTest` and receives schema metadata for realistic CRUD payload scaffolding.

Run it with:

```bash
php artisan test --filter=ProductCrudTest
```

## Interaction with `--no-test`

`--tests` is evaluated after `--no-test`, so the positive option wins when both are supplied.

`--all` / `--full` also enable tests regardless of an earlier `--no-test`.
