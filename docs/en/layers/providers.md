---
title: Providers and bindings
lang: en
---

# Providers and bindings

A module provider binds generated contracts to concrete repository/service implementations.

```php
$this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
$this->app->bind(ProductServiceInterface::class, ProductService::class);
```

The generator also attempts to register the provider using the Laravel version's application/provider structure.

If you pass `--no-provider`, no automatic binding file is generated and you must register the interfaces yourself.
