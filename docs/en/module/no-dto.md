---
title: --no-dto / -nd
lang: en
---

# `--no-dto` / `-nd`

Disable DTO generation and use array-based data in the generated layers that normally depend on the DTO.

```bash
php artisan make:module Product --no-dto
```

The command passes `usesDto=false` to service, action and controller generation. This makes `--no-dto` more than a file omission: generated method signatures and data flow are adapted to work without `ProductDTO`.

## Full-stack exception

`--no-dto` is the important exception to the normal full-stack precedence rules. The `--all` / `--full` block does not forcibly reset the DTO toggle.

```bash
php artisan make:module Product --all --no-dto
```

This creates the otherwise complete stack while keeping DTO generation disabled.

::: tip
Use this combination when your application prefers validated arrays, custom data objects or another DTO package but still wants the rest of Laravel Scaffolder's complete stack.
:::
