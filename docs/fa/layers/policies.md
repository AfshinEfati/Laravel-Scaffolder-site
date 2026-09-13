---
title: Policyها
lang: fa
---

# Policyها

Policy در حالت معمول Opt-in است:

```bash
php artisan make:module Product --policy
```

Skeleton قابلیت‌های استاندارد Laravel را می‌سازد:

```php
public function viewAny(User $user): bool { /* ... */ }
public function view(User $user, Product $product): bool { /* ... */ }
public function create(User $user): bool { /* ... */ }
public function update(User $user, Product $product): bool { /* ... */ }
public function delete(User $user, Product $product): bool { /* ... */ }
```

منطق واقعی Authorization را متناسب با پروژه تکمیل کن.
