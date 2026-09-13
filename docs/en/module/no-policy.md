---
title: --no-policy
lang: en
---

# `--no-policy`

Explicitly disable policy generation for normal module generation:

```bash
php artisan make:module Product --policy --no-policy
```

or use it when the project default enables policies.

::: warning Full-stack precedence
In the current implementation, `--all` and `--full` enable policies after the individual skip switches are evaluated. Therefore `--all --no-policy` still generates a policy. This page documents current runtime behavior; use a non-full-stack command when you need to omit the policy.
:::
