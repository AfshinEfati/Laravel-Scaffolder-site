---
title: Criteria Pattern
lang: fa
---

# Criteria Pattern

`BaseRepository` Publish‌شده یک مکانیزم سبک برای Query Constraintهای قابل استفاده مجدد دارد.

```bash
php artisan vendor:publish --tag=module-generator
```

یک Criteria:

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

استفاده:

```php
$repository
    ->pushCriteria(new ActiveProducts())
    ->getAll();
```

حذف:

```php
$repository->popCriteria(ActiveProducts::class);
```

Bypass موقت:

```php
$repository->skipCriteria()->getAll();
```

Criteria روی `getAll`، `find`، `findDynamic` و `getByDynamic` اعمال می‌شود. هر Criteria یک Eloquent Builder می‌گیرد و Builder برمی‌گرداند.
