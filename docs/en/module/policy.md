---
title: --policy
lang: en
---

# `--policy`

Generate a Laravel Policy for the module.

```bash
php artisan make:module Product --policy
```

The generated policy follows Laravel's familiar authorization abilities, giving you a place to implement application-specific decisions such as:

```php
public function viewAny(User $user): bool
{
    return true;
}

public function update(User $user, Product $product): bool
{
    return $user->id === $product->owner_id;
}
```

The generated skeleton is intentionally conservative: the scaffolder cannot know your authorization rules, so you should replace placeholder decisions with real domain logic.

## Defaults and full stack

Policy generation is opt-in unless your published configuration defines `defaults.with_policy` or you request a complete stack.

```bash
php artisan make:module Product --all
```

Both `--all` and `--full` enable the policy.

## Disabling

Use `--no-policy` to turn policy generation off during a normal command:

```bash
php artisan make:module Product --policy --no-policy
```

The negative option wins in a normal build. Full-stack generation is applied later and therefore enables the policy again.
