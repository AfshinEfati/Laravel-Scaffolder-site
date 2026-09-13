---
title: --no-provider
lang: en
---

# `--no-provider`

Skip module provider generation and automatic interface bindings:

```bash
php artisan make:module Product --no-provider
```

The command warns you that repository/service bindings must then be registered manually.

Use this when bindings are centralized in an existing application provider or container module.
