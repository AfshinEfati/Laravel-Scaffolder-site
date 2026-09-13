---
title: Policyها
lang: fa
---

# Policyها

برای ساخت Policy استاندارد Laravel:

```bash
php artisan make:module Product --policy
```

خروجی:

```text
app/Policies/ProductPolicy.php
```

Scaffolder فقط ساختار اولیه‌ی Policy را می‌سازد. اینکه چه کسی اجازه‌ی View، Update یا Delete دارد به Ruleهای واقعی پروژه‌ی تو بستگی دارد و قابل حدس‌زدن نیست.

مثلاً می‌توانی Rule مالکیت را این‌طور پیاده کنی:

```php
public function update(User $user, Product $product): bool
{
    return $user->id === $product->owner_id;
}
```

پس بعد از Generate شدن Policy، متدها را با منطق Authorization واقعی پروژه کامل کن.
