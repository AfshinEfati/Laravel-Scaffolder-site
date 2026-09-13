---
title: --no-resource
lang: en
---

# `--no-resource`

Disable API Resource generation:

```bash
php artisan make:module Product --no-resource
```

This is useful when controllers return domain DTOs, custom transformers or response objects instead of Laravel `JsonResource` classes.
