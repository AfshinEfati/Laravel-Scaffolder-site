---
title: Policies
lang: en
---

# Policies

Policy generation creates a Laravel policy skeleton for the module:

```text
app/Policies/ProductPolicy.php
```

```bash
php artisan make:module Product --policy
```

The generated policy supplies the familiar authorization structure, but the scaffolder cannot infer ownership, roles or business-specific authorization decisions.

After generation, replace placeholder decisions with application rules:

```php
public function update(User $user, Product $product): bool
{
    return $user->id === $product->owner_id;
}
```

Use `--no-policy` to disable a configured/default policy during a normal build. Full-stack mode enables policies again.
