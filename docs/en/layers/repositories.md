---
title: Repositories
lang: en
---

# Repositories

Every normal `make:module` run generates a repository contract and Eloquent implementation.

```text
app/Repositories/Contracts/ProductRepositoryInterface.php
app/Repositories/Eloquent/ProductRepository.php
```

The contract extends the published `BaseRepositoryInterface`; the concrete repository extends `BaseRepository`, implements the module contract and receives the Eloquent model.

## Published base repository

After:

```bash
php artisan vendor:publish --tag=module-generator
```

`BaseRepository` becomes application-owned code. It provides:

```text
getAll()
find(id)
findDynamic(...)
getByDynamic(...)
store(data)
update(id, data)
delete(id)
pushCriteria(...)
popCriteria(...)
skipCriteria(...)
applyCriteria(...)
```

`findDynamic` and `getByDynamic` support structured `where`, eager loading, in/not-in, between/not-between, null/not-null, OR variants and raw conditions.

## Criteria

Active Criteria are applied before repository reads:

```php
$products = $repository
    ->pushCriteria(new ActiveProducts())
    ->getAll();
```

See [Criteria pattern](/en/utilities/criteria).

## Paths

Repository destinations are controlled by:

```text
paths.repository.eloquent
paths.repository.contracts
```

The generator also resolves the base repository classes through `BaseClassLocator`, allowing published application base classes to be used.
