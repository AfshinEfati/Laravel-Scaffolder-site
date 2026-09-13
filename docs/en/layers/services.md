---
title: Services
lang: en
---

# Services

Every normal module includes a service contract and concrete service.

```text
app/Services/Contracts/ProductServiceInterface.php
app/Services/ProductService.php
```

The concrete class extends the published `BaseService` and implements the generated contract.

## Base operations

The published base service provides:

```text
index()
show(id)
store(payload)
update(id, payload)
destroy(id)
findDynamic(...)
getByDynamic(...)
repository()
```

It delegates persistence to the repository and normalizes array/data-object payloads before storing or updating.

## DTO-aware payloads

With DTO enabled, the generated Product service explicitly understands `ProductDTO|array` and converts a DTO through `toArray()` before delegating:

```bash
php artisan make:module Product
```

With DTO disabled:

```bash
php artisan make:module Product --no-dto
```

store/update are generated for array-based data.

## Provider interaction

Normally the service constructor type-hints `ProductRepositoryInterface`. With `--no-provider`, the generator switches to the concrete `ProductRepository` so the generated service does not depend on a binding that was intentionally skipped.
