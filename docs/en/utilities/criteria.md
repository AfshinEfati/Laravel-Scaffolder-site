---
title: Criteria pattern
lang: en
---

# Criteria pattern

The published `BaseRepository` includes a lightweight Criteria mechanism for reusable query constraints.

First publish the base infrastructure:

```bash
php artisan vendor:publish --tag=module-generator
```

A criterion implements:

```php
use App\Repositories\Criteria\CriteriaInterface;
use Illuminate\Database\Eloquent\Builder;

final class ActiveProducts implements CriteriaInterface
{
    public function apply(Builder $model): Builder
    {
        return $model->where('is_active', true);
    }
}
```

## Push criteria

```php
$repository
    ->pushCriteria(new ActiveProducts())
    ->getAll();
```

A class-string is also accepted and instantiated by `pushCriteria`.

## Remove or bypass criteria

```php
$repository->popCriteria(ActiveProducts::class);
```

```php
$repository->skipCriteria()->getAll();
```

`skipCriteria(false)` enables application again.

## Where criteria apply

The base repository applies active criteria to `getAll`, `find`, `findDynamic` and `getByDynamic`. Each criterion receives the Eloquent Builder and must return a Builder.

The implementation also accepts an object that has an `apply` method, but implementing `CriteriaInterface` is the clearest contract.
