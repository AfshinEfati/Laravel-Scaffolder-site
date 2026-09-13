---
title: Criteria Pattern
lang: fa
---

# Criteria Pattern

زیرساخت Repository قابل Publish شامل `CriteriaInterface` است تا Filterهای Query قابل استفاده مجدد باشند و هر شرطی وارد Repository Method جداگانه نشود.

```php
final class ActiveProducts implements CriteriaInterface
{
    public function apply($model)
    {
        return $model->where('is_active', true);
    }
}
```

Criteria را کوچک و متمرکز روی Query Composition نگه دار.
