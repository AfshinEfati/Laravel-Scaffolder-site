---
title: --policy
lang: fa
---

# `--policy`

برای Model ماژول یک Policy استاندارد Laravel می‌سازد:

```bash
php artisan make:module Product --policy
```

Policy تولیدشده فقط Skeleton است؛ Scaffolder قرار نیست Rule کسب‌وکار پروژه‌ات را حدس بزند. مثلاً خودت می‌توانی چیزی شبیه این را اضافه کنی:

```php
public function update(User $user, Product $product): bool
{
    return $user->id === $product->owner_id;
}
```

در اجرای عادی، `--no-policy` می‌تواند Policy را خاموش کند. اما `--all` و `--full` در مرحله نهایی دوباره Policy را فعال می‌کنند.
