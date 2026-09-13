---
title: Policyها
lang: fa
---

# Policyها

```bash
php artisan make:module Product --policy
```

فایل زیر را می‌سازد:

```text
app/Policies/ProductPolicy.php
```

Policy تولیدشده Skeleton Authorization است و Scaffolder نمی‌تواند Ownership، Role یا Rule کسب‌وکار پروژه را حدس بزند.

```php
public function update(User $user, Product $product): bool
{
    return $user->id === $product->owner_id;
}
```

بعد از Generation Ruleهای Placeholder را با منطق واقعی جایگزین کنید.
