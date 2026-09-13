---
title: --actions
lang: en
---

# `--actions`

Generate invokable action classes for CRUD operations:

```bash
php artisan make:module Product --actions
```

Typical output includes list, show, create, update and delete actions under the configured `Actions` path.

Actions sit between controllers and services, making controller methods thin and giving application operations a focused class of their own.

API mode enables actions automatically unless `--no-actions` is supplied.
