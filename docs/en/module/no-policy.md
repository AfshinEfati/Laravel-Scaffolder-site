---
title: --no-policy
lang: en
---

# `--no-policy`

Explicitly disable policy generation:

```bash
php artisan make:module Product --all --no-policy
```

Use it when authorization is handled elsewhere or the module does not expose protected operations.
