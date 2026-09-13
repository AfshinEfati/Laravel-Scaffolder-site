---
title: --tests / -t
lang: en
---

# `--tests` / `-t`

Force feature-test generation for a module.

```bash
php artisan make:module Product --tests
```

Short form:

```bash
php artisan make:module Product -t
```

The default destination is configured by:

```php
'tests' => [
    'feature' => 'tests/Feature',
],
```

so a Product module normally creates:

```text
tests/Feature/ProductTest.php
```

## Schema-aware payloads

The test generator receives the parsed field metadata. This lets it create a more useful CRUD test starting point instead of an empty class.

```bash
php artisan make:module Product --tests \
  --fields="name:string,price:numeric,is_active:boolean"
```

After generation, run the test normally:

```bash
php artisan test --filter=ProductTest
```

## Interaction with `--no-test`

The command first applies `--no-test`, then applies `--tests`. If both are present, the explicit positive `--tests` switch wins.

```bash
php artisan make:module Product --no-test --tests
```

will generate the feature test.

`--all` and `--full` also enable tests regardless of earlier disable switches.

::: warning
Generated tests are scaffolding. Add your authorization cases, domain invariants, failure paths and project-specific assertions after generation.
:::
