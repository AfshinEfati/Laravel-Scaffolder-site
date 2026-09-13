---
title: --policy
lang: fa
---

# `--policy`

برای ماژول Policy استاندارد Laravel ایجاد می‌کند:

```bash
php artisan make:module Product --policy
```

Skeleton تولیدشده محل پیاده‌سازی Ruleهای واقعی Authorization پروژه است:

```php
public function update(User $user, Product $product): bool
{
    return $user->id === $product->owner_id;
}
```

Scaffolder نمی‌تواند Rule کسب‌وکار شما را حدس بزند؛ بنابراین Policy تولیدشده باید با منطق واقعی پروژه تکمیل شود.

در حالت عادی `--no-policy` بعد از `--policy` اعمال می‌شود و می‌تواند آن را خاموش کند. اما `--all` و `--full` در انتها Policy را دوباره فعال می‌کنند.
