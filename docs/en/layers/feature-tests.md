---
title: Feature tests
lang: en
---

# Feature tests

The test generator creates a CRUD-oriented feature-test scaffold:

```text
tests/Feature/ProductCrudTest.php
```

The class name is `ProductCrudTest`.

## Schema-aware metadata

The generator receives explicit/discovered fields and normalizes metadata for booleans, integers/FKs, numerics, JSON, dates and UUIDs. This metadata is embedded in the generated test so CRUD payload generation can reflect the model shape.

It also builds a temporary test route segment and points it at the generated API controller namespace, including a controller subfolder when one was requested.

Run it with:

```bash
php artisan test --filter=ProductCrudTest
```

## Destination

```php
'tests' => [
    'feature' => 'tests/Feature',
],
```

controls the root destination.

::: warning
Generated feature tests are a starting point. Add project-specific authorization, validation failures, domain invariants and integration behavior.
:::
