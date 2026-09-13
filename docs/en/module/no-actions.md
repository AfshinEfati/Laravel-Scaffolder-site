---
title: --no-actions
lang: en
---

# `--no-actions`

Explicitly disable Action classes:

```bash
php artisan make:module Product --api --no-actions
```

This option is particularly important in API mode because API generation otherwise turns actions on automatically.
