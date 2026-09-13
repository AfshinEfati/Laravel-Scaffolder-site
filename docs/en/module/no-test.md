---
title: --no-test / -nt
lang: en
---

# `--no-test` / `-nt`

Skip generated feature tests.

```bash
php artisan make:module Product --no-test
```

This only controls scaffolder-generated test output; it does not change application runtime behavior.

## Precedence

`--tests` is evaluated after `--no-test`, so the positive option wins when both are supplied:

```bash
php artisan make:module Product --no-test --tests
```

A feature test is generated.

`--all` / `--full` also re-enable test generation.
