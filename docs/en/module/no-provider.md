---
title: --no-provider / -np
lang: en
---

# `--no-provider` / `-np`

Skip the module service provider and automatic contract bindings.

```bash
php artisan make:module Product --no-provider
```

The command warns that repository/service bindings must be handled manually. It also generates the service with interface usage disabled for that module path, so the generated stack does not blindly depend on bindings that were never registered.

Use this when your project centralizes dependency bindings in an existing application provider.

```php
$this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
$this->app->bind(ProductServiceInterface::class, ProductService::class);
```

`--all` / `--full` re-enable provider generation and registration.
