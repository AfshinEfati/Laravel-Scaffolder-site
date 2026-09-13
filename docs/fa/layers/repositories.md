---
title: Repositoryها
lang: fa
---

# Repositoryها

هر اجرای عادی `make:module` یک Contract و یک Eloquent Repository تولید می‌کند:

```text
app/Repositories/Contracts/ProductRepositoryInterface.php
app/Repositories/Eloquent/ProductRepository.php
```

Contract از `BaseRepositoryInterface` و Concrete از `BaseRepository` استفاده می‌کند.

## BaseRepository

بعد از Publish:

```bash
php artisan vendor:publish --tag=module-generator
```

BaseRepository وارد خود Application می‌شود و متدهایی مثل این‌ها دارد:

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
```

`findDynamic` و `getByDynamic` شرط‌های Where، Eager Load، In/NotIn، Between، Null، OR Variantها و Raw Condition را پشتیبانی می‌کنند.

Criteriaهای فعال قبل از Readها روی Builder اعمال می‌شوند.
