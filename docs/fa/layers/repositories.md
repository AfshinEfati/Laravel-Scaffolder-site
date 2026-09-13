---
title: Repositoryها
lang: fa
---

# Repositoryها

هر Module یک Contract و یک پیاده‌سازی Eloquent برای Repository دارد:

```text
app/Repositories/Contracts/ProductRepositoryInterface.php
app/Repositories/Eloquent/ProductRepository.php
```

Concrete Repository از `BaseRepository` منتشرشده ارث می‌برد و محل استاندارد Queryهای مخصوص Model است.

```php
final class ProductRepository extends BaseRepository implements ProductRepositoryInterface
{
    public function __construct(Product $model)
    {
        parent::__construct($model);
    }
}
```

برای Filterهای قابل استفاده مجدد، [Criteria Pattern](/fa/utilities/criteria) را ببین.
