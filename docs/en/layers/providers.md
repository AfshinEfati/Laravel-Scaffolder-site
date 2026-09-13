---
title: Providers & bindings
lang: en
---

# Providers & bindings

The Provider generator creates a module provider that binds repository and service contracts to their concrete implementations.

```text
app/Providers/ProductServiceProvider.php
```

Conceptually it owns bindings such as:

```php
$this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
$this->app->bind(ProductServiceInterface::class, ProductService::class);
```

## Automatic registration

The generator supports both common Laravel application layouts.

If `bootstrap/providers.php` exists, it inserts the provider class into that returned provider array. Otherwise it attempts the older `config/app.php` providers array.

Registration is idempotent: it checks whether the FQCN already exists before inserting it.

## Skip provider generation

```bash
php artisan make:module Product --no-provider
```

The command warns that bindings are now your responsibility, and service generation switches to the concrete repository type for that generated module.

`--all` / `--full` re-enable provider generation.
