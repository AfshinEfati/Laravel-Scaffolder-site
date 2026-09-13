---
title: --no-policy
lang: en
---

# `--no-policy`

Explicitly disable Policy generation.

```bash
php artisan make:module Product --no-policy
```

This is useful when a project has enabled policies in `defaults.with_policy` but a particular module should not receive one.

During a normal build, `--no-policy` is evaluated after `--policy`, so the negative switch wins if both are present.

```bash
php artisan make:module Product --policy --no-policy
```

No policy is generated.

`--all` / `--full` are applied later and enable the policy again.
