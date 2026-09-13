---
title: --no-dto
lang: en
---

# `--no-dto`

Generate the module without a DTO:

```bash
php artisan make:module Product --no-dto
```

Services, actions and controllers adapt to array-based input when DTO usage is disabled.

Use it when your application intentionally prefers validated arrays or another data-object library.
