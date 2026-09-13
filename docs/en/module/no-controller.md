---
title: --no-controller
lang: en
---

# `--no-controller`

Skip controller generation while still creating the core repository/service layers and any other enabled output:

```bash
php artisan make:module Product --no-controller
```

Use this for domain/application modules that are not exposed directly through HTTP.
