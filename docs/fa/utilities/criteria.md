---
title: Criteria Pattern
lang: fa
---

# Criteria Pattern

اگر چند Query مختلف یک شرط مشترک دارند، لازم نیست آن شرط را داخل همه‌ی Repositoryها تکرار کنی. `BaseRepository` یک Criteria Pattern سبک برای همین کار دارد.

اول فایل‌های پایه را Publish کن:

```bash
php artisan vendor:publish --tag=module-generator
```

بعد یک Criteria بساز:

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

## استفاده روی Repository

```php
$repository
    ->pushCriteria(new ActiveProducts())
    ->getAll();
```

از این به بعد Criteria قبل از Query روی Builder اعمال می‌شود.

## حذف Criteria

```php
$repository->popCriteria(ActiveProducts::class);
```

## رد کردن Criteria برای یک Flow خاص

```php
$repository->skipCriteria()->getAll();
```

Criteria روی Readهای اصلی `BaseRepository` مثل `getAll()`، `find()`، `findDynamic()` و `getByDynamic()` اعمال می‌شود.

هر Criteria یک Eloquent `Builder` می‌گیرد و باید Builder را برگرداند؛ بنابراین می‌توانی شرط، Join، Order یا هر Query Constraint قابل استفاده‌ی مجددی را آنجا قرار بدهی.
