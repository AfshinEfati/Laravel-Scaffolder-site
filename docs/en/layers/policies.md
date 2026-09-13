---
title: Policies
lang: en
---

# Policies

Policies are opt-in unless full-stack generation is requested.

```bash
php artisan make:module Product --policy
```

The generated skeleton follows Laravel's standard abilities:

```php
public function viewAny(User $user): bool { /* ... */ }
public function view(User $user, Product $product): bool { /* ... */ }
public function create(User $user): bool { /* ... */ }
public function update(User $user, Product $product): bool { /* ... */ }
public function delete(User $user, Product $product): bool { /* ... */ }
```

Replace the placeholder decisions with your application's authorization rules.
