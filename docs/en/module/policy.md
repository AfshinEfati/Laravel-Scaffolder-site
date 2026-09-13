---
title: --policy
lang: en
---

# `--policy`

Generate a Laravel policy for the module:

```bash
php artisan make:module Product --policy
```

The generated policy contains the standard ability methods such as `viewAny`, `view`, `create`, `update`, `delete`, `restore` and `forceDelete`.

`--all` and `--full` enable policy generation automatically. A normal module does not generate a policy unless the configuration or CLI requests it.
