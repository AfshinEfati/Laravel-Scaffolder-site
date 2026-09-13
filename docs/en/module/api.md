---
title: --api
lang: en
---

# `--api`

`--api` forces API-style controller generation.

```bash
php artisan make:module Product --api
```

API mode also enables Form Requests and Actions unless actions are explicitly disabled:

```bash
php artisan make:module Product --api --no-actions
```

The default configuration already sets `controller_type` to `api`, so `--api` is most useful when a project has changed that default to `web` or when you want the command to be self-documenting in automation scripts.
