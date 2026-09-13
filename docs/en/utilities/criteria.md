---
title: Criteria pattern
lang: en
---

# Criteria pattern

The publishable repository infrastructure includes `CriteriaInterface`, allowing reusable query constraints to be applied without putting every filter directly into a repository method.

```php
final class ActiveProducts implements CriteriaInterface
{
    public function apply($model)
    {
        return $model->where('is_active', true);
    }
}
```

After publishing the base infrastructure, keep criteria classes focused on query composition and combine them through your repository workflow.
